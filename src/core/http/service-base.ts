import { AxiosError } from 'axios';
import Axios from './index';
import { isCancel } from './index';
import { APIType, HTTP_HEADER } from 'core/base/enum';
import { ApiResult, ApiConfig } from 'core/base/type';
import { IGatewayOptions } from 'core/base/type/http';
import { REQUEST_CANCELLED } from 'core/base/const/axios';
import urlUtil from '@/utils/url';

export abstract class ServiceBase {
  protected static async sendToGateway<T>(
    opts: IGatewayOptions
  ): Promise<ApiResult<T>> {
    if (opts.method === undefined) {
      opts.method = APIType.POST; // Default method
    }
    opts.url = urlUtil.transformUrl(opts.url); // Transform URL for requests

    // Set default headers
    let contextHeader: { [key: string]: string } = {};
    if (opts.header) {
      contextHeader = opts.header;
    }

    const axiosOpts = {
      ...opts.config,
      headers: {
        [HTTP_HEADER.ContentType]: 'application/json',
      },
    };

    try {
      let response;
      switch (opts.method) {
        case APIType.POST:
          response = await Axios.post(opts.url, opts.data, axiosOpts);
          break;
        case APIType.GET:
          response = await Axios.get(opts.url, axiosOpts);
          break;
        case APIType.PUT:
          response = await Axios.put(opts.url, opts.data, axiosOpts);
          break;
        case APIType.DELETE:
          response = await Axios.delete(opts.url, axiosOpts);
          break;
        default:
          break;
      }

      // Return result
      return new ApiResult<any>(
        response && response?.data,
        response && response?.status,
        ''
      );
    } catch (apiError) {
      const axiosError = apiError as AxiosError;
      const errorMessage = ServiceBase.getAxiosErrorMessage(axiosError);
      return new ApiResult<any>(
        axiosError.response?.data,
        axiosError.response?.status,
        errorMessage
      );
    }
  }

  private static getAxiosErrorMessage(axiosError: AxiosError) {
    const isRequestCancelled = isCancel(axiosError);
    let errorMessage = axiosError.message;
    if (isRequestCancelled) {
      errorMessage = REQUEST_CANCELLED;
    }
    return errorMessage;
  }
}

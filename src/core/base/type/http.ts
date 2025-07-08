import { AxiosRequestConfig } from 'axios';
import { APIType } from '../enum';
import { IMultiApiConfig } from '.';

export class ApiConfig {
  ActionName: string | undefined;
  ControllerName: string;
  Data: any;
  QueryString?: string;
  ActionVerb: string;
  constructor(
    _actionVerb: string,
    _controllerName: string,
    _actionName: string | undefined,
    _queryString?: string,
    _data?: any
  ) {
    this.ActionVerb = _actionVerb;
    this.ControllerName = _controllerName;
    this.ActionName = _actionName;
    this.QueryString = _queryString;
    this.Data = _data;
  }
}

export class ApiResult<T> {
  public value?: T;
  public errors?: string[];
  public statusCode?: number;
  public get hasErrors(): boolean {
    return (
      this.errors != null &&
      Array.isArray(this.errors) &&
      ((this.errors.length > 0 && this.errors[0].length > 0) ||
        this.errors.length === 0)
    );
  }

  public get errorMessage(): string {
    return this.errors?.join('') || '';
  }

  constructor(value: T, status?: number, ...errors: string[]) {
    this.value = value;
    this.statusCode = status;
    this.errors = errors[0] === undefined || errors[0] === null ? [] : errors;
  }
}

export interface IFileOptions {
  url: string;
  data: any;
  method: string;
  config?: Partial<AxiosRequestConfig>;
}

export interface IGatewayOptions {
  url: string;
  data?: ApiConfig | IMultiApiConfig;
  method?: APIType;
  header?: { [key: string]: string };
  config?: any;
}

export interface IHtmlContentOptions {
  url: string;
  config?: Partial<AxiosRequestConfig>;
}

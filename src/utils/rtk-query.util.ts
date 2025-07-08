// Update the import path below to the correct relative path where ApiBaseError is defined
import { ApiBaseError } from 'core/api/api.base';
import { ApiResult } from 'core/base/type';

const withApiResponse = async <TResponse>(
  asyncMethod: () => Promise<ApiResult<TResponse>>
) => {
  const result = await asyncMethod();
  if (!result?.hasErrors) {
    return {
      data: result?.value as TResponse,
    };
  } else {
    return {
      error: new ApiBaseError(
        result?.statusCode,
        result?.errors,
        result?.value as string | undefined
      ),
    };
  }
};

// Array to hold running promises
let runningPromises: any = [];

const waitForResponse = async () => {
  // Wait for all ongoing promises to settle
  await Promise.allSettled(runningPromises);
};

export { withApiResponse, waitForResponse };

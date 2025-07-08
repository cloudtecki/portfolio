export * from './serviceUrl';

export enum APIType {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
export enum HTTP_HEADER {
  ContentType = 'Content-Type',
  ActivePodId = 'Active-Pod-Id',
}
export enum HttpStatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  Conflict = 409,
  UnprocessableEntity = 422,
  Locked = 423,
  InternalServerError = 500,
  Forbidden = 403,
}

export enum ApiStatus {
  DEFAULT = 0,
  LOADING = 1,
  SUCCESS = 2,
  ERROR = 3,
}

export enum TOAST_TYPE {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'danger',
  INFO = 'info',
}

export const enum FileExtensions {
  Json = '.json',
}

export enum STATUS_ENUM {
  Active = 1,
  InActive = 0,
}

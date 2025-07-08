import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
// import { ApiCacheTags } from 'core/base/const'; // Uncomment if needed

export class ApiBaseError {
  status?: number;
  data?: string[];
  value?: any;

  constructor(status?: number, data?: string[], value?: any) {
    this.status = status;
    this.data = data;
    this.value = value;
  }
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery<ApiBaseError>(),
  tagTypes: Object.values(''),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
});

export const { middleware, reducer, reducerPath } = baseApi;

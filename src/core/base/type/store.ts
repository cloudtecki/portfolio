import { PayloadAction } from '@reduxjs/toolkit';
import { ApiStatus } from '../enum';

export type GenericPayloadAction<
  TPayload = void,
  TMeta = never,
  TError = never,
  TActionType extends string = string
> = PayloadAction<TPayload, TActionType, TMeta, TError>;

export type GenericState<
  TData = never,
  TStatus = ApiStatus,
  TError = string
> = {
  status?: TStatus;
  error?: TError;
} & ([TData] extends [never] ? Record<string, unknown> : { data: TData });

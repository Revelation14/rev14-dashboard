import type { FormEvent } from 'react';

export interface ValueType<T = Event> {
  name: string;
  value: string | number | boolean | string[];
  label?: string;
  event?: FormEvent<T>;
}

export enum IHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
export interface IHttpException {
  message: string;
  statusCode: string;
}

export interface IHttpResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  path: string;
  method: IHttpMethod;
}

export interface IUploaded {}

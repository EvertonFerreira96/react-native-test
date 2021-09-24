/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export enum HttpStatusCode {
  success = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface HttpClient<R = any> {
  request: ({
    method,
    url,
    body,
    headers,
  }: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpMethod {
  Post = 'post',
  Get = 'get',
  Put = 'put',
  Delete = 'delete',
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

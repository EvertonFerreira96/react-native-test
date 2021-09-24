/* eslint-disable class-methods-use-this */
import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http';

import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch ({ message }) {
      axiosResponse = message as unknown as AxiosResponse<string>;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

import axios from 'axios';
import { AxiosInstance } from 'axios';
import { Injectable, ErrorHandler } from '@angular/core';

export interface Params {
  [key: string]: any;
}

export interface HttpOptions {
  url: string;
  params?: Params;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  // I initialize the ApiClient.
  constructor(errorHandler: ErrorHandler) {

    this.errorHandler = errorHandler;

    // The ApiClient wraps calls to the underlying Axios client.
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString(),
        'Content-type': 'application/json'
      }
    });

  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I perform a GET request with the given options.
  public async get<T>(options: HttpOptions): Promise<T> {

    try {

      const axiosResponse = await this.axiosClient.request<T>({
        method: 'get',
        url: options.url,
        params: options.params
      });

      return (axiosResponse.data);

    } catch (error) {

      return (Promise.reject(this.normalizeError(error)));

    }

  }

  // I perform a POST request with the given options.
  public async post<T>(options: HttpOptions): Promise<T> {

    try {

      const axiosResponse = await this.axiosClient.request<T>({
        method: 'post',
        url: options.url,
        params: options.params
      });

      return (axiosResponse.data);

    } catch (error) {

      return (Promise.reject(this.normalizeError(error)));

    }

  }

  // ---
  // PRIVATE METHODS.
  // ---

  // Errors can occur for a variety of reasons. I normalize the error response so that
  // the calling context can assume a standard error structure.
  private normalizeError(error: any): ErrorResponse {

    this.errorHandler.handleError(error);

    // NOTE: Since I'm not really dealing with a production API, this doesn't really
    // normalize anything (ie, this is not the focus of this demo).
    return ({
      id: '-1',
      code: 'UnknownError',
      message: 'An unexpected error occurred.'
    });

  }
}

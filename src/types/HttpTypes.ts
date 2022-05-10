import {AxiosRequestHeaders} from "axios";

export enum HttpRequestMethods {
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
}

export enum InterceptorType {
    request,
    response
}

export type HttpRequestBody = object | string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined;
export type HttpRequestMethod = HttpRequestMethods;
export type HttpRequestHeaders = AxiosRequestHeaders | undefined

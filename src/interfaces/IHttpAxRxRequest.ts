import {HttpRequestBody, HttpRequestHeaders, HttpRequestMethod} from "../types/HttpTypes";

export default interface IHttpAxRxRequest  {
    url: string;
    method: HttpRequestMethod;
    headers: HttpRequestHeaders,
    body?: HttpRequestBody
}
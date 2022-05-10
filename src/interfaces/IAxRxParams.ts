import {HttpRequestBody, HttpRequestHeaders} from "../types/HttpTypes";

export default interface IAxRxParams{
    url: string;
    headers?: HttpRequestHeaders,
    body?: HttpRequestBody
}
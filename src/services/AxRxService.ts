import HttpBaseRequest from "./HttpBaseRequest";
import {Observable} from "rxjs";
import IHttpAxRxRequest from "../interfaces/IHttpAxRxRequest";
import {AxiosRequestConfig} from "axios";
import IAxRxParams from "../interfaces/IAxRxParams";
import {HttpRequestMethods} from "../types/HttpTypes";
import IAxRxService from "../interfaces/IAxRxService";

export default class AxRxService extends HttpBaseRequest implements IAxRxService{
    public get<T>(param: IAxRxParams, axiosCustomConfig?: AxiosRequestConfig) : Observable<T>{
        const innerParam: IHttpAxRxRequest = {
            url: param.url, headers: param.headers,
            body: param.body, method: HttpRequestMethods.GET};
        return this.runRequest<T>(innerParam, axiosCustomConfig);
    }
    public post<T>(param: IAxRxParams, axiosCustomConfig?: AxiosRequestConfig) : Observable<T>{
        const innerParam: IHttpAxRxRequest = {
            url: param.url, headers: param.headers,
            body: param.body, method: HttpRequestMethods.POST};
        return this.runRequest<T>(innerParam, axiosCustomConfig);
    }
    public put<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined = undefined) : Observable<T>{
        const innerParam: IHttpAxRxRequest = {
            url: param.url, headers: param.headers,
            body: param.body, method: HttpRequestMethods.PUT};
        return this.runRequest<T>(innerParam, axiosCustomConfig);
    }
    public patch<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined = undefined) : Observable<T>{
        const innerParam: IHttpAxRxRequest = {
            url: param.url, headers: param.headers,
            body: param.body, method: HttpRequestMethods.PATCH};
        return this.runRequest<T>(innerParam, axiosCustomConfig);
    }
    public delete<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined = undefined) : Observable<T>{
        const innerParam: IHttpAxRxRequest = {
            url: param.url, headers: param.headers,
            body: param.body, method: HttpRequestMethods.DELETE};
        return this.runRequest<T>(innerParam, axiosCustomConfig);
    }
}

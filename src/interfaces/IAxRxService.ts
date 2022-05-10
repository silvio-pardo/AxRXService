import IAxRxParams from "./IAxRxParams";
import {AxiosRequestConfig} from "axios";
import {Observable} from "rxjs";
import {InterceptorType} from "../types/HttpTypes";

export default interface IAxRxService{
    get<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig) : Observable<T>;
    post<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined) : Observable<T>;
    put<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined) : Observable<T>;
    patch<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined) : Observable<T>;
    delete<T>(param: IAxRxParams, axiosCustomConfig: AxiosRequestConfig | undefined) : Observable<T>;
    insInterceptor(type: InterceptorType, callback: any) : number;
    rmInterceptor(type: InterceptorType, interceptor: number) : void;
}

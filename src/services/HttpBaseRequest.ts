import IHttpAxRxRequest from "../interfaces/IHttpAxRxRequest";
import {HttpRequestMethods, InterceptorType} from "../types/HttpTypes";
import {Observable} from "rxjs";
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';

export default class HttpBaseRequest{
    protected httpClient: AxiosInstance;

    constructor(private config: AxiosRequestConfig = {}) {
        this.httpClient = axios.create(config);
    }

    protected runRequest<T>(args: IHttpAxRxRequest, axiosCustomConfig?: AxiosRequestConfig) {
        let configArgs: AxiosRequestConfig = {};
        if(axiosCustomConfig !== undefined)
            configArgs = axiosCustomConfig;

        configArgs.headers = args.headers;
        let request: AxiosPromise<T>;
        // body object serialization
        if(typeof args.body === typeof Object){ args.body = JSON.stringify(args.body); }
        // end
        switch (args.method) {
            case HttpRequestMethods.GET:
                configArgs.data = args.body;
                request = this.httpClient.get<T>(args.url, configArgs);
                break;
            case HttpRequestMethods.POST:
                request = this.httpClient.post<T>(args.url, args.body, configArgs);
                break;
            case HttpRequestMethods.PUT:
                request = this.httpClient.put<T>(args.url, args.body, configArgs);
                break;
            case HttpRequestMethods.PATCH:
                request = this.httpClient.patch<T>(args.url, args.body, configArgs);
                break;
            case HttpRequestMethods.DELETE:
                configArgs.data = args.body;
                request = this.httpClient.delete<T>(args.url, configArgs);
                break;
            default:
                throw new Error('Method unsupported');
        }
        return new Observable<T>(subscriber => {
            request
                .then(response => {
                    subscriber.next(response.data);
                })
                .catch((err: Error) => {
                    subscriber.error(err);
                })
                .finally(() => {
                    subscriber.complete();
                });
        });
    }

    public insInterceptor(type: InterceptorType, callback: any) : number{
        switch(type){
            case InterceptorType.request:
                return this.httpClient.interceptors.request.use(callback);
            case InterceptorType.response:
                return this.httpClient.interceptors.response.use(callback);
        }
        throw new Error('Unsupported Interceptor type');
    }

    public rmInterceptor(type: InterceptorType, interceptor: number) : void{
        switch(type){
            case InterceptorType.request:
                return this.httpClient.interceptors.request.eject(interceptor);
            case InterceptorType.response:
                return this.httpClient.interceptors.response.eject(interceptor);
        }
        throw new Error('Unsupported Interceptor type');
    }
}
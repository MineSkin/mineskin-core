import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface IRequestExecutor {
    dynamicRequest<K extends string | any>(key: K, request: AxiosRequestConfig, breadcrumb?: string): Promise<AxiosResponse>;
}

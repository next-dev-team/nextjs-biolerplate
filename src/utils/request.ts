import axios, { AxiosResponse } from 'axios';

export const _axiosInstance = axios.create({
	baseURL: 'https://gorest.co.in/public/v2',
});

export const _axiosGet = <Data>(url: string) =>
	_axiosInstance.get<Data, AxiosResponse<Data>>(url);

export const _axiosPost = <Data>(url: string) =>
	_axiosInstance.post<Data, AxiosResponse<Data>>(url);

export const _axiosDel = <Data>(url: string) =>
	_axiosInstance.delete<Data, AxiosResponse<Data>>(url);

export const _axiosPut = <Data>(url: string) =>
	_axiosInstance.put<Data, AxiosResponse<Data>>(url);

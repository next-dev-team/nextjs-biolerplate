import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: 'https://gorest.co.in/public/v2',
});

export const fetcher = <Data>(url: string) => api.get<Data, AxiosResponse<Data>>(url);

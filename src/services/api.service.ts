import axios, { AxiosInstance } from "axios";

export interface IApiService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export class ApiService implements IApiService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000",
    });
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.axios.get<T>(url);
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await this.axios.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data: any): Promise<T> {
    const response = await this.axios.put<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.axios.delete<T>(url);
    return response.data;
  }
}

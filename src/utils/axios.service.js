import axios from 'axios';
import systemConfig from 'config/system.config';

class Service {
  constructor() {
    axios.defaults.withCredentials = false;
    this.headers = {
      csrf: 'token',
      withCredentials: true,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    this.init();
  }

  init = () => {
    const service = axios.create({
      headers: this.headers,
      baseURL: systemConfig.api.baseUrl,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(this.handleAuthToken, this.handleError);
    this.service = service;
  };

  setCustomHeaders = (headers) => {
    this.headers = headers || { csrf: 'token' };
    this.headers.withCredentials = true;
    this.init();
    return this;
  };

  handleAuthToken = (config) => {
    const token = localStorage.getItem('token');
    const tokenType = localStorage.getItem('tokenType') || 'Bearer';

    if (token != null) {
      let authorization = '';
      switch (tokenType) {
        case 'Bearer':
        default:
          authorization = `Bearer ${token}`;
          break;
      }

      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = authorization;
    }

    return config;
  };

  handleSuccess = (response) => response;

  handleError = (error) => {
    const defaultError = { status: 500, data: error.message, response: {} };
    return Promise.resolve(error.response || defaultError);
  };

  async get(path, params, callback) {
    const response = await this.service.request({
      method: 'GET',
      url: path,
      responseType: 'json',
      params,
    });
    return callback(response.status, response.data, response);
  }

  async patch(path, payload, callback) {
    const response = await this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
    return callback(response.status, response.data, response);
  }

  async put(path, payload, callback) {
    const response = await this.service.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
    });
    return callback(response.status, response.data, response);
  }

  async post(path, payload, callback) {
    const response = await this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
    return callback(response.status, response.data, response);
  }

  async delete(path, callback) {
    const response = await this.service.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
    });
    return callback(response.status, response.data, response);
  }
}

export default new Service();

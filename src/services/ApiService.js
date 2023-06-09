import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';

    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async fetchIncenses() {
    const { data } = await this.instance.get('/incense');

    return data;
  }

  async fetchCommunities() {
    const { data } = await this.instance.get('/community');

    return data;
  }

  async fetchIncenseNFT(incenseId) {
    const { data } = await this.instance.get(`/file/incense/${incenseId}`);

    console.log(data);

    return { data };
  }

  async postNFTs(body) {
    const { data } = await this.instance.post('/recommand', body);

    return data;
  }
}

export const apiService = new ApiService();

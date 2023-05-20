import { apiService } from '../services/ApiService';
import Store from './Store';

export default class IncenseStore extends Store {
  constructor() {
    super();

    this.incenses = {};
  }

  async fetchIncenses() {
    const { data } = await apiService.fetchIncenses();

    this.incenses = data;

    this.publish();
  }
}

export const incenseStore = new IncenseStore();

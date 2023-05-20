import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.wallet = { accounts: [] };

    this.connectStatus = '';
  }

  async updateWallet(accounts) {
    this.changeConnectStatus('connecting');
    this.publish();

    try {
      this.wallet = { accounts };

      this.changeConnectStatus('success');
      this.publish();

      return accounts;
    } catch (e) {
      this.changeConnectStatus('failed');
      this.publish();

      return '';
    }
  }

  changeConnectStatus(status) {
    this.connectStatus = status;
    this.publish();
  }

  resetConnectStatus() {
    this.connectStatus = '';
    this.publish();
  }

  get isConnectSuccess() {
    return this.connectStatus === 'success';
  }

  get isConnectFailed() {
    return this.connectStatus === 'failed';
  }
}

export const userStore = new UserStore();

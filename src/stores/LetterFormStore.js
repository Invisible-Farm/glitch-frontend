import Store from './Store';

export default class LetterFormStore extends Store {
  constructor() {
    super();

    this.fields = {
      community: '',
      from: '',
      to: '',
      value: '',
      response: '',
      story: '',
    };

    this.isEmpty = {
      community: true,
      from: true,
      to: true,
      value: true,
      response: true,
      story: true,
    };
  }

  async changeField(field) {
    const key = Object.keys(field)[0];

    this.fields = { ...this.fields, ...field };

    await this.checkEmpty(key);

    this.publish();
  }

  async checkEmpty(field) {
    if (!this.fields[field]) {
      this.isEmpty[field] = true;

      return;
    }

    this.isEmpty[field] = false;
  }

  isValidateFailed() {
    const values = Object.values(this.isEmpty);

    return values.includes(true);
  }
}

export const letterFormStore = new LetterFormStore();

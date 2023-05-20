import Store from './Store';

export default class NFTStore extends Store {
  constructor() {
    super();

    this.info = {
      proofOfValueMovieId: '',
      proofOfValueMovie: '',
      proofOfValueImageId: '',
      proofOfValueImage: '',
      incenseImageId: '',
      incenseImage: '',
    };

    this.isEmpty = {
      proofOfValueMovieId: true,
      proofOfValueMovie: true,
      proofOfValueImageId: true,
      proofOfValueImage: true,
      incenseImageId: true,
      incenseImage: true,
    };
  }

  async setInfo(data) {
    this.info = data;

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

export const nftStore = new NFTStore();

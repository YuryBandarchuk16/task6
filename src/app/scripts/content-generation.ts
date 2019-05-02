import * as Requests from './requests';

const RANDOM_TEXT_API_URL = 'https://baconipsum.com/api';

export const RANDOM_TEXT_TYPES = {
  ALL_MEAT: 'all-meat',
  MEAT_AND_FILLER: 'meat-and-filler'
};

export const RANDOM_TEXT_FORMATS = {
  JSON: 'json',
  TEXT: 'text',
  HTML: 'html'
};

interface RandomArticle {
  selectedFormat: string | null
  selectedType: string | null
  selectedParagraphs: number | null

  buildUrl: () => string
  appendParam: (url: string, name: string, value: string) => string

  format: (value: string) => RandomArticle
  type: (value: string) => RandomArticle
  paras: (value: number) => RandomArticle
  get: () => Promise<any>
}

export const newRandomArticle = () => {
  const result : RandomArticle = {
    selectedFormat: null,
    selectedType: null,
    selectedParagraphs: null,

    appendParam(url: string, name: string, value: string) {
      // no url encode happens in here
      return `${url}&${name}=${value}`;
    },

    buildUrl() {
      let result = `${RANDOM_TEXT_API_URL}?type=${this.selectedType}`;
      if (this.selectedParagraphs) {
        result = this.appendParam(result, 'paras', `${this.selectedParagraphs}`);
      }
      if (this.selectedFormat) {
        result = this.appendParam(result, 'format', this.selectedFormat);
      }

      return result;
    },

    format(value: string) {
      this.selectedFormat = value;
      return this;
    },
    type(value: string) {
      this.selectedType = value;
      return this;
    },
    paras(value: number) {
      this.selectedParagraphs = value;
      return this;
    },

    async get() {
      if (this.selectedType) {
        return Requests.fetchJSON(this.buildUrl());
      }

      throw new Error('Can not generate article: type is not set');
    }
  }

  return result
};

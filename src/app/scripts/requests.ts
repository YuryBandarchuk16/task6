const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

export const HTTPRequests = {
  GET: 'GET',
  POST: 'POST'
};

export const getProxiedUrl = (url: string) => {
  return `${PROXY_URL}/${url}`;
};

export const makeRequest = async (
  url: string,
  method: string,
  errorHandler: ((error: any) => void) | undefined
) => {
  try {
    return await fetch(getProxiedUrl(url), { method });
  } catch (error) {
    if (errorHandler) {
      errorHandler(error);
      return null;
    }
    throw error;
  }
};

export const fetchJSON = async (
  url: string ,
  errorHandler: ((error: any) => void) | undefined = undefined
) => {
  try {
    const response = await makeRequest(url, HTTPRequests.GET, errorHandler);
    if (!response) throw {};

    const result = await response.json();
    return result;
  } catch (ignored) {
    return null;
  }
};

import { Api } from '../__generated__/Api';

const { STRAPI_API_URL, STRAPI_TOKEN } = import.meta.env;

export const pascaApiClient = new Api({
  baseUrl: STRAPI_API_URL,
  baseApiParams: {
    format: 'json',
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  },
});

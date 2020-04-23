import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_PRODUCTION_URL
  : publicRuntimeConfig.API_DEVELOPMENT_URL;
export const APP_NAME = publicRuntimeConfig.APP_NAME;

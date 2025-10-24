interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'testing' | 'production';
  readonly STRAPI_API_URL: string;
  readonly STRAPI_TOKEN: string;

  readonly PUBLIC_GOOGLE_CALENDAR_API_KEY: string;
}

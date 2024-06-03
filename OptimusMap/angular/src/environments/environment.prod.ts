import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'OptimusMap',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44334/',
    redirectUri: baseUrl,
    clientId: 'OptimusMap_App',
    responseType: 'code',
    scope: 'offline_access OptimusMap',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44334',
      rootNamespace: 'OptimusMap',
    },
  },
} as Environment;

import axios from 'axios';

import { AppConfig } from '@/services/config/config';

import { createApiClient } from './services/createApiClient';

const baseApiConfig = axios.create({
  baseURL: AppConfig.publicApiHost,
});

export const baseApiClient = createApiClient(baseApiConfig);

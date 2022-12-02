import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig() as {
  publicRuntimeConfig: Record<string, string>;
};

export const AppConfig = {
  publicApiHost: publicRuntimeConfig.NEXT_PUBLIC_API_HOST,
} as const;

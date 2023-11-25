import { createStorefrontClient } from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  publicStorefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
  storeDomain: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com`,
  storefrontApiVersion: '2023-10',
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;

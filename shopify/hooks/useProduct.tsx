'use client'

import shopifyQuery from '@shopify/shopify-query';
import useCountry from './useCountry';
import { useEffect, useState } from 'react';
import { ShopifyProductDocument } from '@shopify/graphql';

export default function useProduct({ handle }: { handle: string | undefined | null }) {

  const country = useCountry();
  const [product, setProduct] = useState<ShopifyProductQuery['product'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    if (!handle) {
      setProduct(null);
      setError(new Error('No handle provided'));
      setLoading(false)
      return
    }

    setError(null);
    setLoading(true);

    shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle },
      tags: [handle],
      revalidate: 1000,
      country
    }).then(({ product }) => {
      setProduct(product);
      setLoading(false);
    }).catch((e) => {
      console.error(e);
      setError(e);
    }).finally(() => {
      setLoading(false);
    });
  }, [country]);

  return { product, loading, error }
}
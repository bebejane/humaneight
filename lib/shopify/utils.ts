export const flattenConnection = (data: ProductConnection | ProductConnection[] | OrderConnection | OrderConnection[]): Product[] | Order[] => {
  if (!Array.isArray(data))
    return data.edges.map(({ node }) => node);

  return data.map((d) => d.edges.map(({ node }) => node)).flat();
}

export const getShopifyId = (id: string): number => {
  const shopifyId = Buffer.from(id).toString('base64') as string
  return shopifyId.includes('/') ? parseInt(shopifyId.split('/').pop()?.split('?')[0] as string) : parseInt(shopifyId)
};


export const parseGID = (id: string): number => {
  return parseInt(id.split('/').pop()?.split('?')[0] as string)
};

export const shopifyGraphqlError = (errors: CustomerUserError[]): string | undefined => {

  if (!errors || !errors.length)
    return undefined
  return errors.map((e) => e.message).join('\n')
}


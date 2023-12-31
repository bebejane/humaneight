
export const getShopifyId = (id: string): number => {
  const shopifyId = Buffer.from(id).toString('base64') as string
  return shopifyId.includes('/') ? parseInt(shopifyId.split('/').pop()?.split('?')[0] as string) : parseInt(shopifyId)
};

export const parseGid = (id: string): string => {
  return parseInt(id.split('/').pop()?.split('?')[0] as string).toString()
};

export const shopifyGraphqlError = (errors: CustomerUserError[]): string | undefined => {

  if (!errors || !errors.length)
    return undefined
  return errors.map((e) => e.message).join('\n')
}


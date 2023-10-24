import client from "/lib/client"
import type { ApiError } from "@datocms/cma-client"

export const parseDatoError = (err: any): string => {
  const errors = (err as ApiError).errors.map(({ attributes: { code, details } }) => ({ code, field: details?.field, message: details?.message, detailsCode: details?.code, errors: Array.isArray(details?.errors) ? details?.errors.join('. ') : undefined }))
  return errors.map(({ code, field, message, detailsCode, errors }) => `${code} ${field ? `(${field})` : ''} ${message || ''} ${detailsCode || ''} ${errors ? `(${errors})` : ''}`).join('\n')
}

export const itemTypeId = async (type: string) => (await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string

export const isServer = typeof window === 'undefined'
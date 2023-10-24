import { buildClient } from '@datocms/cma-client-node'
import type { NextApiRequest, NextApiResponse } from 'next'
import shopify from '..'
import { printExecutableGraphQLDocument } from '@graphql-tools/documents'
import { AllShopifyProductsDocument } from '../../graphql'
import { shopifyQuery } from '../..'

export default async function test(req: NextApiRequest, res: NextApiResponse) {

  try {
    //console.log(printExecutableGraphQLDocument(AllShopifyProductsDocument))
    //const data = await shopify.get({ path: `customers` })
    //const data: any = await graphqlClient.query({ data: printExecutableGraphQLDocument(AllShopifyProductsDocument), query: { first: 250 } })
    //const data = await shopifyQuery(AllShopifyProductsDocument, { variables: { first: 250 } })

    const data = await shopify.smartCollection.list({ limit: 250 })
    return res.status(200).json({ success: true, data })
  } catch (error) {
    //console.log(error)
    return res.status(500).json({ success: false, error: error })

  }
}

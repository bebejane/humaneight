import { CustomerCreateDocument } from '../../../graphql'
import { shopifyQuery } from '../../../graphql-client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { shopifyGraphqlError } from '../../../utils'

export default async function register(req: NextApiRequest, res: NextApiResponse) {

  const input: CustomerCreateInput = req.body

  try {
    const { customerCreate }: { customerCreate: CustomerCreatePayload } = await shopifyQuery(CustomerCreateDocument, {
      variables: { input }
    })

    if (customerCreate.customerUserErrors) {
      console.log('customerCreate.customerUserErrors', customerCreate.customerUserErrors)
      return res.status(500).json({ success: false, errors: shopifyGraphqlError(customerCreate.customerUserErrors) })
    }
    else
      return res.status(200).json({ success: true, ...customerCreate.customer })

  } catch (error) {
    const errors = (error as Error).message
    return res.status(200).json({ success: false, errors })
  }
}

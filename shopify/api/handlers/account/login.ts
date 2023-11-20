import { CustomerAccessTokenCreateDocument, CustomerDocument } from '../../../graphql'
import { shopifyQuery } from '../../../graphql-client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCookie, setCookie } from 'cookies-next'
import { shopifyGraphqlError } from '../../../utils'

export default async function login(req: NextApiRequest, res: NextApiResponse) {

  const input: CustomerAccessTokenCreateInput = req.body

  const { customerAccessTokenCreate }: { customerAccessTokenCreate: CustomerAccessTokenCreatePayload } = await shopifyQuery(CustomerAccessTokenCreateDocument, {
    variables: { input }
  })

  const { customerAccessToken } = customerAccessTokenCreate

  if (customerAccessTokenCreate.customerUserErrors?.length)
    return res.status(500).json({ success: false, errors: shopifyGraphqlError(customerAccessTokenCreate.customerUserErrors) })

  if (!customerAccessToken?.accessToken)
    return res.status(500).json({ success: false, error: 'Invalid credentials' })

  const { customer } = await shopifyQuery(CustomerDocument, { variables: { accessToken: customerAccessToken.accessToken } })

  const user: User = {
    id: customer.id,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    customerAccessToken: customerAccessToken
  }
  setCookie('user', user, { req, res, maxAge: 60 * 60 * 24 })
  return res.status(200).json({ ...user })
}

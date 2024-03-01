'use server'

import { sleep } from 'next-dato-utils/utils'
import { ZodError, z } from 'zod'

export default async function addContact(prevState: any, formData: FormData): Promise<{ success: boolean, error?: string }> {

  const email = formData.get('email')

  try {
    z.string().email({ message: "Invalid e-mail address" }).parse(email as string)
  } catch (e) {
    return { success: false, error: 'Invalid e-mail address' }
  }

  console.log('addContact', email)
  await sleep(1000)

  return { success: true }
}
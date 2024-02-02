'use server'
import { sleep } from "next-dato-utils"

export default async function addContact(prevState: any, formData: FormData): Promise<{ success: boolean, error?: string }> {

  const email = formData.get('email')
  console.log('email', email)
  if (!email) {
    return { success: false, error: 'Email is required' }
  }
  await sleep(1000)
  return { success: true }
}
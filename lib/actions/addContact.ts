'use server'

export default async function addContact(prevState: any, formData: FormData): Promise<{ success: boolean, error?: string }> {

  const email = formData.get('email')
  console.log('email', email)
  if (!email) {
    return { success: false, error: 'Email is required' }
  }
  return { success: true }
}
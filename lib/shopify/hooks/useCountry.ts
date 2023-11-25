'use client'

import { usePathname } from "next/navigation"

export default function useCountry(): CountryCode {
  const pathname = usePathname()
  return getCountyFromPathname(pathname)
}

const getCountyFromPathname = (pathname: string): CountryCode => {
  const [path, hash] = pathname.split('#')
  const country = path.toUpperCase().split('/')[1].length === 2 ? path.toUpperCase().split('/')[1] : undefined
  return (!country ? 'SE' : country) as CountryCode
}
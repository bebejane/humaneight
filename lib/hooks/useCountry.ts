'use client'

import { usePathname } from "next/navigation"

export default function useCountry() {
  const pathname = usePathname()
  return getCountyFromPathname(pathname)
}

const getCountyFromPathname = (pathname: string) => {
  const [path, hash] = pathname.split('#')
  const country = path.toLowerCase().split('/')[1].length === 2 ? path.toLowerCase().split('/')[1] : undefined
  return country ?? 'se'
}
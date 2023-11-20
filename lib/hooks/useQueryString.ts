'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function useQueryString() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    router.push(`${pathname}?${params.toString()}`)
  }

  return { pathname, searchParams, setSearchParam }

}
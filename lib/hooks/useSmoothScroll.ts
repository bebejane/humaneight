'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function useSmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.getElementsByTagName('html')?.[0]
    if (!root) return
    root.style.scrollBehavior = 'smooth'

    return () => {
      root.style.scrollBehavior = 'auto'
    }

  }, [pathname])

  return null
}
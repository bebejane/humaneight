"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import tiktokPixelHandler from "tiktok-pixel";

export default function TiktokPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    tiktokPixelHandler.init(process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID);
  }, [pathname, searchParams]);

  return null;
};
'use client'

import Lottie from "lottie-react";

export type Props = {
  animationData: any
  className?: string
}

export default function LottieAnimation({ animationData, className }: Props) {
  return <Lottie animationData={animationData} className={className} />
}
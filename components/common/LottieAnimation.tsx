'use client'

import Lottie from "lottie-react";

export type Props = {
  animationData: any
}

export default function LottieAnimation({ animationData }: Props) {
  return <Lottie animationData={animationData} />
}
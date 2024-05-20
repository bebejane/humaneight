'use client'

import { useEffect } from 'react'
import s from './RevealText.module.scss'


export default function RevealText() {

  useEffect(() => {

    function genRand(min: number, max: number, decimalPlaces: number): number {
      var rand = Math.random() * (max - min) + min;
      var power = Math.pow(10, decimalPlaces);
      return Math.floor(rand * power) / power;
    }

    const paragraph = document.querySelector('p.very-big')
    if (!paragraph) return

    const text = paragraph.textContent
    paragraph.textContent = ''

    const delays = new Array(text?.length).fill(0).map(() => genRand(0.0, 0.5, 2))

    text?.split('').forEach((word, i) => {
      const node = paragraph.appendChild(document.createElement('span'))
      node.textContent = word
      node.classList.add(s.word)
      node.style.animationDelay = `${delays?.[i] ?? 0}s`
    })

  }, [])

  return null
}
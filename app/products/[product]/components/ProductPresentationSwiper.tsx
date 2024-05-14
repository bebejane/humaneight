'use client'

import "swiper/css";
import s from './ProductPresentationSwiper.module.scss'
import cn from 'classnames'
import React from 'react'
import { Image } from "react-datocms"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper'

export type GalleryProps = {
  images: FileField[],
  className?: string
}

export default function ProductPresentationSwiper({ images, className }: GalleryProps) {

  const swiperRef = useRef<SwiperType | undefined>()
  const [realIndex, setRealIndex] = useState(0)
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({})
  const isSingleSlide = images?.length === 1

  return (
    <div className={s.gallery}>
      <Swiper
        loop={!isSingleSlide}
        spaceBetween={500}
        simulateTouch={!isSingleSlide}
        slidesPerView={1}
        initialSlide={0}
        onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
        onClick={() => swiperRef.current?.slideNext()}
      >
        {images.map((image, idx) =>
          <SwiperSlide key={idx} className={s.slide}>
            {image.responsiveImage &&
              <figure>
                <Image
                  pictureClassName={s.image}
                  data={image.responsiveImage}
                  lazyLoad={false}
                  usePlaceholder={false}
                  onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
                />
              </figure>
            }
          </SwiperSlide>
        )}
      </Swiper>
      <div className={s.pagination}>
        {images.map((_i, idx) =>
          <button
            key={idx}
            className={cn(s.dot, { [s.active]: idx === realIndex })}
            onClick={() => swiperRef.current?.slideTo(idx)}
          />
        )}
      </div>
    </div>
  )
}
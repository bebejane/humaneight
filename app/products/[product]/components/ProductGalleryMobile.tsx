'use client'

import "swiper/css";
import s from './ProductGalleryMobile.module.scss'
import cn from 'classnames'
import React from 'react'
import { Image } from "react-datocms"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper'

export type GalleryProps = {
  images: FileField[]
}

export default function ProductGalleryMobile({ images }: GalleryProps) {

  const swiperRef = useRef<SwiperType | undefined>()
  const [realIndex, setRealIndex] = useState(0)
  const [title, setTitle] = useState<string>()
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({})
  const [initLoaded, setInitLoaded] = useState(false)
  const isSingleSlide = images?.length === 1

  return (
    <div className={s.gallery}>
      <Swiper
        id={`main-gallery`}
        loop={true}
        spaceBetween={500}
        simulateTouch={!isSingleSlide}
        slidesPerView={1}
        initialSlide={0}
        onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
        onClick={() => swiperRef.current?.slideNext()}
      >
        {images.map((image, idx) =>
          <SwiperSlide key={idx} className={cn(s.slide)}>
            {image.responsiveImage ?
              <Image
                pictureClassName={s.image}
                data={image.responsiveImage}
                lazyLoad={false}
                usePlaceholder={false}
                onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
              />
              :
              <div className={s.svg}>
                <img
                  src={image.url}
                  className={s.image}
                  onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
                />
              </div>
            }
            {!loaded[image.id] && initLoaded &&
              <div className={s.loading}>Loading...</div>
            }
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

//{/*<div className={s.caption}>{title && <p className="medium">{title}</p>}</div>*/ }
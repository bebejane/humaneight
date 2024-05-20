'use client'

import "swiper/css";
import styles from './ProductGallery.module.scss'
import cn from 'classnames'
import React from 'react'
import { Image } from "react-datocms"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper'

export type GalleryProps = {
  images: FileField[]
  onClose: Function,
  id: string | null,
  show: boolean,
  padImagesWithTitle?: boolean
}

export default function ProductGallery({ images, onClose, id, show, padImagesWithTitle = false }: GalleryProps) {

  const swiperRef = useRef<SwiperType | undefined>()
  const [realIndex, setRealIndex] = useState(0)
  const [title, setTitle] = useState<string>()
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({})
  const [initLoaded, setInitLoaded] = useState(false)
  const isSingleSlide = images?.length === 1
  const isHidden = !images || !show || id === null;

  useEffect(() => {
    if (images)
      setTitle(images[realIndex]?.title)

  }, [realIndex, images, setTitle])

  useEffect(() => {
    const index = images?.findIndex(image => image.id === id) > -1 ? images.findIndex(image => image.id === id) : 0
    swiperRef.current?.slideTo(index, 0, false)
    setRealIndex(index)
  }, [id])

  useEffect(() => { // handle  keys
    const handleKeys = (e: KeyboardEvent) => {
      if (isHidden) return
      if (e.key === 'ArrowRight') swiperRef?.current?.slideNext()
      if (e.key === 'ArrowLeft') swiperRef?.current?.slidePrev()
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeys)
    return () => document.removeEventListener('keydown', handleKeys)
  }, [onClose, isHidden])

  useEffect(() => {
    setTimeout(() => setInitLoaded(true), 300)
  }, [initLoaded]) // Delay loader

  if (isHidden)
    return null

  return (
    <div className={cn(styles.gallery, images.length <= 1 && styles.noArrows, isSingleSlide && styles.noArrows)}>
      <div className={styles.back} onClick={() => swiperRef.current?.slidePrev()}><img src="/images/arrow-light.svg" className={styles.arrow} /></div>
      <div className={styles.images}>
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
            <SwiperSlide key={idx} className={cn(styles.slide, padImagesWithTitle && image.title && styles.padded)}>
              {image.responsiveImage ?
                <Image
                  pictureClassName={styles.image}
                  data={image.responsiveImage}
                  lazyLoad={false}
                  usePlaceholder={false}
                  onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
                />
                :
                <div className={styles.svg}>
                  <img
                    src={image.url}
                    className={styles.image}
                    onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
                  />
                </div>
              }
              {!loaded[image.id] && initLoaded &&
                <div className={styles.loading}>Loading...</div>
              }
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={styles.forward} onClick={() => swiperRef.current?.slideNext()}><img src="/images/arrow-light.svg" className={styles.arrow} /></div>
      <div className={styles.caption}>{title && <p className="medium">{title}</p>}</div>
      <div className={styles.close} onClick={() => onClose()}><img src="/images/close.svg" alt="Close" /></div>
    </div>
  )
}
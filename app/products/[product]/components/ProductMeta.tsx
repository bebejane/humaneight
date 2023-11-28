'use client'

import s from './ProductMeta.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { StructuredContent } from 'next-dato-utils';

export type Props = {
  product: ProductQuery['product']
}

export default function ProductMeta({ product }: Props) {

  const [metaSectionToggles, setMetaSectionToggles] = useState<{ [key: string]: boolean }>({})
  const metaSections = metaSectionsByType(product)

  return (

    <div className={cn(s.meta, "grid")}>
      <h3 className={s.header}>In detail</h3>

      <div className={s.wrapper}>
        {Object.keys(metaSections).map(k => {
          const metaType = metaSections[k][0].metaType
          return (
            <>
              {metaType?.title &&
                <div
                  className={s.metaType}
                  onClick={() => setMetaSectionToggles({ ...metaSectionToggles, [k]: !metaSectionToggles[k] ? true : false })}
                >
                  <h3 className={s.type}>{metaType.title}</h3>
                  <button>+</button>
                </div>
              }
              <ul className={cn(metaSectionToggles[k] && s.show)}>
                {metaSections[k].map(({ id, title, text }) =>
                  <li key={id}>
                    <StructuredContent id={id} content={text} />
                  </li>
                )}
              </ul>
            </>
          )
        })}
      </div>
    </div>

  )
}


const metaSectionsByType = (product: ProductQuery['product']): { [key: string]: ProductMetaInfoRecord[] } => {
  return product?.metaSections
    .sort((a, b) => a.metaType.title > b.metaType.title ? 1 : -1)
    .reduce((acc: any, metaSection) => {
      const id = metaSection.metaType?.id
      const sections = acc[id] ?? []
      return { ...acc, [id]: [...sections, metaSection] }
    }, {}) ?? null
}
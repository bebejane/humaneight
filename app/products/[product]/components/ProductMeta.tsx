'use client'

import s from './ProductMeta.module.scss'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { StructuredContent } from 'next-dato-utils';

export type Props = {
  product: ProductQuery['product']
}

export default function ProductMeta({ product }: Props) {

  const metaSections = metaSectionsByType(product)
  const defaultMetaSectionToggles = Object.keys(metaSections).reduce((acc, k) => ({ ...acc, [k]: { show: false, height: 0 } }), {})
  const [metaSectionToggles, setMetaSectionToggles] = useState<{ [key: string]: { show: boolean, height?: number } }>(defaultMetaSectionToggles)
  const metaSectionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const hashChange = () => {
      const hash = window.location.hash.split('#')?.[1];
      hash && setMetaSectionToggles((m) => ({ ...m, [hash]: { ...m[hash], show: true } }));
    };
    hashChange()
    window.addEventListener('hashchange', hashChange)
    return () => window.removeEventListener('hashchange', hashChange)
  }, []);

  useEffect(() => {
    const toggles = { ...metaSectionToggles }
    Object.keys(toggles).forEach(k =>
      toggles[k].height = document.getElementById(`list-${k}`)?.scrollHeight ?? 0
    )
    setMetaSectionToggles(toggles)
  }, [])

  if (!metaSections) return null

  return (
    <>
      <div className={cn(s.meta)}>
        <div className={s.wrapper}>
          {Object.keys(metaSections).map((k, idx) => {
            const metaType = metaSections[k][0].metaType
            return (
              <React.Fragment key={idx}>
                {metaType?.title &&
                  <a
                    id={metaType.id}
                    key={metaType.id}
                    href={`#${metaType.id}`}
                    className={s.metaType}
                    onClick={() => setMetaSectionToggles({
                      ...metaSectionToggles,
                      [k]: {
                        ...metaSectionToggles[k],
                        show: !metaSectionToggles[k]?.show ? true : false
                      }
                    })}
                  >
                    <h3 className={s.type}>{metaType.title}</h3>
                    <button className="symbol big">{!metaSectionToggles[k]?.show ? '+' : '-'}</button>
                  </a>
                }
                <ul
                  id={`list-${metaType.id}`}
                  key={`list-${metaType.id}`}
                  className={cn(metaSectionToggles[k]?.show ? s.show : s.hide)}
                  style={{ maxHeight: metaSectionToggles[k]?.show ? `${metaSectionToggles[k].height}px` : '0px' }}
                  ref={metaSectionToggles[k]?.show ? metaSectionRef : undefined}
                >
                  {metaSections[k].map(({ id, title, text }) =>
                    <li key={id} className="structured mid light">
                      <StructuredContent content={text} />
                    </li>
                  )}
                </ul>
              </React.Fragment>
            )
          })}
        </div>
        <section className={s.inc}>
          <p className="light mid">
            Always: Free returns — Free shipping over 1000 SEK – Taxes and duties included
          </p>
        </section>
      </div>
    </>
  )
}


const metaSectionsByType = (product: ProductQuery['product']): { [key: string]: ProductMetaInfoRecord[] } => {
  return product?.metaSections?.sort((a, b) => a.metaType.title > b.metaType.title ? 1 : -1)
    .reduce((acc: any, metaSection) => {
      const id = metaSection.metaType?.id
      const sections = acc[id] ?? []
      return { ...acc, [id]: [...sections, metaSection] }
    }, {}) ?? null
}
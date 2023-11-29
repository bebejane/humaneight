import s from './StartProductBlock.module.scss'
import cn from 'classnames'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import ProductThumbnail from '@components/layout/ProductThumbnail'
import BrandingThumbnail from '@components/layout/BrandingThumbnail'
import Link from '@components//nav/Link'
import React from 'react'
import { apiQuery } from 'next-dato-utils'
import { AllProductBrandingDocument } from '@graphql'

type Props = {
  data: StartProductBlockRecord
}

export default async function StartProductBlock({ data: { id, headline, selectedProducts, collection, columns } }: Props) {

  const { allProductBrandings } = await apiQuery<AllProductBrandingQuery, AllProductBrandingQueryVariables>(AllProductBrandingDocument, {
    variables: {
      first: 100,
      skip: 0
    },
    all: true
  })
  const brandingInterval = 3
  const brandings = generateRandomBranding<AllProductBrandingQuery['allProductBrandings'][0]>(Math.floor(selectedProducts.length / brandingInterval), allProductBrandings)

  return (
    <section className={cn(s.container)}>
      <header>
        <h3>{headline}</h3>
        {collection &&
          <Link href={`/shop/${collection?.slug}`}>
            <span className="body">View all</span>
          </Link>
        }
      </header>
      <ThumbnailContainer >
        {selectedProducts.map((product, i) =>
          <React.Fragment key={i}>
            <ProductThumbnail
              key={i}
              product={product.product}
              index={i}
              columns={columns}
            />
            {i % brandingInterval === 0 &&
              <BrandingThumbnail
                key={i}
                productBranding={brandings.splice(0, 1)[0] as ProductBrandingRecord}
                columns={columns}
              />
            }
          </React.Fragment>
        )}
      </ThumbnailContainer>
    </section>
  )
}

function generateRandomBranding<T>(brandingCount: number, allProductBrandings: T[]): T[] {

  const randomBrandings: T[] = allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, brandingCount)

  while (randomBrandings.length <= brandingCount) {
    randomBrandings.push(allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1)[0])
  }
  return randomBrandings
}
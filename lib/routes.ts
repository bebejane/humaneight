type Routes = {
  [key: string]: Route
}

type Route = {
  basePath: string
  typeName: string
}

const routes: Routes = {
  "product": {
    typeName: "ProductRecord",
    basePath: "/products"
  },
  "collection": {
    typeName: "CollectionRecord",
    basePath: "/collections"
  }
}

export const buildRoute = (model: string, slug: string): string => {
  if (!routes[model]) throw new Error(`Invalid model: ${model}`)
  if (!slug) throw new Error(`Invalid slug: ${slug}`)
  return `${routes[model].basePath}/${slug}`
}

export const recordToRoute = (record: any): string => {
  const { __typename, slug } = record
  const model = Object.keys(routes).find(key => routes[key].typeName === __typename)
  if (!model) throw new Error(`Invalid record: ${__typename}`)
  return buildRoute(model, slug)
}

export default routes
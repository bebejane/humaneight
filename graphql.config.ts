import "dotenv/config"
import type { IGraphQLConfig } from 'graphql-config'

const shopifyApiEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	skipDocumentsValidation: false,
}

const config: IGraphQLConfig = {
	projects: {
		default: {
			schema: {
				"https://graphql.datocms.com": {
					headers: {
						"Authorization": process.env.DATOCMS_API_TOKEN as string,
						"X-Environment": process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT as string,
						"X-Exclude-Invalid": "true",
					},
				},
			},
			documents: "graphql/**/*.gql",
			extensions: {
				endpoints: {
					default: {
						url: "https://graphql.datocms.com",
						headers: {
							"Authorization": process.env.DATOCMS_API_TOKEN as string,
							"X-Exclude-Invalid": "true",
						}
					}
				},
				codegen: {
					overwrite: true,
					generates: {
						"types/datocms.d.ts": {
							plugins: [
								"typescript",
								"typescript-operations",
							],
							config: { ...defaultConfig, noExport: true }
						},
						"graphql/index.ts": {
							plugins: ["typed-document-node"],
							config: { ...defaultConfig }
						},
						"types/document-modules.d.ts": {
							plugins: ["typescript-graphql-files-modules"],
							config: { ...defaultConfig }
						},
					},
				}
			},

		},
		shopify: {
			schema: {
				[shopifyApiEndpoint]: {
					headers: {
						"X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN as string,
						"Content-Type": "application/json",
					},
				},
			},
			documents: "shopify/graphql/**/*.gql",
			extensions: {
				codegen: {
					overwrite: true,
					generates: {
						"types/shopify.d.ts": {
							plugins: [
								"typescript",
								"typescript-operations",
							],
							config: { ...defaultConfig, noExport: true }
						},
						"shopify/graphql/index.ts": {
							plugins: ["typed-document-node"],
							config: { ...defaultConfig }
						},
						"types/document-modules-shopify.d.ts": {
							plugins: ["typescript-graphql-files-modules"],
							config: { ...defaultConfig }
						},
					},
				}
			},

		}
	}
}
export default config;
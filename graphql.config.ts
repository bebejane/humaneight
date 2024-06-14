import * as dotenv from "dotenv"; dotenv.config();
import type { IGraphQLConfig } from 'graphql-config'

const environment: string = process.env.GRAPHQL_CONFIG ?? "datocms";
const shopifyApiEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T",
};

const datocmsConfig: IGraphQLConfig = {
	schema: {
		"https://graphql.datocms.com": {
			headers: {
				Authorization: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
				"X-Environment": "main",
				"X-Exclude-Invalid": "true",
			},
		},
	},
	documents: "graphql/**/*.gql",
};

const shopifyConfig: IGraphQLConfig = {
	schema: {
		[shopifyApiEndpoint]: {
			headers: {
				"X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN as string,
				"Content-Type": "application/json",
			},
		},
	},
	documents: "shopify/graphql/**/*.gql",
};

const environmentConfig = environment === "datocms" ? datocmsConfig : shopifyConfig
console.log(environment)
const paths = {
	operations: environment === "datocms" ? "types/datocms.d.ts" : "types/shopify.d.ts",
	documentnode: environment === "datocms" ? "graphql/index.ts" : "shopify/graphql/index.ts",
	modules: environment === "datocms" ? "types/document-modules.d.ts" : "types/shopify-document-modules.d.ts",
};

const config = {
	...environmentConfig,
	overwrite: true,
	generates: {
		[paths.operations]: {
			...defaultConfig,
			plugins: ["typescript", "typescript-operations"],
			config: { ...defaultConfig, noExport: true },
		},
		[paths.documentnode]: {
			...defaultConfig,
			plugins: ["typed-document-node"],
			config: defaultConfig,
		},
		[paths.modules]: {
			...defaultConfig,
			plugins: ["typescript-graphql-files-modules"],
			config: defaultConfig,
		},
	},
} as IGraphQLConfig


export default config;
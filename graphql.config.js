require("@next/env").loadEnvConfig(".");
const environment = process.env.GRAPHQL_CONFIG ?? "datocms";
const shopifyApiEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

console.log("GraphQL environment:", environment);

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T",
};

const datocmsConfig = {
	schema: {
		"https://graphql.datocms.com": {
			headers: {
				Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
				"X-Environment": "main",
				"X-Exclude-Invalid": true,
			},
		},
	},
	documents: "graphql/**/*.gql",
};

const shopifyConfig = {
	schema: {
		[shopifyApiEndpoint]: {
			headers: {
				"X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
				"Content-Type": "application/json",
			},
		},
	},
	documents: "lib/shopify/graphql/**/*.gql",
};

const config = environment === "datocms" ? datocmsConfig : shopifyConfig;
const paths = {
	operations: environment === "datocms" ? "@types/datocms.d.ts" : "@types/shopify.d.ts",
	documentnode: environment === "datocms" ? "graphql/index.ts" : "lib/shopify/graphql/index.ts",
	modules:
		environment === "datocms"
			? "@types/document-modules.d.ts"
			: "@types/shopify-document-modules.d.ts",
};

module.exports = {
	...config,
	overwrite: true,
	generates: {
		[paths.operations]: {
			...config,
			plugins: ["typescript", "typescript-operations"],
			config: { ...defaultConfig, noExport: true },
		},
		[paths.documentnode]: {
			...config,
			plugins: ["typed-document-node"],
			config: defaultConfig,
		},
		[paths.modules]: {
			...config,
			plugins: ["typescript-graphql-files-modules"],
			config: defaultConfig,
		},
	},
};

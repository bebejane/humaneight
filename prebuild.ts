import 'dotenv/config';
import fs from 'fs';
import shopifyQuery from "@shopify/shopify-query";
import { LocalizationDocument } from "@shopify/graphql";

(async () => {
  const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument)
  const localizationJson = JSON.stringify(localization, null, 2)
  fs.writeFileSync('./localization.json', localizationJson)
})()
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Block of type Feedback form (about_feedback_form_block) */
type AboutFeedbackFormBlockRecord = RecordInterface & {
  __typename?: 'AboutFeedbackFormBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type Feedback form (about_feedback_form_block) */
type AboutFeedbackFormBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AboutModelContentField = {
  __typename?: 'AboutModelContentField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AboutModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  headline?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<StructuredTextFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

type AboutModelIntroField = {
  __typename?: 'AboutModelIntroField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

enum AboutModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  headline_ASC = 'headline_ASC',
  headline_DESC = 'headline_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  metaDescription_ASC = 'metaDescription_ASC',
  metaDescription_DESC = 'metaDescription_DESC',
  metaTitle_ASC = 'metaTitle_ASC',
  metaTitle_DESC = 'metaTitle_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type AboutModelSectionsField = AboutFeedbackFormBlockRecord | AboutTextBlockRecord | AboutThreeColumnBlockRecord | AboutTwoColumnBlockRecord | FullscreenBlockRecord;

/** Record of type About (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<AboutModelContentField>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  intro?: Maybe<AboutModelIntroField>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  sections: Array<AboutModelSectionsField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type About (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AboutTextBlockModelTextField = {
  __typename?: 'AboutTextBlockModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Text section (about_text_block) */
type AboutTextBlockRecord = RecordInterface & {
  __typename?: 'AboutTextBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  text: AboutTextBlockModelTextField;
};


/** Block of type Text section (about_text_block) */
type AboutTextBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AboutThreeColumnBlockModelC1TextField = {
  __typename?: 'AboutThreeColumnBlockModelC1TextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AboutThreeColumnBlockModelC2TextField = {
  __typename?: 'AboutThreeColumnBlockModelC2TextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AboutThreeColumnBlockModelC3TextField = {
  __typename?: 'AboutThreeColumnBlockModelC3TextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Three column section (about_three_column_block) */
type AboutThreeColumnBlockRecord = RecordInterface & {
  __typename?: 'AboutThreeColumnBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  c1Media: FileField;
  c1Text: AboutThreeColumnBlockModelC1TextField;
  c2Media: FileField;
  c2Text: AboutThreeColumnBlockModelC2TextField;
  c3Media: FileField;
  c3Text: AboutThreeColumnBlockModelC3TextField;
  id: Scalars['ItemId']['output'];
};


/** Block of type Three column section (about_three_column_block) */
type AboutThreeColumnBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AboutTwoColumnBlockModelTextBlocksField = ContactFormBlockRecord | TwoColumnBlockRecord;

type AboutTwoColumnBlockModelTextField = {
  __typename?: 'AboutTwoColumnBlockModelTextField';
  blocks: Array<AboutTwoColumnBlockModelTextBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Two column section (about_two_column_block) */
type AboutTwoColumnBlockRecord = RecordInterface & {
  __typename?: 'AboutTwoColumnBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  media: FileField;
  text: AboutTwoColumnBlockModelTextField;
};


/** Block of type Two column section (about_two_column_block) */
type AboutTwoColumnBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Claim (claim) */
type ClaimRecord = RecordInterface & {
  __typename?: 'ClaimRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Claim (claim) */
type ClaimRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

type CollectionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CollectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CollectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titlePlural?: InputMaybe<StringFilter>;
};

enum CollectionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  titlePlural_ASC = 'titlePlural_ASC',
  titlePlural_DESC = 'titlePlural_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Collection (collection) */
type CollectionRecord = RecordInterface & {
  __typename?: 'CollectionRecord';
  _allReferencingProducts: Array<ProductRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProductsMeta: CollectionMetadata;
  _allReferencingStarts: Array<StartRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingStartsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  position?: Maybe<Scalars['IntType']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titlePlural: Scalars['String']['output'];
};


/** Record of type Collection (collection) */
type CollectionRecord_allReferencingProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductAndCollection>;
};


/** Record of type Collection (collection) */
type CollectionRecord_allReferencingProductsMetaArgs = {
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductAndCollection>;
};


/** Record of type Collection (collection) */
type CollectionRecord_allReferencingStartsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StartModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StartModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStartAndCollection>;
};


/** Record of type Collection (collection) */
type CollectionRecord_allReferencingStartsMetaArgs = {
  filter?: InputMaybe<StartModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStartAndCollection>;
};


/** Record of type Collection (collection) */
type CollectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Block of type Contact form (contact_form_block) */
type ContactFormBlockRecord = RecordInterface & {
  __typename?: 'ContactFormBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  message?: Maybe<Scalars['String']['output']>;
};


/** Block of type Contact form (contact_form_block) */
type ContactFormBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ContactModelContentField = {
  __typename?: 'ContactModelContentField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Contact (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  contactFormMessage: Scalars['String']['output'];
  content: ContactModelContentField;
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type Contact (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Record of type FAQ Settings (faq_config) */
type FaqConfigRecord = RecordInterface & {
  __typename?: 'FaqConfigRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  menuImage: ImageFileField;
};


/** Record of type FAQ Settings (faq_config) */
type FaqConfigRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqModelAnswerField = {
  __typename?: 'FaqModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  question?: InputMaybe<StringFilter>;
  section?: InputMaybe<LinkFilter>;
};

enum FaqModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type FAQ (faq) */
type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqModelAnswerField;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  question: Scalars['String']['output'];
  section: FaqSectionRecord;
};


/** Record of type FAQ (faq) */
type FaqRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqSectionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqSectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqSectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  inMenu?: InputMaybe<BooleanFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

enum FaqSectionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  inMenu_ASC = 'inMenu_ASC',
  inMenu_DESC = 'inMenu_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type FAQ Section (faq_section) */
type FaqSectionRecord = RecordInterface & {
  __typename?: 'FaqSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  inMenu?: Maybe<Scalars['BooleanType']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type FAQ Section (faq_section) */
type FaqSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FeedbackModelIntroField = {
  __typename?: 'FeedbackModelIntroField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Feedback question (feedback_question_block) */
type FeedbackQuestionBlockRecord = RecordInterface & {
  __typename?: 'FeedbackQuestionBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text: Scalars['String']['output'];
};


/** Block of type Feedback question (feedback_question_block) */
type FeedbackQuestionBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Feedback question (feedback_question_block) */
type FeedbackQuestionBlockRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type Feedback (feedback) */
type FeedbackRecord = RecordInterface & {
  __typename?: 'FeedbackRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  intro: FeedbackModelIntroField;
  questions: Array<FeedbackQuestionBlockRecord>;
};


/** Record of type Feedback (feedback) */
type FeedbackRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Block of type Fullscreen section (fullscreen_block) */
type FullscreenBlockRecord = RecordInterface & {
  __typename?: 'FullscreenBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  altMedia?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  media: FileField;
};


/** Block of type Fullscreen section (fullscreen_block) */
type FullscreenBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Record of type General Settings (general) */
type GeneralRecord = RecordInterface & {
  __typename?: 'GeneralRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  claims: Array<ClaimRecord>;
  eMail?: Maybe<Scalars['String']['output']>;
  eights: Array<FileField>;
  id: Scalars['ItemId']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  pinterest?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
};


/** Record of type General Settings (general) */
type GeneralRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: focalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


type ImageFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type ImageFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type ImageFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  alpha = 'alpha',
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Integer fields */
type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProductAndCollection = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProductModelFieldsReferencingCollectionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProductModelFieldsReferencingCollectionModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProductAndShopifyProduct = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProductModelFieldsReferencingShopifyProductModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProductModelFieldsReferencingShopifyProductModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProductLinkAndProduct = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProductLinkModelFieldsReferencingProductModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProductLinkModelFieldsReferencingProductModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenShopifyCollectionAndShopifyProduct = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShopifyCollectionModelFieldsReferencingShopifyProductModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShopifyCollectionModelFieldsReferencingShopifyProductModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenShopifyProductAndShopifyCollection = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShopifyProductModelFieldsReferencingShopifyCollectionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShopifyProductModelFieldsReferencingShopifyCollectionModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenStartAndCollection = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<StartModelFieldsReferencingCollectionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<StartModelFieldsReferencingCollectionModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenStartAndProduct = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<StartModelFieldsReferencingProductModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<StartModelFieldsReferencingProductModel>>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProductAndCollection = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProductAndCollection>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProductAndShopifyProduct = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProductAndShopifyProduct>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProductLinkAndProduct = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProductLinkAndProduct>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenShopifyCollectionAndShopifyProduct = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShopifyCollectionAndShopifyProduct>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenShopifyProductAndShopifyCollection = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShopifyProductAndShopifyCollection>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenStartAndCollection = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenStartAndCollection>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenStartAndProduct = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenStartAndProduct>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter JSON fields */
type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

type LegalModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
};

enum LegalModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type LegalModelTextField = {
  __typename?: 'LegalModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Legal (legal) */
type LegalRecord = RecordInterface & {
  __typename?: 'LegalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  text: LegalModelTextField;
  title: Scalars['String']['output'];
};


/** Record of type Legal (legal) */
type LegalRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Linking locales */
enum LinkingLocale {
  _nonLocalized = '_nonLocalized',
  en = 'en'
}

/** Specifies how to filter by linking locales */
type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type ProductBrandingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductBrandingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductBrandingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  link?: InputMaybe<LinkFilter>;
  smallText?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

enum ProductBrandingModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  smallText_ASC = 'smallText_ASC',
  smallText_DESC = 'smallText_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

/** Record of type Product branding (product_branding) */
type ProductBrandingRecord = RecordInterface & {
  __typename?: 'ProductBrandingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  link: AboutRecord;
  smallText?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Record of type Product branding (product_branding) */
type ProductBrandingRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductColorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductColorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductColorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProductColorModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Variants (product_color) */
type ProductColorRecord = RecordInterface & {
  __typename?: 'ProductColorRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Variants (product_color) */
type ProductColorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
enum ProductLinkModelFieldsReferencingProductModel {
  productLink_product = 'productLink_product'
}

type ProductLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  product?: InputMaybe<LinkFilter>;
  variant?: InputMaybe<JsonFilter>;
};

enum ProductLinkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC'
}

/** Record of type Product link (product_link) */
type ProductLinkRecord = RecordInterface & {
  __typename?: 'ProductLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  product: ProductRecord;
  variant?: Maybe<Scalars['JsonField']['output']>;
};


/** Record of type Product link (product_link) */
type ProductLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMediaBlockModelTextField = {
  __typename?: 'ProductMediaBlockModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Product media (product_media_block) */
type ProductMediaBlockRecord = RecordInterface & {
  __typename?: 'ProductMediaBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  productMedia: Array<ProductMediaModelRecord>;
  text?: Maybe<ProductMediaBlockModelTextField>;
};


/** Block of type Product media (product_media_block) */
type ProductMediaBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMediaModelModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductMediaModelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductMediaModelModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  altText?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  thumbnail?: InputMaybe<GalleryFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProductMediaModelModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  altText_ASC = 'altText_ASC',
  altText_DESC = 'altText_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Product media item (product_media_model) */
type ProductMediaModelRecord = RecordInterface & {
  __typename?: 'ProductMediaModelRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  altText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  thumbnail: Array<FileField>;
  title: Scalars['String']['output'];
  variation: Array<ProductMediaVariationBlockRecord>;
};


/** Record of type Product media item (product_media_model) */
type ProductMediaModelRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Product media variation (product_media_variation_block) */
type ProductMediaVariationBlockRecord = RecordInterface & {
  __typename?: 'ProductMediaVariationBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  color?: Maybe<ProductColorRecord>;
  id: Scalars['ItemId']['output'];
  media: FileField;
};


/** Block of type Product media variation (product_media_variation_block) */
type ProductMediaVariationBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMetaInfoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductMetaInfoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductMetaInfoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metaType?: InputMaybe<LinkFilter>;
  text?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProductMetaInfoModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type ProductMetaInfoModelTextField = {
  __typename?: 'ProductMetaInfoModelTextField';
  blocks: Array<SizeGuideBlockRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Product meta (product_meta_info) */
type ProductMetaInfoRecord = RecordInterface & {
  __typename?: 'ProductMetaInfoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  metaType: ProductMetaTypeRecord;
  text: ProductMetaInfoModelTextField;
  title: Scalars['String']['output'];
};


/** Record of type Product meta (product_meta_info) */
type ProductMetaInfoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductMetaTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductMetaTypeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductMetaTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProductMetaTypeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Product meta type (product_meta_type) */
type ProductMetaTypeRecord = RecordInterface & {
  __typename?: 'ProductMetaTypeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type Product meta type (product_meta_type) */
type ProductMetaTypeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductModelDescriptionField = {
  __typename?: 'ProductModelDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Linking fields */
enum ProductModelFieldsReferencingCollectionModel {
  product_collection = 'product_collection'
}

/** Linking fields */
enum ProductModelFieldsReferencingShopifyProductModel {
  product_shopifyProduct = 'product_shopifyProduct'
}

type ProductModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  collection?: InputMaybe<LinkFilter>;
  defaultColor?: InputMaybe<LinkFilter>;
  description?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  imageSecondary?: InputMaybe<FileFilter>;
  label?: InputMaybe<StringFilter>;
  metaDescription?: InputMaybe<StringFilter>;
  metaSections?: InputMaybe<LinksFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  mouseOverText?: InputMaybe<StringFilter>;
  secondaryForVariations?: InputMaybe<LinkFilter>;
  shopifyProduct?: InputMaybe<LinkFilter>;
  shortSummary?: InputMaybe<StructuredTextFilter>;
  thumbnailForVariations?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
  usp?: InputMaybe<LinksFilter>;
};

enum ProductModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  metaDescription_ASC = 'metaDescription_ASC',
  metaDescription_DESC = 'metaDescription_DESC',
  metaTitle_ASC = 'metaTitle_ASC',
  metaTitle_DESC = 'metaTitle_DESC',
  mouseOverText_ASC = 'mouseOverText_ASC',
  mouseOverText_DESC = 'mouseOverText_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type ProductModelShortSummaryField = {
  __typename?: 'ProductModelShortSummaryField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Product (product) */
type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _allReferencingProductLinks: Array<ProductLinkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProductLinksMeta: CollectionMetadata;
  _allReferencingStarts: Array<StartRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingStartsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  collection: CollectionRecord;
  defaultColor?: Maybe<ProductColorRecord>;
  description?: Maybe<ProductModelDescriptionField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  imageSecondary?: Maybe<ImageFileField>;
  label?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaSections: Array<ProductMetaInfoRecord>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  mouseOverText?: Maybe<Scalars['String']['output']>;
  secondaryForVariations?: Maybe<ProductMediaModelRecord>;
  sections: Array<ProductMediaBlockRecord>;
  shopifyProduct: ShopifyProductRecord;
  shortSummary?: Maybe<ProductModelShortSummaryField>;
  thumbnailForVariations?: Maybe<ProductMediaModelRecord>;
  title: Scalars['String']['output'];
  usp: Array<ProductUspRecord>;
};


/** Record of type Product (product) */
type ProductRecord_allReferencingProductLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductLinkAndProduct>;
};


/** Record of type Product (product) */
type ProductRecord_allReferencingProductLinksMetaArgs = {
  filter?: InputMaybe<ProductLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductLinkAndProduct>;
};


/** Record of type Product (product) */
type ProductRecord_allReferencingStartsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StartModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StartModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStartAndProduct>;
};


/** Record of type Product (product) */
type ProductRecord_allReferencingStartsMetaArgs = {
  filter?: InputMaybe<StartModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenStartAndProduct>;
};


/** Record of type Product (product) */
type ProductRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ProductUspModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductUspModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductUspModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProductUspModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Product Usp (product_usp) */
type ProductUspRecord = RecordInterface & {
  __typename?: 'ProductUspRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Product Usp (product_usp) */
type ProductUspRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAboutsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCollectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqSectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLegalsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductBrandingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductColorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductMediaModelsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductMetaInfosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductMetaTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductUspsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allShopifyCollectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allShopifyProductsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allVariantsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  about?: Maybe<AboutRecord>;
  /** Returns a collection of records */
  allAbouts: Array<AboutRecord>;
  /** Returns a collection of records */
  allCollections: Array<CollectionRecord>;
  /** Returns a collection of records */
  allFaqSections: Array<FaqSectionRecord>;
  /** Returns a collection of records */
  allFaqs: Array<FaqRecord>;
  /** Returns a collection of records */
  allLegals: Array<LegalRecord>;
  /** Returns a collection of records */
  allProductBrandings: Array<ProductBrandingRecord>;
  /** Returns a collection of records */
  allProductColors: Array<ProductColorRecord>;
  /** Returns a collection of records */
  allProductLinks: Array<ProductLinkRecord>;
  /** Returns a collection of records */
  allProductMediaModels: Array<ProductMediaModelRecord>;
  /** Returns a collection of records */
  allProductMetaInfos: Array<ProductMetaInfoRecord>;
  /** Returns a collection of records */
  allProductMetaTypes: Array<ProductMetaTypeRecord>;
  /** Returns a collection of records */
  allProductUsps: Array<ProductUspRecord>;
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>;
  /** Returns a collection of records */
  allShopifyCollections: Array<ShopifyCollectionRecord>;
  /** Returns a collection of records */
  allShopifyProducts: Array<ShopifyProductRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allVariants: Array<VariantRecord>;
  /** Returns a specific record */
  collection?: Maybe<CollectionRecord>;
  /** Returns the single instance record */
  contact?: Maybe<ContactRecord>;
  /** Returns a specific record */
  faq?: Maybe<FaqRecord>;
  /** Returns the single instance record */
  faqConfig?: Maybe<FaqConfigRecord>;
  /** Returns a specific record */
  faqSection?: Maybe<FaqSectionRecord>;
  /** Returns the single instance record */
  feedback?: Maybe<FeedbackRecord>;
  /** Returns the single instance record */
  general?: Maybe<GeneralRecord>;
  /** Returns a specific record */
  legal?: Maybe<LegalRecord>;
  /** Returns a specific record */
  product?: Maybe<ProductRecord>;
  /** Returns a specific record */
  productBranding?: Maybe<ProductBrandingRecord>;
  /** Returns a specific record */
  productColor?: Maybe<ProductColorRecord>;
  /** Returns a specific record */
  productLink?: Maybe<ProductLinkRecord>;
  /** Returns a specific record */
  productMediaModel?: Maybe<ProductMediaModelRecord>;
  /** Returns a specific record */
  productMetaInfo?: Maybe<ProductMetaInfoRecord>;
  /** Returns a specific record */
  productMetaType?: Maybe<ProductMetaTypeRecord>;
  /** Returns a specific record */
  productUsp?: Maybe<ProductUspRecord>;
  /** Returns a specific record */
  shopifyCollection?: Maybe<ShopifyCollectionRecord>;
  /** Returns a specific record */
  shopifyProduct?: Maybe<ShopifyProductRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  variant?: Maybe<VariantRecord>;
};


/** The query root for this schema */
type Query_allAboutsMetaArgs = {
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCollectionsMetaArgs = {
  filter?: InputMaybe<CollectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqSectionsMetaArgs = {
  filter?: InputMaybe<FaqSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqsMetaArgs = {
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allLegalsMetaArgs = {
  filter?: InputMaybe<LegalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductBrandingsMetaArgs = {
  filter?: InputMaybe<ProductBrandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductColorsMetaArgs = {
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductLinksMetaArgs = {
  filter?: InputMaybe<ProductLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductMediaModelsMetaArgs = {
  filter?: InputMaybe<ProductMediaModelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductMetaInfosMetaArgs = {
  filter?: InputMaybe<ProductMetaInfoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductMetaTypesMetaArgs = {
  filter?: InputMaybe<ProductMetaTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductUspsMetaArgs = {
  filter?: InputMaybe<ProductUspModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProductsMetaArgs = {
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allShopifyCollectionsMetaArgs = {
  filter?: InputMaybe<ShopifyCollectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allShopifyProductsMetaArgs = {
  filter?: InputMaybe<ShopifyProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allVariantsMetaArgs = {
  filter?: InputMaybe<VariantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
};


/** The query root for this schema */
type QueryallAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallCollectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CollectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CollectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqSectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqSectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallLegalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductBrandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductBrandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductBrandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductMediaModelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMediaModelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMediaModelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductMetaInfosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMetaInfoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMetaInfoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductMetaTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMetaTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMetaTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductUspsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductUspModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductUspModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallShopifyCollectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyCollectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyCollectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallShopifyProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallVariantsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VariantModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VariantModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QuerycollectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CollectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CollectionModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycontactArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryfaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqConfigArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryfaqSectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqSectionModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfeedbackArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerygeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerylegalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductBrandingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductBrandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductBrandingModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductColorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductColorModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductLinkModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductMediaModelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMediaModelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMediaModelModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductMetaInfoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMetaInfoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMetaInfoModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductMetaTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductMetaTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductMetaTypeModelOrderBy>>>;
};


/** The query root for this schema */
type QueryproductUspArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductUspModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductUspModelOrderBy>>>;
};


/** The query root for this schema */
type QueryshopifyCollectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyCollectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyCollectionModelOrderBy>>>;
};


/** The query root for this schema */
type QueryshopifyProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyProductModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
type QueryvariantArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VariantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VariantModelOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Linking fields */
enum ShopifyCollectionModelFieldsReferencingShopifyProductModel {
  shopifyCollection_products = 'shopifyCollection_products'
}

type ShopifyCollectionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyCollectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyCollectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  handle?: InputMaybe<SlugFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  products?: InputMaybe<LinksFilter>;
  shopifyId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ShopifyCollectionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  shopifyId_ASC = 'shopifyId_ASC',
  shopifyId_DESC = 'shopifyId_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Shopify Collection (shopify_collection) */
type ShopifyCollectionRecord = RecordInterface & {
  __typename?: 'ShopifyCollectionRecord';
  _allReferencingShopifyProducts: Array<ShopifyProductRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShopifyProductsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  products: Array<ShopifyProductRecord>;
  shopifyId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Shopify Collection (shopify_collection) */
type ShopifyCollectionRecord_allReferencingShopifyProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShopifyProductAndShopifyCollection>;
};


/** Record of type Shopify Collection (shopify_collection) */
type ShopifyCollectionRecord_allReferencingShopifyProductsMetaArgs = {
  filter?: InputMaybe<ShopifyProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShopifyProductAndShopifyCollection>;
};


/** Record of type Shopify Collection (shopify_collection) */
type ShopifyCollectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
enum ShopifyProductModelFieldsReferencingShopifyCollectionModel {
  shopifyProduct_collections = 'shopifyProduct_collections'
}

type ShopifyProductModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShopifyProductModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShopifyProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  collections?: InputMaybe<LinksFilter>;
  handle?: InputMaybe<SlugFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  shopifyId?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  variants?: InputMaybe<JsonFilter>;
};

enum ShopifyProductModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  shopifyId_ASC = 'shopifyId_ASC',
  shopifyId_DESC = 'shopifyId_DESC',
  tags_ASC = 'tags_ASC',
  tags_DESC = 'tags_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord = RecordInterface & {
  __typename?: 'ShopifyProductRecord';
  _allReferencingProducts: Array<ProductRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProductsMeta: CollectionMetadata;
  _allReferencingShopifyCollections: Array<ShopifyCollectionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShopifyCollectionsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  collections: Array<ShopifyCollectionRecord>;
  handle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  shopifyId: Scalars['String']['output'];
  tags?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  variants?: Maybe<Scalars['JsonField']['output']>;
};


/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord_allReferencingProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductAndShopifyProduct>;
};


/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord_allReferencingProductsMetaArgs = {
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductAndShopifyProduct>;
};


/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord_allReferencingShopifyCollectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShopifyCollectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopifyCollectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShopifyCollectionAndShopifyProduct>;
};


/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord_allReferencingShopifyCollectionsMetaArgs = {
  filter?: InputMaybe<ShopifyCollectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShopifyCollectionAndShopifyProduct>;
};


/** Record of type Shopify Product (shopify_product) */
type ShopifyProductRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en'
}

/** Block of type Size guide (size_guide_block) */
type SizeGuideBlockRecord = RecordInterface & {
  __typename?: 'SizeGuideBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  table?: Maybe<Scalars['JsonField']['output']>;
};


/** Block of type Size guide (size_guide_block) */
type SizeGuideBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Block of type Editorial section (start_editorial_block) */
type StartEditorialBlockRecord = RecordInterface & {
  __typename?: 'StartEditorialBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  about: AboutRecord;
  buttonText: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  lottieAnimation?: Maybe<FileField>;
  media: FileField;
  mediaOnTop?: Maybe<FileField>;
  text: Scalars['String']['output'];
};


/** Block of type Editorial section (start_editorial_block) */
type StartEditorialBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
enum StartModelFieldsReferencingCollectionModel {
  start_sections = 'start_sections',
  start_sections__startProductBlock_collection = 'start_sections__startProductBlock_collection'
}

/** Linking fields */
enum StartModelFieldsReferencingProductModel {
  start_sections = 'start_sections',
  start_sections__startProductBlock_selectedProducts__startProductShortcutBlock_product = 'start_sections__startProductBlock_selectedProducts__startProductShortcutBlock_product'
}

type StartModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StartModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StartModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  altMedia?: InputMaybe<FileFilter>;
  blackLogo?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  media?: InputMaybe<FileFilter>;
};

enum StartModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  blackLogo_ASC = 'blackLogo_ASC',
  blackLogo_DESC = 'blackLogo_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC'
}

type StartModelSectionsField = FullscreenBlockRecord | StartEditorialBlockRecord | StartProductBlockRecord;

/** Block of type Product section (start_product_block) */
type StartProductBlockRecord = RecordInterface & {
  __typename?: 'StartProductBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  collection?: Maybe<CollectionRecord>;
  columns?: Maybe<Scalars['String']['output']>;
  headline: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  selectedProducts: Array<StartProductShortcutBlockRecord>;
};


/** Block of type Product section (start_product_block) */
type StartProductBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Product shortcut (start_product_shortcut_block) */
type StartProductShortcutBlockRecord = RecordInterface & {
  __typename?: 'StartProductShortcutBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  color?: Maybe<ProductColorRecord>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  imageSecondary?: Maybe<ImageFileField>;
  product: ProductRecord;
};


/** Block of type Product shortcut (start_product_shortcut_block) */
type StartProductShortcutBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  altMedia?: Maybe<FileField>;
  blackLogo?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  media?: Maybe<FileField>;
  sections: Array<StartModelSectionsField>;
};


/** Record of type Start (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Block of type Two columns (two_column_block) */
type TwoColumnBlockRecord = RecordInterface & {
  __typename?: 'TwoColumnBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Two columns (two_column_block) */
type TwoColumnBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Two columns (two_column_block) */
type TwoColumnBlockRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type VariantModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<VariantModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  adminGraphqlApiId?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  inventoryQuantity?: InputMaybe<IntegerFilter>;
  price?: InputMaybe<StringFilter>;
  productId?: InputMaybe<IntegerFilter>;
  shopifyId?: InputMaybe<IntegerFilter>;
  title?: InputMaybe<StringFilter>;
};

enum VariantModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  adminGraphqlApiId_ASC = 'adminGraphqlApiId_ASC',
  adminGraphqlApiId_DESC = 'adminGraphqlApiId_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  inventoryQuantity_ASC = 'inventoryQuantity_ASC',
  inventoryQuantity_DESC = 'inventoryQuantity_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  productId_ASC = 'productId_ASC',
  productId_DESC = 'productId_DESC',
  shopifyId_ASC = 'shopifyId_ASC',
  shopifyId_DESC = 'shopifyId_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Variant (variant) */
type VariantRecord = RecordInterface & {
  __typename?: 'VariantRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  adminGraphqlApiId: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  inventoryQuantity?: Maybe<Scalars['IntType']['output']>;
  price: Scalars['String']['output'];
  productId: Scalars['IntType']['output'];
  shopifyId: Scalars['IntType']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Variant (variant) */
type VariantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

type AllAboutsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllAboutsQuery = { __typename?: 'Query', allAbouts: Array<{ __typename?: 'AboutRecord', id: any, title: string, slug: string, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null }>, _allAboutsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AboutQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', id: any, title: string, slug: string, metaTitle?: string | null, metaDescription?: string | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, sections: Array<{ __typename: 'AboutFeedbackFormBlockRecord', id: any } | { __typename: 'AboutTextBlockRecord', id: any, layout?: string | null, text: { __typename?: 'AboutTextBlockModelTextField', links: Array<string>, value: any } } | { __typename: 'AboutThreeColumnBlockRecord', id: any, c1Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c1Text: { __typename?: 'AboutThreeColumnBlockModelC1TextField', links: Array<string>, value: any, blocks: Array<string> }, c2Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c2Text: { __typename?: 'AboutThreeColumnBlockModelC2TextField', links: Array<string>, value: any, blocks: Array<string> }, c3Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c3Text: { __typename?: 'AboutThreeColumnBlockModelC3TextField', links: Array<string>, value: any, blocks: Array<string> } } | { __typename: 'AboutTwoColumnBlockRecord', id: any, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, text: { __typename?: 'AboutTwoColumnBlockModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ContactFormBlockRecord', id: any, message?: string | null } | { __typename: 'TwoColumnBlockRecord', id: any, text?: string | null }> } } | { __typename: 'FullscreenBlockRecord', id: any, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, content?: { __typename?: 'AboutModelContentField', blocks: Array<string>, links: Array<string>, value: any } | null } | null };

type AboutLightFragment = { __typename?: 'AboutRecord', id: any, title: string, slug: string, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null };

type AboutFragment = { __typename?: 'AboutRecord', id: any, title: string, slug: string, metaTitle?: string | null, metaDescription?: string | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, sections: Array<{ __typename: 'AboutFeedbackFormBlockRecord', id: any } | { __typename: 'AboutTextBlockRecord', id: any, layout?: string | null, text: { __typename?: 'AboutTextBlockModelTextField', links: Array<string>, value: any } } | { __typename: 'AboutThreeColumnBlockRecord', id: any, c1Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c1Text: { __typename?: 'AboutThreeColumnBlockModelC1TextField', links: Array<string>, value: any, blocks: Array<string> }, c2Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c2Text: { __typename?: 'AboutThreeColumnBlockModelC2TextField', links: Array<string>, value: any, blocks: Array<string> }, c3Media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, c3Text: { __typename?: 'AboutThreeColumnBlockModelC3TextField', links: Array<string>, value: any, blocks: Array<string> } } | { __typename: 'AboutTwoColumnBlockRecord', id: any, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, text: { __typename?: 'AboutTwoColumnBlockModelTextField', links: Array<string>, value: any, blocks: Array<{ __typename: 'ContactFormBlockRecord', id: any, message?: string | null } | { __typename: 'TwoColumnBlockRecord', id: any, text?: string | null }> } } | { __typename: 'FullscreenBlockRecord', id: any, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } }>, content?: { __typename?: 'AboutModelContentField', blocks: Array<string>, links: Array<string>, value: any } | null };

type AllCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllCollectionsQuery = { __typename?: 'Query', allCollections: Array<{ __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, position?: any | null, _allReferencingProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }> }>, _allCollectionsMeta: { __typename?: 'CollectionMetadata', count: any } };

type CollectionQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


type CollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, position?: any | null, _allReferencingProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }> } | null };

type CollectionFragment = { __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, position?: any | null, _allReferencingProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }> };

type AllShopifyCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllShopifyCollectionsQuery = { __typename?: 'Query', allShopifyCollections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string, shopifyId: string, products: Array<{ __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> }>, _allShopifyCollectionsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ShopifyCollectionQueryVariables = Exact<{
  handle?: InputMaybe<Scalars['String']['input']>;
}>;


type ShopifyCollectionQuery = { __typename?: 'Query', shopifyCollection?: { __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string, shopifyId: string, products: Array<{ __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } | null };

type ShopifyCollectionFragment = { __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string, shopifyId: string, products: Array<{ __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> };

type AllProductColorsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductColorsQuery = { __typename?: 'Query', allProductColors: Array<{ __typename?: 'ProductColorRecord', id: any, title: string }>, _allProductColorsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProductColorFragment = { __typename?: 'ProductColorRecord', id: any, title: string };

type ContactQueryVariables = Exact<{ [key: string]: never; }>;


type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactRecord', id: any, headline: string, contactFormMessage: string, slug?: string | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, content: { __typename?: 'ContactModelContentField', blocks: Array<string>, links: Array<string>, value: any } } | null };

type AllFaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllFaqsQuery = { __typename?: 'Query', allFaqs: Array<{ __typename?: 'FaqRecord', id: any, question: string, answer: { __typename?: 'FaqModelAnswerField', blocks: Array<string>, links: Array<string>, value: any }, section: { __typename?: 'FaqSectionRecord', id: any, title: string, slug: string } }>, _allFaqsMeta: { __typename?: 'CollectionMetadata', count: any }, allFaqSections: Array<{ __typename?: 'FaqSectionRecord', id: any, title: string, slug: string, inMenu?: any | null }>, _allFaqSectionsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllFaqSectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllFaqSectionsQuery = { __typename?: 'Query', allFaqSections: Array<{ __typename?: 'FaqSectionRecord', id: any, title: string, slug: string, inMenu?: any | null }>, _allFaqSectionsMeta: { __typename?: 'CollectionMetadata', count: any } };

type FaqFragment = { __typename?: 'FaqRecord', id: any, question: string, answer: { __typename?: 'FaqModelAnswerField', blocks: Array<string>, links: Array<string>, value: any }, section: { __typename?: 'FaqSectionRecord', id: any, title: string, slug: string } };

type FeedbackQueryVariables = Exact<{ [key: string]: never; }>;


type FeedbackQuery = { __typename?: 'Query', feedback?: { __typename?: 'FeedbackRecord', id: any, headline: string, intro: { __typename?: 'FeedbackModelIntroField', blocks: Array<string>, value: any, links: Array<string> }, questions: Array<{ __typename?: 'FeedbackQuestionBlockRecord', id: any, headline?: string | null, text: string }> } | null };

type ImageCartThumbnailFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageCartThumbnailFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageCartThumbnailFragment = ImageCartThumbnailFragment_FileField_ | ImageCartThumbnailFragment_ImageFileField_;

type ImageEightFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageEightFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageEightFragment = ImageEightFragment_FileField_ | ImageEightFragment_ImageFileField_;

type ImageFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageFragment = ImageFragment_FileField_ | ImageFragment_ImageFileField_;

type ImageMenuFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageMenuFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageMenuFragment = ImageMenuFragment_FileField_ | ImageMenuFragment_ImageFileField_;

type ImageSquareFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageSquareFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageSquareFragment = ImageSquareFragment_FileField_ | ImageSquareFragment_ImageFileField_;

type ImageThumbnailFragment_FileField_ = { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null };

type ImageThumbnailFragment_ImageFileField_ = { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } };

type ImageThumbnailFragment = ImageThumbnailFragment_FileField_ | ImageThumbnailFragment_ImageFileField_;

type MediaFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type MediaPortraitFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type ResponsiveImageFragment = { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any };

type SiteFragment = { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null } | null };

type GeneralQueryVariables = Exact<{ [key: string]: never; }>;


type GeneralQuery = { __typename?: 'Query', general?: { __typename?: 'GeneralRecord', id: any, eMail?: string | null, tiktok?: string | null, instagram?: string | null, pinterest?: string | null, claims: Array<{ __typename?: 'ClaimRecord', id: any, text?: string | null }>, eights: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }> } | null };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } | null } | null } };

type AllLegalsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllLegalsQuery = { __typename?: 'Query', allLegals: Array<{ __typename?: 'LegalRecord', id: any, title: string, slug: string, text: { __typename?: 'LegalModelTextField', blocks: Array<string>, links: Array<string>, value: any } }>, _allLegalsMeta: { __typename?: 'CollectionMetadata', count: any } };

type LegalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type LegalQuery = { __typename?: 'Query', legal?: { __typename?: 'LegalRecord', id: any, title: string, slug: string, text: { __typename?: 'LegalModelTextField', blocks: Array<string>, links: Array<string>, value: any } } | null };

type LegalFragment = { __typename?: 'LegalRecord', id: any, title: string, slug: string, text: { __typename?: 'LegalModelTextField', blocks: Array<string>, links: Array<string>, value: any } };

type MenuQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type MenuQuery = { __typename?: 'Query', allCollections: Array<{ __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, image: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } }>, _allCollectionsMeta: { __typename?: 'CollectionMetadata', count: any }, allAbouts: Array<{ __typename?: 'AboutRecord', id: any, title: string, slug: string, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null }>, _allAboutsMeta: { __typename?: 'CollectionMetadata', count: any }, allFaqSections: Array<{ __typename?: 'FaqSectionRecord', id: any, title: string, slug: string, inMenu?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }>, _allFaqSectionsMeta: { __typename?: 'CollectionMetadata', count: any }, allLegals: Array<{ __typename?: 'LegalRecord', id: any, title: string, slug: string }>, _allLegalsMeta: { __typename?: 'CollectionMetadata', count: any }, general?: { __typename?: 'GeneralRecord', instagram?: string | null, tiktok?: string | null, pinterest?: string | null } | null, contact?: { __typename?: 'ContactRecord', title: string, slug?: string | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null } | null, faqConfig?: { __typename?: 'FaqConfigRecord', menuImage: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } } | null };

type AllProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  collectionId?: InputMaybe<Scalars['ItemId']['input']>;
}>;


type AllProductsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ShopifyProductDataQueryVariables = Exact<{
  handle?: InputMaybe<Scalars['String']['input']>;
}>;


type ShopifyProductDataQuery = { __typename?: 'Query', shopifyProduct?: { __typename?: 'ShopifyProductRecord', id: any, tags?: string | null, handle: string, title: string } | null };

type ProductByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>;
}>;


type ProductByIdQuery = { __typename?: 'Query', product?: { __typename?: 'ProductRecord', id: any, title: string, label?: string | null, metaTitle?: string | null, metaDescription?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, description?: { __typename?: 'ProductModelDescriptionField', blocks: Array<string>, value: any, links: Array<string> } | null, shortSummary?: { __typename?: 'ProductModelShortSummaryField', blocks: Array<string>, value: any, links: Array<string> } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, sections: Array<{ __typename?: 'ProductMediaBlockRecord', id: any, text?: { __typename?: 'ProductMediaBlockModelTextField', blocks: Array<string>, value: any, links: Array<string> } | null, productMedia: Array<{ __typename?: 'ProductMediaModelRecord', id: any, title: string, altText?: string | null, thumbnail: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } }> }> }>, metaSections: Array<{ __typename?: 'ProductMetaInfoRecord', id: any, title: string, metaType: { __typename?: 'ProductMetaTypeRecord', id: any, position?: any | null, title: string }, text: { __typename?: 'ProductMetaInfoModelTextField', value: any, links: Array<string>, blocks: Array<{ __typename: 'SizeGuideBlockRecord', id: any, table?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } } | null };

type AllProductByCollectionQueryVariables = Exact<{
  collectionId?: InputMaybe<Scalars['ItemId']['input']>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductByCollectionQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductBrandingQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductBrandingQuery = { __typename?: 'Query', allProductBrandings: Array<{ __typename?: 'ProductBrandingRecord', id: any, text?: string | null, smallText?: string | null, image: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, link: { __typename: 'AboutRecord', id: any, title: string, slug: string } }>, _allProductBrandingsMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductMetaTypesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductMetaTypesQuery = { __typename?: 'Query', allProductMetaTypes: Array<{ __typename?: 'ProductMetaTypeRecord', id: any, position?: any | null, title: string }>, _allProductMetaTypesMeta: { __typename?: 'CollectionMetadata', count: any } };

type AllProductsForMenuQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type AllProductsForMenuQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type ProductLightFragment = { __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } };

type VariationThumbnailFragment = { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> };

type ProductFragment = { __typename?: 'ProductRecord', id: any, title: string, label?: string | null, metaTitle?: string | null, metaDescription?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, titlePlural: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, description?: { __typename?: 'ProductModelDescriptionField', blocks: Array<string>, value: any, links: Array<string> } | null, shortSummary?: { __typename?: 'ProductModelShortSummaryField', blocks: Array<string>, value: any, links: Array<string> } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, sections: Array<{ __typename?: 'ProductMediaBlockRecord', id: any, text?: { __typename?: 'ProductMediaBlockModelTextField', blocks: Array<string>, value: any, links: Array<string> } | null, productMedia: Array<{ __typename?: 'ProductMediaModelRecord', id: any, title: string, altText?: string | null, thumbnail: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } }> }> }>, metaSections: Array<{ __typename?: 'ProductMetaInfoRecord', id: any, title: string, metaType: { __typename?: 'ProductMetaTypeRecord', id: any, position?: any | null, title: string }, text: { __typename?: 'ProductMetaInfoModelTextField', value: any, links: Array<string>, blocks: Array<{ __typename: 'SizeGuideBlockRecord', id: any, table?: any | null, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null }> } }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } };

type ProductMediaItemFragment = { __typename?: 'ProductMediaModelRecord', id: any, title: string, altText?: string | null, thumbnail: Array<{ __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }>, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } }> };

type ShopifyProductFragment = { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null };

type SitemapQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


type SitemapQuery = { __typename?: 'Query', allCollections: Array<{ __typename?: 'CollectionRecord', id: any, title: string, slug: string }>, _allCollectionsMeta: { __typename?: 'CollectionMetadata', count: any }, allAbouts: Array<{ __typename?: 'AboutRecord', id: any, title: string, slug: string }>, _allAboutsMeta: { __typename?: 'CollectionMetadata', count: any }, allLegals: Array<{ __typename?: 'LegalRecord', id: any, title: string, slug: string }>, _allLegalsMeta: { __typename?: 'CollectionMetadata', count: any }, allProducts: Array<{ __typename?: 'ProductRecord', id: any, title: string, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, handle: string } }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: any } };

type StartQueryVariables = Exact<{ [key: string]: never; }>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', id: any, blackLogo?: any | null, sections: Array<{ __typename: 'FullscreenBlockRecord', id: any, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, mediaMobile: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, altMedia?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, altMediaMobile?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null } | { __typename: 'StartEditorialBlockRecord', id: any, headline: string, text: string, buttonText: string, media: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null }, mediaOnTop?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, lottieAnimation?: { __typename?: 'FileField', url: string } | null, about: { __typename?: 'AboutRecord', id: any, slug: string, title: string } } | { __typename: 'StartProductBlockRecord', id: any, headline: string, columns?: string | null, collection?: { __typename?: 'CollectionRecord', id: any, slug: string, title: string } | null, selectedProducts: Array<{ __typename?: 'StartProductShortcutBlockRecord', id: any, product: { __typename?: 'ProductRecord', id: any, title: string, label?: string | null, collection: { __typename?: 'CollectionRecord', id: any, title: string, slug: string, position?: any | null }, defaultColor?: { __typename?: 'ProductColorRecord', id: any, title: string } | null, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, thumbnailForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, secondaryForVariations?: { __typename?: 'ProductMediaModelRecord', id: any, variation: Array<{ __typename?: 'ProductMediaVariationBlockRecord', id: any, media: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null }, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> } | null, usp: Array<{ __typename?: 'ProductUspRecord', id: any, title?: string | null, description?: string | null }>, shopifyProduct: { __typename?: 'ShopifyProductRecord', id: any, shopifyId: string, title: string, tags?: string | null, handle: string, variants?: any | null, collections: Array<{ __typename?: 'ShopifyCollectionRecord', id: any, title: string, handle: string }>, image?: { __typename?: 'FileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null } | null } }, image?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, imageSecondary?: { __typename?: 'ImageFileField', format: string, id: any, mimeType: string, url: string, title?: string | null, responsiveImage: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } } | null, color?: { __typename?: 'ProductColorRecord', id: any, title: string } | null }> }>, media?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, mediaMobile?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, altMedia?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null, altMediaMobile?: { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', alt?: string | null, aspectRatio: any, base64?: string | null, height: any, sizes: string, src: string, srcSet: string, webpSrcSet: string, title?: string | null, width: any } | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, mp4Url?: string | null, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null } | null } | null };

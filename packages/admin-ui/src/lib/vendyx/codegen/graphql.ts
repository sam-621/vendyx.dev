/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Admin = Node & {
  __typename?: 'Admin';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  username: Scalars['String']['output'];
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: AssetType;
  updatedAt: Scalars['Date']['output'];
};

export type AssetList = List & {
  __typename?: 'AssetList';
  count: Scalars['Int']['output'];
  items: Array<Asset>;
};

export enum AssetType {
  Image = 'IMAGE'
}

export type AuthenticateInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateOptionInput = {
  name: Scalars['String']['input'];
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateProductInput = {
  assetsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  onlineOnly: Scalars['Boolean']['input'];
  published: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
};

export type CreateVariantInput = {
  optionValuesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  price: Scalars['Float']['input'];
  published: Scalars['Boolean']['input'];
  sku: Scalars['String']['input'];
  stock: Scalars['Int']['input'];
};

/** A list of items with count, each result that expose a array of items should implement this interface */
export type List = {
  count: Scalars['Int']['output'];
  items: Array<Maybe<Node>>;
};

export type ListInput = {
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the cursor is (skip position) */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<Scalars['String']['output']>;
  createOption: Option;
  createProduct: Product;
  createVariant: Variant;
  removeProduct: Scalars['Boolean']['output'];
  removeVariant: Scalars['Boolean']['output'];
  updateProduct: Product;
  updateVariant: Variant;
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationCreateOptionArgs = {
  input: CreateOptionInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateVariantArgs = {
  input: CreateVariantInput;
  productId: Scalars['ID']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  input: UpdateProductInput;
};


export type MutationUpdateVariantArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVariantInput;
};

/** A node, each type that represents a entity should implement this interface */
export type Node = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Option = Node & {
  __typename?: 'Option';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  values?: Maybe<Array<OptionValue>>;
};

export type OptionList = List & {
  __typename?: 'OptionList';
  count: Scalars['Int']['output'];
  items: Array<Option>;
};

export type OptionValue = Node & {
  __typename?: 'OptionValue';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
  value: Scalars['String']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  onlineOnly: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  variants: VariantList;
};


export type ProductAssetsArgs = {
  input?: InputMaybe<ListInput>;
};


export type ProductVariantsArgs = {
  input?: InputMaybe<ListInput>;
};

export type ProductList = List & {
  __typename?: 'ProductList';
  count: Scalars['Int']['output'];
  items: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products: ProductList;
  validateToken?: Maybe<Scalars['Boolean']['output']>;
  variant?: Maybe<Variant>;
  variants: VariantList;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  input?: InputMaybe<ListInput>;
};


export type QueryVariantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVariantsArgs = {
  input?: InputMaybe<ListInput>;
};

export type UpdateProductInput = {
  assetsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  onlineOnly?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariantInput = {
  optionValuesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  price?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type Variant = Node & {
  __typename?: 'Variant';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  optionValues?: Maybe<Array<OptionValue>>;
  price: Scalars['Float']['output'];
  published: Scalars['Boolean']['output'];
  sku: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type VariantList = List & {
  __typename?: 'VariantList';
  count: Scalars['Int']['output'];
  items: Array<Variant>;
};

export type AuthenticateMutationVariables = Exact<{
  input: AuthenticateInput;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate?: string | null };

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string } };

export type ValidateTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidateTokenQuery = { __typename?: 'Query', validateToken?: boolean | null };

export type GetProductsQueryVariables = Exact<{
  input?: InputMaybe<ListInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', count: number, items: Array<{ __typename?: 'Product', id: string, createdAt: any, name: string, slug: string, onlineOnly: boolean, published: boolean, variants: { __typename?: 'VariantList', items: Array<{ __typename?: 'Variant', id: string, sku: string, stock: number, price: number }> }, assets: { __typename?: 'AssetList', items: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } };


export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthenticateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const ValidateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ValidateToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateToken"}}]}}]} as unknown as DocumentNode<ValidateTokenQuery, ValidateTokenQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"onlineOnly"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
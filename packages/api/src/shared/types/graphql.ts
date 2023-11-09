
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum AssetType {
    IMAGE = "IMAGE",
    FILE = "FILE"
}

export class CreateProductVariantInput {
    sku: string;
    price: number;
    stock: number;
    comparisonPrice?: Nullable<number>;
    costPerUnit?: Nullable<number>;
    weight?: Nullable<number>;
    enabled?: Nullable<boolean>;
}

export class CreateProductInput {
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled?: Nullable<boolean>;
    variants?: Nullable<CreateProductVariantInput[]>;
}

export class PaginatedListInput {
    skip?: Nullable<number>;
    take?: Nullable<number>;
}

export interface Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface List {
    items: Nullable<Node>[];
    count: number;
}

export class Asset implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    source: string;
    type: AssetType;
    enabled: boolean;
    products: Nullable<ProductList>[];
    collections: Nullable<CollectionList>[];
}

export class AssetList implements List {
    items: Nullable<Asset>[];
    count: number;
}

export class Collection implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled: boolean;
    products: Nullable<ProductList>[];
    assets: Nullable<AssetList>[];
}

export class CollectionList implements List {
    items: Nullable<Collection>[];
    count: number;
}

export abstract class IQuery {
    abstract collections(): CollectionList | Promise<CollectionList>;

    abstract collection(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract products(): ProductList | Promise<ProductList>;

    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

export class OptionGroup implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    options?: Nullable<OptionList>;
}

export class Option implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    optionGroups?: Nullable<OptionGroupList>;
}

export class OptionGroupList implements List {
    items: Nullable<OptionGroup>[];
    count: number;
}

export class OptionList implements List {
    items: Nullable<Option>[];
    count: number;
}

export class ProductVariant implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    sku: string;
    price: number;
    comparisonPrice?: Nullable<number>;
    costPerUnit: number;
    weight?: Nullable<number>;
    stock: number;
    enabled: boolean;
    options?: Nullable<OptionList>;
}

export class ProductVariantList implements List {
    items: Nullable<ProductVariant>[];
    count: number;
}

export class Product implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled: boolean;
    variants: ProductVariantList;
    collections: CollectionList;
    assets: AssetList;
}

export class ProductList implements List {
    items: Nullable<Product>[];
    count: number;
}

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;

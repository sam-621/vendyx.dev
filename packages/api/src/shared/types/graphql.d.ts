
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
    totalItems: number;
}

export class Asset implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    source: string;
    type: AssetType;
    enable: boolean;
    products: Nullable<ProductList>[];
    collections: Nullable<CollectionList>[];
}

export class AssetList implements List {
    items: Nullable<Asset>[];
    totalItems: number;
}

export abstract class IQuery {
    abstract assets(): AssetList | Promise<AssetList>;
    abstract asset(id?: Nullable<string>): Nullable<Asset> | Promise<Nullable<Asset>>;
    abstract collections(): CollectionList | Promise<CollectionList>;
    abstract collection(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Collection> | Promise<Nullable<Collection>>;
    abstract products(input?: Nullable<PaginatedListInput>): ProductList | Promise<ProductList>;
    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Collection implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description?: Nullable<string>;
    enable: boolean;
    products: Nullable<ProductList>[];
    assets: Nullable<AssetList>[];
}

export class CollectionList implements List {
    items: Nullable<Collection>[];
    totalItems: number;
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
    totalItems: number;
}

export class OptionList implements List {
    items: Nullable<Option>[];
    totalItems: number;
}

export class ProductVariant implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    sku?: Nullable<string>;
    price: number;
    comparisonPrice?: Nullable<number>;
    costPerUnit: number;
    weight?: Nullable<number>;
    stock: number;
    enable: boolean;
    options?: Nullable<OptionList>;
}

export class ProductVariantList implements List {
    items: Nullable<ProductVariant>[];
    totalItems: number;
}

export class Product implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description?: Nullable<string>;
    enable: boolean;
    variants: Nullable<ProductVariantList>[];
    collections: Nullable<CollectionList>[];
    assets: Nullable<AssetList>[];
}

export class ProductList implements List {
    items: Nullable<Product>[];
    totalItems: number;
}

type Nullable<T> = T | null;


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
    categories: Nullable<CategoryList>[];
}

export class AssetList implements List {
    items: Nullable<Asset>[];
    totalItems: number;
}

export abstract class IQuery {
    abstract assets(): AssetList | Promise<AssetList>;

    abstract asset(id?: Nullable<string>): Nullable<Asset> | Promise<Nullable<Asset>>;

    abstract categories(): CategoryList | Promise<CategoryList>;

    abstract category(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract products(): ProductList | Promise<ProductList>;

    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Category implements Node {
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

export class CategoryList implements List {
    items: Nullable<Category>[];
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
    categories: Nullable<CategoryList>[];
    assets: Nullable<AssetList>[];
}

export class ProductList implements List {
    items: Nullable<Product>[];
    totalItems: number;
}

export class PaginatedListInput {
    skip?: Nullable<number>;
    first?: Nullable<number>;
    last?: Nullable<number>;
}

type Nullable<T> = T | null;


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface List {
    items: Nullable<Node>[];
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
}

export class ProductList implements List {
    items: Nullable<Product>[];
    totalItems: number;
}

export abstract class IQuery {
    abstract products(): ProductList | Promise<ProductList>;

    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

export class PaginatedListInput {
    skip?: Nullable<number>;
    first?: Nullable<number>;
    last?: Nullable<number>;
}

type Nullable<T> = T | null;

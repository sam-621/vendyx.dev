
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

export class CreateOptionInput {
    name: string;
    values: string[];
}

export class CreateOptionValuesInput {
    name: string;
    value: string;
}

export class CreateProductVariantInput {
    price: number;
    sku: string;
    enabled?: Nullable<boolean>;
    stock?: Nullable<number>;
    offerPrice?: Nullable<number>;
    costPerProduct?: Nullable<number>;
    weight?: Nullable<number>;
    asset?: Nullable<string>;
    optionValues?: Nullable<Nullable<CreateOptionValuesInput>[]>;
}

export class CreateProductInput {
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled?: Nullable<boolean>;
    collectionsIds?: Nullable<string[]>;
    assetsIds?: Nullable<string[]>;
    labelValuesIds?: Nullable<string[]>;
    variants?: Nullable<CreateProductVariantInput[]>;
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
    products: Nullable<Product>[];
    collections: Nullable<Collection>[];
    productVariants?: Nullable<Nullable<ProductVariant>[]>;
    labelValues: Nullable<LabelValues>[];
}

export abstract class IQuery {
    abstract asset(id: string): Nullable<Asset> | Promise<Nullable<Asset>>;

    abstract assets(): Nullable<Asset>[] | Promise<Nullable<Asset>[]>;

    abstract collection(id: string): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract collections(): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;

    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<ProductList> | Promise<Nullable<ProductList>>;

    abstract label(id: string): Nullable<Label> | Promise<Nullable<Label>>;

    abstract labels(): Nullable<Label>[] | Promise<Nullable<Label>[]>;
}

export class Collection implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    slug: string;
    enabled: boolean;
    products: Nullable<Product>[];
    assets: Nullable<Asset>[];
    labelValues: Nullable<LabelValues>[];
}

export class Option implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    values: Nullable<OptionValues>[];
}

export class OptionValues implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    option: Option;
}

export class ProductVariant implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    offerPrice: number;
    costPerProduct: number;
    stock: number;
    sku: string;
    enabled: boolean;
    weight?: Nullable<number>;
    optionValues: Nullable<OptionValues>[];
    asset?: Nullable<Asset>;
    product: Product;
}

export class Product implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    slug: string;
    enabled: boolean;
    variants: Nullable<ProductVariant>[];
    collections: Nullable<Collection>[];
    assets: Nullable<Asset>[];
    labelValues: Nullable<LabelValues>[];
    options: Nullable<Option>[];
}

export class ProductList implements List {
    items: Nullable<Product>[];
    totalItems: number;
}

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Label implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    values: Nullable<LabelValues>[];
}

export class LabelValues {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    label: Label;
}

type Nullable<T> = T | null;

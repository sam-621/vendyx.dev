
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
    price: number;
    sku: string;
    enabled: boolean;
    stock?: Nullable<number>;
}

export class CreateProductInput {
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled: boolean;
}

export class Asset {
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

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract variant(id: string): Nullable<ProductVariant> | Promise<Nullable<ProductVariant>>;

    abstract variants(): Nullable<ProductVariant>[] | Promise<Nullable<ProductVariant>[]>;

    abstract label(id: string): Nullable<Label> | Promise<Nullable<Label>>;

    abstract labels(): Nullable<Label>[] | Promise<Nullable<Label>[]>;
}

export class Collection {
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

export class ProductVariant {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    stock: number;
    sku: string;
    enabled: boolean;
    optionValues: Nullable<OptionValues>[];
    asset?: Nullable<Asset>;
    product: Product;
}

export class Option {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    values: Nullable<OptionValues>[];
}

export class OptionValues {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    option: Option;
}

export class Product {
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

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createProductVariant(input: CreateProductVariantInput): Nullable<ProductVariant> | Promise<Nullable<ProductVariant>>;
}

export class Label {
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

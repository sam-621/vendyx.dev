
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

export class Asset {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    source: string;
    type: AssetType;
}

export abstract class IQuery {
    abstract asset(id: string): Nullable<Asset> | Promise<Nullable<Asset>>;

    abstract assets(): Nullable<Nullable<Asset>[]> | Promise<Nullable<Nullable<Asset>[]>>;

    abstract collection(id: string): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract collections(): Nullable<Nullable<Collection>[]> | Promise<Nullable<Nullable<Collection>[]>>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract productVariant(id: string): Nullable<ProductVariant> | Promise<Nullable<ProductVariant>>;

    abstract productVariants(): Nullable<Nullable<ProductVariant>[]> | Promise<Nullable<Nullable<ProductVariant>[]>>;

    abstract option(id: string): Nullable<Option> | Promise<Nullable<Option>>;

    abstract options(): Nullable<Nullable<Option>[]> | Promise<Nullable<Nullable<Option>[]>>;

    abstract label(id: string): Nullable<Label> | Promise<Nullable<Label>>;

    abstract labels(): Nullable<Nullable<Label>[]> | Promise<Nullable<Nullable<Label>[]>>;
}

export class Collection {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    slug: string;
    enabled: boolean;
    products: Nullable<Product>[];
    assets: Nullable<Asset>[];
    labels: Nullable<Label>[];
}

export class Product {
    id: string;
    createdAt: string;
    updatedAt: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    slug?: Nullable<string>;
    enabled?: Nullable<boolean>;
    variants?: Nullable<Nullable<ProductVariant>[]>;
    collections?: Nullable<Nullable<Collection>[]>;
    assets?: Nullable<Nullable<Asset>[]>;
    labels?: Nullable<Nullable<Label>[]>;
    options?: Nullable<Nullable<Option>[]>;
}

export class ProductVariant {
    id: string;
    createdAt: string;
    updatedAt: string;
    price: number;
    stock: number;
    sku: string;
    enabled: boolean;
    optionValues: Nullable<OptionValues>[];
    asset: Asset;
    product: Product;
}

export class Option {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    values: Nullable<OptionValues>[];
}

export class OptionValues {
    id: string;
    createdAt: string;
    updatedAt: string;
    value: string;
    option: Option;
}

export class Label {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    values: Nullable<LabelValues>[];
}

export class LabelValues {
    id: string;
    createdAt: string;
    updatedAt: string;
    value: string;
    label: Label;
}

type Nullable<T> = T | null;

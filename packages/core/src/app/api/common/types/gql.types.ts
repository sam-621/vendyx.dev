
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthenticateAdminInput {
    username: string;
    password: string;
}

export class CreateOptionInput {
    name: string;
    values: Nullable<string>[];
}

export class UpdateOptionInput {
    name?: Nullable<string>;
    values?: Nullable<Nullable<UpdateOptionValueInput>[]>;
}

export class UpdateOptionValueInput {
    value?: Nullable<string>;
    optionValueId: string;
}

export class CreateProductVariantInput {
    sku: string;
    price: number;
    comparisonPrice?: Nullable<number>;
    costPerUnit: number;
    weight?: Nullable<number>;
    stock: number;
    enabled: boolean;
    options?: Nullable<string[]>;
}

export class UpdateProductVariantInput {
    sku?: Nullable<string>;
    price?: Nullable<number>;
    comparisonPrice?: Nullable<number>;
    costPerUnit?: Nullable<number>;
    weight?: Nullable<number>;
    stock?: Nullable<number>;
    enabled?: Nullable<boolean>;
}

export class CreateProductInput {
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled: boolean;
}

export class UpdateProductInput {
    name?: Nullable<string>;
    slug?: Nullable<string>;
    description?: Nullable<string>;
    enabled?: Nullable<boolean>;
}

export class ListInput {
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

export class Admin {
    id: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    password: string;
}

export abstract class IMutation {
    abstract authenticateAdmin(input: AuthenticateAdminInput): Nullable<string> | Promise<Nullable<string>>;

    abstract createOption(input: CreateOptionInput): Option | Promise<Option>;

    abstract updateOption(id: string, input: UpdateOptionInput): Option | Promise<Option>;

    abstract removeOption(id: string): boolean | Promise<boolean>;

    abstract createVariant(id: string, input: CreateProductVariantInput): ProductVariant | Promise<ProductVariant>;

    abstract updateVariant(id: string, input: UpdateProductVariantInput): ProductVariant | Promise<ProductVariant>;

    abstract removeVariant(id: string): boolean | Promise<boolean>;

    abstract createProduct(input: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(id: string, input: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: string): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract validateAdminToken(): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract options(input?: Nullable<ListInput>): OptionList | Promise<OptionList>;

    abstract variants(input?: Nullable<ListInput>): ProductVariantList | Promise<ProductVariantList>;

    abstract variant(id: string): Nullable<ProductVariant> | Promise<Nullable<ProductVariant>>;

    abstract products(input?: Nullable<ListInput>): ProductList | Promise<ProductList>;

    abstract product(id?: Nullable<string>, slug?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

export class OptionValue implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: string;
}

export class Option implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
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
}

export class ProductList implements List {
    items: Nullable<Product>[];
    count: number;
}

type Nullable<T> = T | null;


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Collection {
    id: string;
    createdAt: string;
    updatedAt: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    slug?: Nullable<string>;
    enabled?: Nullable<boolean>;
    products?: Nullable<Nullable<Product>[]>;
}

export abstract class IQuery {
    abstract collection(): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract collections(): Nullable<Nullable<Collection>[]> | Promise<Nullable<Nullable<Collection>[]>>;

    abstract product(): Nullable<Product> | Promise<Nullable<Product>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

export class Product {
    id: string;
    createdAt: string;
    updatedAt: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    slug?: Nullable<string>;
    enabled?: Nullable<boolean>;
}

type Nullable<T> = T | null;

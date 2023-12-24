
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

export class Admin {
    id: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    password: string;
}

export abstract class IMutation {
    abstract authenticateAdmin(input: AuthenticateAdminInput): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IQuery {
    abstract validateAdminToken(): Nullable<boolean> | Promise<Nullable<boolean>>;

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

export class Product implements Node {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description?: Nullable<string>;
    enabled: boolean;
}

type Nullable<T> = T | null;

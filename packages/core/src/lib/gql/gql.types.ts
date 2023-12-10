
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAdminInput {
    username: string;
    password: string;
}

export class AuthenticateInput {
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
    abstract createAdmin(input: CreateAdminInput): Nullable<Admin> | Promise<Nullable<Admin>>;

    abstract authenticate(input: AuthenticateInput): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;

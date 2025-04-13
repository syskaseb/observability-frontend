/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};

const isServer = typeof window === "undefined";

const DEFAULT_API_BASE = "http://localhost:8077";
const DEFAULT_NEXT_PUBLIC_API_BASE = "http://localhost:8077";

export const OpenAPI: OpenAPIConfig = {
    BASE: isServer
        ? process.env.API_BASE_URL ?? DEFAULT_API_BASE
        : process.env.NEXT_PUBLIC_API_BASE ?? DEFAULT_NEXT_PUBLIC_API_BASE,
    VERSION: '0.0.1-SNAPSHOT',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: process.env.NEXT_PUBLIC_API_TOKEN || '',
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};

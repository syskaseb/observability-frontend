/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelEmployer } from './EntityModelEmployer';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';
export type PagedModelEntityModelEmployer = {
    _embedded?: {
        employers?: Array<EntityModelEmployer>;
    };
    _links?: Links;
    page?: PageMetadata;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelApplication } from './EntityModelApplication';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';
export type PagedModelEntityModelApplication = {
    _embedded?: {
        applications?: Array<EntityModelApplication>;
    };
    _links?: Links;
    page?: PageMetadata;
};


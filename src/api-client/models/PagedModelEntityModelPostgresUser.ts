/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelPostgresUser } from './EntityModelPostgresUser';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';
export type PagedModelEntityModelPostgresUser = {
    _embedded?: {
        postgresUsers?: Array<EntityModelPostgresUser>;
    };
    _links?: Links;
    page?: PageMetadata;
};


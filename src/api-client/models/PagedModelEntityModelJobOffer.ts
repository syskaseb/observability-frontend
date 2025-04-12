/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelJobOffer } from './EntityModelJobOffer';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';
export type PagedModelEntityModelJobOffer = {
    _embedded?: {
        jobOffers?: Array<EntityModelJobOffer>;
    };
    _links?: Links;
    page?: PageMetadata;
};


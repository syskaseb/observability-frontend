/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelApplicantResponseDto } from './EntityModelApplicantResponseDto';
import type { Links } from './Links';
import type { PageMetadata } from './PageMetadata';
export type PagedModelEntityModelApplicantResponseDto = {
    _embedded?: {
        applicantResponseDtoes?: Array<EntityModelApplicantResponseDto>;
    };
    _links?: Links;
    page?: PageMetadata;
};


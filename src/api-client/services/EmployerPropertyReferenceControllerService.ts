/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelJobOffer } from '../models/CollectionModelJobOffer';
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployerPropertyReferenceControllerService {
    /**
     * get-joboffer-by-employer-Id
     * @param id
     * @returns CollectionModelJobOffer OK
     * @throws ApiError
     */
    public static followPropertyReferenceEmployerGet1(
        id: string,
    ): CancelablePromise<CollectionModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employers/{id}/jobOffers',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-joboffer-by-employer-Id
     * @param id
     * @param requestBody
     * @returns CollectionModelJobOffer OK
     * @throws ApiError
     */
    public static createPropertyReferenceEmployerPut(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<CollectionModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/employers/{id}/jobOffers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-joboffer-by-employer-Id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceEmployerDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employers/{id}/jobOffers',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-joboffer-by-employer-Id
     * @param id
     * @param requestBody
     * @returns CollectionModelJobOffer OK
     * @throws ApiError
     */
    public static createPropertyReferenceEmployerPatch(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<CollectionModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employers/{id}/jobOffers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-joboffer-by-employer-Id
     * @param id
     * @param propertyId
     * @returns CollectionModelJobOffer OK
     * @throws ApiError
     */
    public static followPropertyReferenceEmployerGet(
        id: string,
        propertyId: string,
    ): CancelablePromise<CollectionModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employers/{id}/jobOffers/{propertyId}',
            path: {
                'id': id,
                'propertyId': propertyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * delete-joboffer-by-employer-Id
     * @param id
     * @param propertyId
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceIdEmployerDelete(
        id: string,
        propertyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employers/{id}/jobOffers/{propertyId}',
            path: {
                'id': id,
                'propertyId': propertyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}

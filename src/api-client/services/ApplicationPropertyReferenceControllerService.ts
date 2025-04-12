/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelJobOffer } from '../models/EntityModelJobOffer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationPropertyReferenceControllerService {
    /**
     * get-joboffer-by-application-Id
     * @param id
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static followPropertyReferenceApplicationGet1(
        id: string,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications/{id}/jobOffer',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-joboffer-by-application-Id
     * @param id
     * @param requestBody
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static createPropertyReferenceApplicationPut(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/applications/{id}/jobOffer',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-joboffer-by-application-Id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceApplicationDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{id}/jobOffer',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-joboffer-by-application-Id
     * @param id
     * @param requestBody
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static createPropertyReferenceApplicationPatch(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/applications/{id}/jobOffer',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-joboffer-by-application-Id
     * @param id
     * @param propertyId
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static followPropertyReferenceApplicationGet(
        id: string,
        propertyId: string,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications/{id}/jobOffer/{propertyId}',
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
     * delete-joboffer-by-application-Id
     * @param id
     * @param propertyId
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceIdApplicationDelete(
        id: string,
        propertyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{id}/jobOffer/{propertyId}',
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

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelJobOffer } from '../models/EntityModelJobOffer';
import type { JobOfferRequestBody } from '../models/JobOfferRequestBody';
import type { PagedModelEntityModelJobOffer } from '../models/PagedModelEntityModelJobOffer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JobOfferEntityControllerService {
    /**
     * get-joboffer
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelJobOffer OK
     * @throws ApiError
     */
    public static getCollectionResourceJobofferGet1(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<PagedModelEntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * create-joboffer
     * @param requestBody
     * @returns EntityModelJobOffer Created
     * @throws ApiError
     */
    public static postCollectionResourceJobofferPost(
        requestBody: JobOfferRequestBody,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/jobOffers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-joboffer
     * @param id
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static getItemResourceJobofferGet(
        id: string,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-joboffer
     * @param id
     * @param requestBody
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static putItemResourceJobofferPut(
        id: string,
        requestBody: JobOfferRequestBody,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jobOffers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-joboffer
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteItemResourceJobofferDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jobOffers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-joboffer
     * @param id
     * @param requestBody
     * @returns EntityModelJobOffer OK
     * @throws ApiError
     */
    public static patchItemResourceJobofferPatch(
        id: string,
        requestBody: JobOfferRequestBody,
    ): CancelablePromise<EntityModelJobOffer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/jobOffers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

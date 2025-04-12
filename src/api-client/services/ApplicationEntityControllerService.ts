/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationRequestBody } from '../models/ApplicationRequestBody';
import type { EntityModelApplication } from '../models/EntityModelApplication';
import type { PagedModelEntityModelApplication } from '../models/PagedModelEntityModelApplication';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationEntityControllerService {
    /**
     * get-application
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelApplication OK
     * @throws ApiError
     */
    public static getCollectionResourceApplicationGet1(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<PagedModelEntityModelApplication> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * create-application
     * @param requestBody
     * @returns EntityModelApplication Created
     * @throws ApiError
     */
    public static postCollectionResourceApplicationPost(
        requestBody: ApplicationRequestBody,
    ): CancelablePromise<EntityModelApplication> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-application
     * @param id
     * @returns EntityModelApplication OK
     * @throws ApiError
     */
    public static getItemResourceApplicationGet(
        id: string,
    ): CancelablePromise<EntityModelApplication> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-application
     * @param id
     * @param requestBody
     * @returns EntityModelApplication OK
     * @throws ApiError
     */
    public static putItemResourceApplicationPut(
        id: string,
        requestBody: ApplicationRequestBody,
    ): CancelablePromise<EntityModelApplication> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/applications/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-application
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteItemResourceApplicationDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-application
     * @param id
     * @param requestBody
     * @returns EntityModelApplication OK
     * @throws ApiError
     */
    public static patchItemResourceApplicationPatch(
        id: string,
        requestBody: ApplicationRequestBody,
    ): CancelablePromise<EntityModelApplication> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/applications/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

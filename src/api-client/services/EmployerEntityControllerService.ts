/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployerRequestBody } from '../models/EmployerRequestBody';
import type { EntityModelEmployer } from '../models/EntityModelEmployer';
import type { PagedModelEntityModelEmployer } from '../models/PagedModelEntityModelEmployer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployerEntityControllerService {
    /**
     * get-employer
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelEmployer OK
     * @throws ApiError
     */
    public static getCollectionResourceEmployerGet1(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<PagedModelEntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employers',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * create-employer
     * @param requestBody
     * @returns EntityModelEmployer Created
     * @throws ApiError
     */
    public static postCollectionResourceEmployerPost(
        requestBody: EmployerRequestBody,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/employers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-employer
     * @param id
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static getItemResourceEmployerGet(
        id: string,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/employers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-employer
     * @param id
     * @param requestBody
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static putItemResourceEmployerPut(
        id: string,
        requestBody: EmployerRequestBody,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/employers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-employer
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteItemResourceEmployerDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/employers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-employer
     * @param id
     * @param requestBody
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static patchItemResourceEmployerPatch(
        id: string,
        requestBody: EmployerRequestBody,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/employers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

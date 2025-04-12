/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelPostgresUser } from '../models/EntityModelPostgresUser';
import type { PagedModelEntityModelPostgresUser } from '../models/PagedModelEntityModelPostgresUser';
import type { PostgresUserRequestBody } from '../models/PostgresUserRequestBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostgresUserEntityControllerService {
    /**
     * get-postgresuser
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns PagedModelEntityModelPostgresUser OK
     * @throws ApiError
     */
    public static getCollectionResourcePostgresuserGet1(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<PagedModelEntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/postgresUsers',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * create-postgresuser
     * @param requestBody
     * @returns EntityModelPostgresUser Created
     * @throws ApiError
     */
    public static postCollectionResourcePostgresuserPost(
        requestBody: PostgresUserRequestBody,
    ): CancelablePromise<EntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/postgresUsers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-postgresuser
     * @param id
     * @returns EntityModelPostgresUser OK
     * @throws ApiError
     */
    public static getItemResourcePostgresuserGet(
        id: string,
    ): CancelablePromise<EntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/postgresUsers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-postgresuser
     * @param id
     * @param requestBody
     * @returns EntityModelPostgresUser OK
     * @throws ApiError
     */
    public static putItemResourcePostgresuserPut(
        id: string,
        requestBody: PostgresUserRequestBody,
    ): CancelablePromise<EntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/postgresUsers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-postgresuser
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteItemResourcePostgresuserDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/postgresUsers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-postgresuser
     * @param id
     * @param requestBody
     * @returns EntityModelPostgresUser OK
     * @throws ApiError
     */
    public static patchItemResourcePostgresuserPatch(
        id: string,
        requestBody: PostgresUserRequestBody,
    ): CancelablePromise<EntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/postgresUsers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityModelPostgresUser } from '../models/EntityModelPostgresUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostgresUserSearchControllerService {
    /**
     * @param username
     * @returns EntityModelPostgresUser OK
     * @throws ApiError
     */
    public static executeSearchPostgresuserGet(
        username?: string,
    ): CancelablePromise<EntityModelPostgresUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/postgresUsers/search/findByUsername',
            query: {
                'username': username,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}

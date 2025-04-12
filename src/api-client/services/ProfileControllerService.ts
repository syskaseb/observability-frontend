/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RepresentationModelObject } from '../models/RepresentationModelObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProfileControllerService {
    /**
     * @returns RepresentationModelObject OK
     * @throws ApiError
     */
    public static listAllFormsOfMetadata1(): CancelablePromise<RepresentationModelObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static descriptor111(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile/applications',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static descriptor112(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile/employers',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static descriptor113(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile/jobOffers',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static descriptor114(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile/postgresUsers',
        });
    }
}

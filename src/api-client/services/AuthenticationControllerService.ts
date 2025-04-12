/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequestDto } from '../models/LoginRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationControllerService {
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static saveUser(
        requestBody: LoginRequestDto,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static createAuthenticationToken(
        requestBody: LoginRequestDto,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

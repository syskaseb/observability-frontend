/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicantCreateUpdateRequestDto } from '../models/ApplicantCreateUpdateRequestDto';
import type { EntityModelApplicantResponseDto } from '../models/EntityModelApplicantResponseDto';
import type { Pageable } from '../models/Pageable';
import type { PagedModelEntityModelApplicantResponseDto } from '../models/PagedModelEntityModelApplicantResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicantControllerService {
    /**
     * @param pageable
     * @returns PagedModelEntityModelApplicantResponseDto OK
     * @throws ApiError
     */
    public static getAllApplicants(
        pageable: Pageable,
    ): CancelablePromise<PagedModelEntityModelApplicantResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applicants',
            query: {
                'pageable': pageable,
            },
        });
    }
    /**
     * @param requestBody
     * @returns EntityModelApplicantResponseDto OK
     * @throws ApiError
     */
    public static createApplicant(
        requestBody: ApplicantCreateUpdateRequestDto,
    ): CancelablePromise<EntityModelApplicantResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applicants',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns EntityModelApplicantResponseDto OK
     * @throws ApiError
     */
    public static getApplicantById(
        id: number,
    ): CancelablePromise<EntityModelApplicantResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applicants/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApplicant(
        id: number,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applicants/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns EntityModelApplicantResponseDto OK
     * @throws ApiError
     */
    public static updateApplicant(
        id: number,
        requestBody: ApplicantCreateUpdateRequestDto,
    ): CancelablePromise<EntityModelApplicantResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/applicants/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

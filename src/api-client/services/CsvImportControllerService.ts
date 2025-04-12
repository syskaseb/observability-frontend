/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RedirectView } from '../models/RedirectView';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CsvImportControllerService {
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static uploadCsvFile(
        requestBody?: {
            file: Blob;
        },
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/csv/upload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns RedirectView OK
     * @throws ApiError
     */
    public static showUploadForm(): CancelablePromise<RedirectView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/csv',
        });
    }
}

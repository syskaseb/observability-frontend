/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModelApplication } from '../models/CollectionModelApplication';
import type { CollectionModelObject } from '../models/CollectionModelObject';
import type { EntityModelEmployer } from '../models/EntityModelEmployer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JobOfferPropertyReferenceControllerService {
    /**
     * get-application-by-joboffer-Id
     * @param id
     * @returns CollectionModelApplication OK
     * @throws ApiError
     */
    public static followPropertyReferenceJobofferGet1(
        id: string,
    ): CancelablePromise<CollectionModelApplication> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers/{id}/applications',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-application-by-joboffer-Id
     * @param id
     * @param requestBody
     * @returns CollectionModelApplication OK
     * @throws ApiError
     */
    public static createPropertyReferenceJobofferPut(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<CollectionModelApplication> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jobOffers/{id}/applications',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-application-by-joboffer-Id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceJobofferDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jobOffers/{id}/applications',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-application-by-joboffer-Id
     * @param id
     * @param requestBody
     * @returns CollectionModelApplication OK
     * @throws ApiError
     */
    public static createPropertyReferenceJobofferPatch(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<CollectionModelApplication> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/jobOffers/{id}/applications',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-application-by-joboffer-Id
     * @param id
     * @param propertyId
     * @returns CollectionModelApplication OK
     * @throws ApiError
     */
    public static followPropertyReferenceJobofferGet(
        id: string,
        propertyId: string,
    ): CancelablePromise<CollectionModelApplication> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers/{id}/applications/{propertyId}',
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
     * delete-application-by-joboffer-Id
     * @param id
     * @param propertyId
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceIdJobofferDelete(
        id: string,
        propertyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jobOffers/{id}/applications/{propertyId}',
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
     * get-employer-by-joboffer-Id
     * @param id
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static followPropertyReferenceJobofferGet21(
        id: string,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers/{id}/employer',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * update-employer-by-joboffer-Id
     * @param id
     * @param requestBody
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static createPropertyReferenceJobofferPut1(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/jobOffers/{id}/employer',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete-employer-by-joboffer-Id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceJobofferDelete1(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jobOffers/{id}/employer',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * patch-employer-by-joboffer-Id
     * @param id
     * @param requestBody
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static createPropertyReferenceJobofferPatch1(
        id: string,
        requestBody: CollectionModelObject,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/jobOffers/{id}/employer',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * get-employer-by-joboffer-Id
     * @param id
     * @param propertyId
     * @returns EntityModelEmployer OK
     * @throws ApiError
     */
    public static followPropertyReferenceJobofferGet2(
        id: string,
        propertyId: string,
    ): CancelablePromise<EntityModelEmployer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobOffers/{id}/employer/{propertyId}',
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
     * delete-employer-by-joboffer-Id
     * @param id
     * @param propertyId
     * @returns void
     * @throws ApiError
     */
    public static deletePropertyReferenceIdJobofferDelete1(
        id: string,
        propertyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/jobOffers/{id}/employer/{propertyId}',
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

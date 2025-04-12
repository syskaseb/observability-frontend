/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationContext } from './ApplicationContext';
import type { HttpStatusCode } from './HttpStatusCode';
import type { ServletContext } from './ServletContext';
export type RedirectView = {
    applicationContext?: ApplicationContext;
    servletContext?: ServletContext;
    contentType?: string;
    requestContextAttribute?: string;
    staticAttributes?: Record<string, Record<string, any>>;
    exposePathVariables?: boolean;
    exposeContextBeansAsAttributes?: boolean;
    exposedContextBeanNames?: Array<string>;
    beanName?: string;
    url?: string;
    contextRelative?: boolean;
    http10Compatible?: boolean;
    exposeModelAttributes?: boolean;
    encodingScheme?: string;
    statusCode?: HttpStatusCode;
    expandUriTemplateVariables?: boolean;
    propagateQueryParams?: boolean;
    hosts?: Array<string>;
    redirectView?: boolean;
    propagateQueryProperties?: boolean;
    attributesMap?: Record<string, Record<string, any>>;
    attributesCSV?: string;
    attributes?: Record<string, string>;
};


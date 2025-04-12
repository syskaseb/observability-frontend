/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterRegistration } from './FilterRegistration';
import type { JspConfigDescriptor } from './JspConfigDescriptor';
import type { ServletRegistration } from './ServletRegistration';
import type { SessionCookieConfig } from './SessionCookieConfig';
export type ServletContext = {
    classLoader?: {
        name?: string;
        registeredAsParallelCapable?: boolean;
        definedPackages?: Array<{
            name?: string;
            annotations?: Array<Record<string, any>>;
            declaredAnnotations?: Array<Record<string, any>>;
            sealed?: boolean;
            specificationTitle?: string;
            specificationVersion?: string;
            specificationVendor?: string;
            implementationTitle?: string;
            implementationVersion?: string;
            implementationVendor?: string;
        }>;
        defaultAssertionStatus?: boolean;
    };
    majorVersion?: number;
    minorVersion?: number;
    sessionTimeout?: number;
    contextPath?: string;
    attributeNames?: Record<string, any>;
    initParameterNames?: Record<string, any>;
    sessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
    servletRegistrations?: Record<string, ServletRegistration>;
    filterRegistrations?: Record<string, FilterRegistration>;
    sessionCookieConfig?: SessionCookieConfig;
    defaultSessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
    effectiveSessionTrackingModes?: Array<'COOKIE' | 'URL' | 'SSL'>;
    jspConfigDescriptor?: JspConfigDescriptor;
    virtualServerName?: string;
    requestCharacterEncoding?: string;
    responseCharacterEncoding?: string;
    effectiveMajorVersion?: number;
    effectiveMinorVersion?: number;
    serverInfo?: string;
    servletContextName?: string;
};


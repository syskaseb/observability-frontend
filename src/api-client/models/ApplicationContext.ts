/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutowireCapableBeanFactory } from './AutowireCapableBeanFactory';
import type { BeanFactory } from './BeanFactory';
import type { Environment } from './Environment';
export type ApplicationContext = {
    parent?: ApplicationContext;
    id?: string;
    displayName?: string;
    autowireCapableBeanFactory?: AutowireCapableBeanFactory;
    applicationName?: string;
    startupDate?: number;
    environment?: Environment;
    beanDefinitionCount?: number;
    beanDefinitionNames?: Array<string>;
    parentBeanFactory?: BeanFactory;
    classLoader?: {
        name?: string;
        registeredAsParallelCapable?: boolean;
        parent?: {
            name?: string;
            registeredAsParallelCapable?: boolean;
            unnamedModule?: {
                name?: string;
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
                descriptor?: {
                    open?: boolean;
                    automatic?: boolean;
                };
                named?: boolean;
                annotations?: Array<Record<string, any>>;
                declaredAnnotations?: Array<Record<string, any>>;
                packages?: Array<string>;
                layer?: Record<string, any>;
            };
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
        unnamedModule?: {
            name?: string;
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
            descriptor?: {
                open?: boolean;
                automatic?: boolean;
            };
            named?: boolean;
            annotations?: Array<Record<string, any>>;
            declaredAnnotations?: Array<Record<string, any>>;
            packages?: Array<string>;
            layer?: Record<string, any>;
        };
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
};


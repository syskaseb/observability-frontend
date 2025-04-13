// src/api-client/customApplicantClient.ts
import {OpenAPI} from "./core/OpenAPI";
import {request as __request} from "./core/request";
import type {PagedModelEntityModelApplicantResponseDto} from "./models/PagedModelEntityModelApplicantResponseDto";

/**
 * Custom wrapper to fetch applicants with flat query parameters.
 * @param page Zero-based page index.
 * @param size Number of items per page.
 * @param sort Array of sort criteria.
 * @returns A promise resolving to the applicants response.
 */
export function getApplicantsFlat(
  page: number,
  size: number,
  sort: string[] = [],
): Promise<PagedModelEntityModelApplicantResponseDto> {
  // Build a flat query string.
  // This avoids the default recursive behavior (which creates nested keys).
  const sortQuery = sort
    .map((item) => `sort=${encodeURIComponent(item)}`)
    .join("&");
  const qs = `?page=${page}&size=${size}${sortQuery ? "&" + sortQuery : ""}`;

  // Use the __request helper with the flat URL.
  // Here we override the default query builder by appending our qs string.
  return __request(OpenAPI, {
    method: "GET",
    url: `/applicants${qs}`,
    errors: {
      404: "Not Found",
    },
  });
}

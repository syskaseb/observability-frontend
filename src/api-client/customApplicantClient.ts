// src/api-client/customApplicantClient.ts
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type { PagedModelEntityModelApplicantResponseDto } from "./models/PagedModelEntityModelApplicantResponseDto";

/**
 * Retrieve multiple applicants with flat query parameters.
 *
 * This function builds a flat query string (instead of the default recursive one)
 * to match the expectations of your Java backend API.
 *
 * @param page Zero-based page index.
 * @param size Number of items per page.
 * @param sort Optional array of sort criteria, e.g. ['name,asc'].
 * @returns A promise resolving to the applicants response.
 */
export function getApplicantsFlat(
    page: number,
    size: number,
    sort: string[] = []
): Promise<PagedModelEntityModelApplicantResponseDto> {
  // Create a flat query string for the sort criteria.
  const sortQuery = sort.map(item => `sort=${encodeURIComponent(item)}`).join("&");
  const qs = `?page=${page}&size=${size}${sortQuery ? "&" + sortQuery : ""}`;

  // Make the API call using the generated request function.
  return __request(OpenAPI, {
    method: "GET",
    url: `/applicants${qs}`,
    errors: {
      404: "Not Found",
    },
  });
}

// app/page.tsx
import Link from "next/link";
import dynamic from "next/dynamic";
import type { PagedModelEntityModelApplicantResponseDto } from "@/api-client/models/PagedModelEntityModelApplicantResponseDto";
import { getApplicantsFlat } from "@/api-client/customApplicantClient"; // Dynamically import the counter so it runs on the client.

// Dynamically import the counter so it runs on the client.
const Counter = dynamic(() => import("@/components/Counter"));

export default async function HomePage() {
  // Use the pageable function; here we fetch page 0 with 20 items.
  const applicantData: PagedModelEntityModelApplicantResponseDto =
    await getApplicantsFlat(0, 20, []);

  // The response object is expected to have _embedded.applicantResponseDtoes.
  const applicants = applicantData?._embedded?.applicantResponseDtoes ?? [];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Applicant Dashboard</h1>
      <div className="mb-6">
        <Counter />
      </div>
      {applicants.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicants.map((applicant) => (
            <li key={applicant.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{applicant.name}</h2>
              <p className="text-gray-600">Skills: {applicant.skills}</p>
              <Link
                href={`/applicants/${applicant.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applicants found.</p>
      )}
    </main>
  );
}

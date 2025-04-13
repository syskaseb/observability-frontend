import { getApplicantsFlat } from "@/api-client/customApplicantClient";
import type { PagedModelEntityModelApplicantResponseDto } from "@/api-client/models/PagedModelEntityModelApplicantResponseDto";
import Counter from "@/components/Counter";

export default async function HomePage() {
  const applicantData: PagedModelEntityModelApplicantResponseDto =
    await getApplicantsFlat(0, 20, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applicants</h1>
      {applicantData?._embedded?.applicantResponseDtoes &&
      applicantData._embedded.applicantResponseDtoes.length > 0 ? (
        <ul className="list-disc pl-5">
          {applicantData._embedded.applicantResponseDtoes.map((app) => (
            <li key={app.id}>
              <span>Name: {app.name}</span> – <span>Skills: {app.skills}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applicants found.</p>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">Client-side Counter</h2>
        <Counter />
      </section>
    </main>
  );
}

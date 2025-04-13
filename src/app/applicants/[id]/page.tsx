// app/applicants/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getApplicantsFlat } from "@/api-client/customApplicantClient";

interface PageProps {
    params: { id: string };
}

export default async function ApplicantDetail(props: PageProps) {
    // Destructure the params inside the function body.
    const { id } = props.params;
    const numericId = parseInt(id, 10);

    if (isNaN(numericId) || numericId < 1) {
        notFound();
    }

    // Fetch a large enough page to include the applicant.
    // For example, get the first 50 applicants.
    const applicantData = await getApplicantsFlat(0, 50, []);
    const applicants = applicantData?._embedded?.applicantResponseDtoes ?? [];

    // Find the applicant with the matching id.
    const applicant = applicants.find((a) => a.id === numericId);

    if (!applicant) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{applicant.name}</h1>
            <p className="mb-2">
                <strong>Skills:</strong> {applicant.skills}
            </p>
            <Link href="/" className="text-blue-500 hover:underline">
                ← Back to Applicants
            </Link>
        </main>
    );
}

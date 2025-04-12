import { ApplicationEntityControllerService } from "@/api-client/services/ApplicationEntityControllerService";
import Counter from "@/components/Counter";
import { ApplicationDto } from "@/api-client";

export default async function HomePage() {
  const applicationsData =
    await ApplicationEntityControllerService.getCollectionResourceApplicationGet1(
      0,
      20,
    );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applications</h1>

      {applicationsData?._embedded?.applications ? (
        <ul className="list-disc pl-5">
          {applicationsData._embedded.applications.map(
            (app: ApplicationDto) => (
              <li key={app.id}>
                <span>Status: {app.status}</span> –{" "}
                <span>Date: {app.applicationDate}</span>
              </li>
            ),
          )}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">Client-side Counter</h2>
        <Counter />
      </section>
    </main>
  );
}

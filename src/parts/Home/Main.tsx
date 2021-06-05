import IllustrationLandingPage from "../../components/IllustrationLandingPage";

const suggestedSearches = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
  //   "Healthcare Service",
  //   "Sales",
  //   "Program and Project Management",
  //   "Accounting",
];

export default function Main() {
  return (
    <main className="mt-6 container mx-auto">
      <h1 className="px-10 text-5xl text-blue-500 leading-tight">
        Welcome to your professional community
      </h1>

      <div className="space-y-4 mt-4 px-4 font-system-ui">
        <div className="hover:shadow-md cursor-pointer border border-gray-200 w-full px-4 py-4 flex justify-between items-center rounded-md text-xl">
          <span>Search for a job</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="hover:shadow-md cursor-pointer border border-gray-200 w-full px-4 py-4 flex justify-between items-center rounded-md text-xl">
          <span>Find a person you know</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="hover:shadow-md cursor-pointer border border-gray-200 w-full px-4 py-4 flex justify-between items-center rounded-md text-xl">
          <span>Learn a new skill</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <IllustrationLandingPage className="mt-4 mx-auto w-[374px] h-[240px]" />
      <div className="-mt-16 overlay bg-gray-100 py-20 w-full px-4">
        <h2 className="mt-12 text-3xl">Find open jobs and internships</h2>
        <p className="mt-7 font-system-ui font-bold text-gray-500">
          SUGGESTED SEARCHES
        </p>
        <div className="mt-4 flex flex-wrap">
          {suggestedSearches.map((suggest) => (
            <div className="mr-2 mb-4 cursor-pointer font-system-ui text-xl px-5 py-2 rounded-full text-gray-600 bg-gray-200 hover:underline hover:bg-gray-300 font-bold w-auto">
              {suggest}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

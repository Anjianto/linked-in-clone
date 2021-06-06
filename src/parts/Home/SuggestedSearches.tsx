import { useState } from "react";

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
  "Healthcare Service",
  "Sales",
  "Program and Project Management",
  "Accounting",
  "Arts and Design",
  "Community and Social Services",
  "Consulting",
  "Education",
  "Entrepreneurship",
  "Legal",
  "Media and Communications",
  "Military and Protective Service",
  "Product Management",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Support",
  "Administrative",
];

export default function SuggestedSearches() {
  const [more, setMore] = useState(10);

  return (
    <div className="-mt-16 overlay bg-gray-100 py-20 w-full px-4">
      <h2 className="mt-12 text-3xl">Find open jobs and internships</h2>
      <p className="mt-7 font-system-ui font-bold text-gray-500">
        SUGGESTED SEARCHES
      </p>
      <div className="mt-4 flex flex-wrap">
        {suggestedSearches.map(
          (suggest, index) =>
            index < more && (
              <div
                key={index}
                className="mr-2 mb-4 cursor-pointer font-system-ui text-xl px-5 py-2 rounded-full text-gray-600 bg-gray-200 hover:underline hover:bg-gray-300 font-bold w-auto"
              >
                {suggest}
              </div>
            )
        )}
      </div>
      {!(more >= suggestedSearches.length) ? (
        <button
          type="button"
          onClick={() => setMore(more + 10)}
          className="flex items-center font-system-ui font-bold text-gray-500 focus:outline-none"
        >
          Show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setMore(10)}
          className="flex items-center font-system-ui font-bold text-gray-500 focus:outline-none"
        >
          Show less
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

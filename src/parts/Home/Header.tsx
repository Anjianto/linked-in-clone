import IllustrationLandingPage from "../../components/IllustrationLandingPage";

export default function Header() {
  return (
    <>
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
    </>
  );
}

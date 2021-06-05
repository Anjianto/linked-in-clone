import Link from "next/link";

export default function PostJob() {
  return (
    <div className="bg-red-100 bg-opacity-50 w-full px-4 py-14">
      <p className="text-3xl text-orange-800">
        Post your job and find the people you need
      </p>
      <Link href="/">
        <a className="inline-block mr-2 mt-4 border border-gray-500 font-system-ui text-xl px-5 py-2 rounded-full text-gray-600 hover:underline hover:bg-gray-300 font-bold w-auto">
          Post a job
        </a>
      </Link>
    </div>
  );
}

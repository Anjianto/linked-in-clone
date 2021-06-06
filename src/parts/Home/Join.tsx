import Link from "next/link";

export default function Join() {
  return (
    <section className="py-14 px-4">
      <h2 className="text-3.5xl text-blue-500">
        Join your colleagues, classmates, and friends on LinkedIn.
      </h2>
      <Link href="/">
        <a className="text-white inline-block mr-2 mt-4 font-system-ui text-xl px-5 py-2 rounded-full bg-blue-600 hover:underline hover:bg-blue-800 font-bold w-auto">
          Post a job
        </a>
      </Link>
    </section>
  );
}

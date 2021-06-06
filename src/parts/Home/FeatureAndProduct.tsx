const featureAndProductsData: Array<{ parent: string; children: string[] }> = [
  {
    parent: "General",
    children: [
      "Sign Up",
      "Help Center",
      "About",
      "Press",
      "Blog",
      "Careers",
      "Developers",
    ],
  },
  {
    parent: "Browse LinkedIn",
    children: ["Learning", "Jobs", "Salary", "Mobile", "Services"],
  },
  {
    parent: "Business Solutions",
    children: ["Talent", "Marketing", "Sales", "Learning"],
  },
  {
    parent: "Directories",
    children: [
      "Members",
      "Jobs",
      "Companies",
      "Salaries",
      "Featured",
      "Learning",
      "Posts",
      "Articles",
      "Schools",
      "News",
      "News Letters",
      "Services",
      "Interview Prep",
    ],
  },
];

export default function FeatureAndProduct() {
  return (
    <section className="bg-gray-100 p-4">
      <div
        className="inline-flex align-middle flex-shrink items-start h-[21px] w-[84px] text-[#0a66c2] lazy-loaded opacity-100"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          focusable="false"
          className="lazy-loaded"
        >
          <g className="scaling-icon">
            <g>
              <g>
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M82.479 0H64.583C63.727 0 63 .677 63 1.511v17.977c0 .835.477 1.512 1.333 1.512h17.896c.857 0 1.771-.677 1.771-1.512V1.511C84 .677 83.336 0 82.479 0"
                    className="fill-white bug-text-color"
                  ></path>
                  <path
                    d="M82.479 0H64.583C63.727 0 63 .677 63 1.511v17.977c0 .835.477 1.512 1.333 1.512h17.896c.857 0 1.771-.677 1.771-1.512V1.511C84 .677 83.336 0 82.479 0zM71 8h2.827v1.441h.031c.431-.777 1.704-1.566 3.278-1.566C80.157 7.875 81 9.479 81 12.45V18h-3v-5.003c0-1.33-.531-2.497-1.773-2.497-1.508 0-2.227 1.021-2.227 2.697V18h-3V8zm-5 10h3V8h-3v10zm3.375-13.5a1.874 1.874 0 11-3.749.001 1.874 1.874 0 013.749-.001z"
                    className="fill-current background"
                  ></path>
                </g>
                <g className="fill-current">
                  <path d="M60 18h-2.8v-1.191h-.03c-.623.722-1.705 1.316-3.539 1.316-2.5 0-4.653-1.881-4.653-5.114 0-3.08 2.122-5.136 4.747-5.136 1.625 0 2.634.578 3.245 1.316H57V3h3v15zm-5.521-7.875c-1.715 0-2.679 1.223-2.679 2.849 0 1.627.964 2.901 2.679 2.901 1.717 0 2.721-1.241 2.721-2.901 0-1.706-1.004-2.849-2.721-2.849zm-6.818 6.264c-.708.917-2.166 1.736-4.52 1.736-3.14 0-5.14-2.08-5.14-5.347 0-2.903 1.811-4.903 5.228-4.903C46.18 7.875 48 9.813 48 13.222c0 .34-.055.678-.055.678h-7.114l.017.309c.197.862.848 1.916 2.342 1.916 1.304 0 2.198-.701 2.602-1.25l1.87 1.514zm-2.548-4.39c.02-1.054-.754-2.124-1.974-2.124-1.452 0-2.227 1.134-2.308 2.125h4.282z"></path>
                  <path d="M38 8h-3.5L31 12V3h-3v15h3v-5l3.699 5h3.542L34 12.533zM16 8h2.827v1.441h.031c.431-.777 1.704-1.566 3.278-1.566C25.157 7.875 26 9.792 26 12.45V18h-3v-5.003c0-1.472-.531-2.497-1.773-2.497-1.508 0-2.227 1.194-2.227 2.697V18h-3V8zm-5 10h3V8h-3v10zm1.501-11.7a1.8 1.8 0 100-3.599 1.8 1.8 0 000 3.599zM3 3H0v15h9v-3H3z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div>
        {featureAndProductsData.map((fp, index) => (
          <div key={index} className="mt-6 font-system-ui">
            <h2 className="font-bold">{fp.parent}</h2>
            {fp.children.map((child, ci) => (
              <p
                className="last:pb-0 py-2 font-bold text-gray-500 text-sm"
                key={ci}
              >
                {child}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";

const topics = [
  { name: "Training and Education", total: 300 },
  { name: "IT Help Desk", total: 170 },
  { name: "Business Analysis and Strategy", total: 760 },
  { name: "Finance and Accounting", total: 240 },
  { name: "Career Development", total: 320 },
  { name: "Leadership and Management", total: 1200 },
  { name: "Mobile Development", total: 370 },
  { name: "Marketing", total: 690 },
  { name: "Cloud Computing", total: 570 },
  { name: "Project Management", total: 340 },
  { name: "Visualization and Real-Time", total: 800 },
  { name: "Animation and Illustration", total: 1200 },
  { name: "Audio and Music", total: 390 },
  { name: "AEC", total: 1100 },
  { name: "Graphic Design", total: 930 },
  { name: "Motion Graphics and VFX", total: 770 },
  { name: "Photography", total: 960 },
  { name: "Video", total: 730 },
  { name: "Data Science", total: 720 },
  { name: "Network and System Administration", total: 800 },
  { name: "Software Development", total: 1200 },
  { name: "User Experience", total: 400 },
  { name: "Web Design", total: 510 },
  { name: "Database Management", total: 240 },
  { name: "Web Development", total: 1200 },
  { name: "Product and Manufacturing", total: 860 },
  { name: "Sales", total: 230 },
  { name: "Human Resources", total: 300 },
  { name: "DevOps", total: 190 },
  { name: "Small Business and Entrepreneurship", total: 430 },
  { name: "Customer Service", total: 140 },
  { name: "Professional Development", total: 1100 },
  { name: "Business Software and Tools", total: 1700 },
  { name: "Security", total: 410 },
];

export default function FindPeopleAndLearn() {
  return (
    <div className="bg-white py-14">
      <div className="left mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[192px] w-[240px]"
          viewBox="0 0 400 320"
        >
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M236 318.94v.06h4.29v-.06A160.8 160.8 0 00396.76 158.2H79.44A160.8 160.8 0 00236 318.94z"
              fill="#004182"
            />
            <path
              className="fill-[#6fa9dc]"
              d="M62.57 61.1h97.32a24.18 24.18 0 0124.18 24.18v79.35H38.39V85.28A24.18 24.18 0 0162.57 61.1z"
            />
            <path
              className="fill-[#6fa9dc]"
              d="M208.16 61.1h97.32a24.18 24.18 0 0124.18 24.18v79.35H184V85.28a24.18 24.18 0 0124.16-24.18z"
            />
            <path
              className="fill-[#6fa9dc]"
              d="M367.14 121.82v55a18.69 18.69 0 01-18.69 18.69H19.69A18.69 18.69 0 011 176.85v-55a18.69 18.69 0 0118.69-18.69 18.69 18.69 0 0118.69 18.69v42.81h291.38v-42.84a18.69 18.69 0 0118.69-18.69 18.69 18.69 0 0118.69 18.69z"
            />
            <path
              className="fill-none stroke-[#1b4481]"
              strokeMiterlimit={10}
              strokeWidth=".73px"
              d="M38.39 164.63v-2a16.43 16.43 0 0116.42-16.43h258.34a16.43 16.43 0 0116.42 16.43v2M183.98 78.68v67.48M38.39 121.82v42.81"
            />
            <path
              className="fill-none stroke-[#1b4481]"
              strokeMiterlimit={10}
              strokeWidth=".73px"
              d="M329.57 121.83v42.8H38.39"
            />
            <path
              className="fill-[#0d2135]"
              d="M41.93 195.54L31.75 233.1h5.09l15.63-37.56m273.56 0l10.17 37.56h-5.09l-15.62-37.56"
            />
            <path
              className="fill-[#fbf8f6]"
              d="M95.93 92.78l22.9-31.29-11.03-10.3-17.69 20.15"
            />
            <path
              className="fill-white"
              d="M163.69 124.44s4.38 2.67 8 1a36.82 36.82 0 0011.28-8.66 2.44 2.44 0 014.31 1.54 11.4 11.4 0 01-1.75 5.89l-12 19.5a3.3 3.3 0 01-5.19.58l-5.94-6.08a14.12 14.12 0 00-6.2-4.19l3.07-12.18z"
            />
            <path
              d="M95.17 133.43L116.28 109l40.66 25.42 13.8-22.2-43.4-27c-18.81-12-39.23 12.31-43.72 16.46S72.93 111 72.93 111z"
              fill="#394450"
            />
            <path
              className="fill-[#57697b]"
              d="M56.73 142.4c20.4 6.4 34.13 2.8 42.57-16.6s14-33 14-33l6 33 26.21-8.2-8.75-34.23c-5.4-21.16-34.34-23.89-43.62-4.13l-7.69 16.4-3.18 14H61.93z"
            />
            <path
              className="fill-[#de9885]"
              d="M98.53 19.21a8.74 8.74 0 01.07-1.12 10.52 10.52 0 01-.07 1.12zm.07-1.12l-20.66 4.48L66.72 25A16.71 16.71 0 0169.1 6.87c.35-.35.69-.71 1-1.1a16.78 16.78 0 0128.5 12.32z"
            />
            <path
              className="fill-[#de9885]"
              d="M99.68 26.38c-.24 1.76-2.56 1.05-2.75 4.09-.58 5.39-.93 5.53-6.63 6.73-2.16.45-3.24 2.3-3.75 4.43a23.22 23.22 0 00-.08 7.87 28.91 28.91 0 002.93 7.42c-6.45.34-9.39-4.67-13.27-8.8l-10.92-1.45-.31-.18a36.77 36.77 0 003.2-3.34c5.38-6.46 2.61-9.83-1.35-18.07a.36.36 0 010-.07l31.85-6.92a8.74 8.74 0 00-.07 1.12v.05c-.07 3.53 1.35 5.55 1.15 7.12z"
            />
            <path
              className="fill-[#de9885]"
              d="M66.75 25.08v-.07a.36.36 0 000 .07z"
            />
            <path
              className="fill-[#fbf8f6]"
              d="M91.27 82.79c-8.28 14.67-9 26.81-9 26.81-11.84 9-2.17 18.6-25.57 32.8-19.81-6-15.91-26.77-8.81-43.81s.2-24.4 3.8-37.4 12.21-14.4 16.38-18l3.07 1.07 15.3 5.28a28.91 28.91 0 002.93 7.42c3.46 6.84 7.83 15.31 1.9 25.83z"
            />
            <path
              className="fill-[#de9885]"
              d="M99.7 82.6l19.3-4.19a5.44 5.44 0 003.91-4c.87-3.53 2.42-5.24 5.19-6.42l2.36-1a.65.65 0 01.89.73 4.55 4.55 0 01-1.11 2l2.5-1.56a1.5 1.5 0 012.06.44 1.5 1.5 0 01-.42 2.1l-.75.49c1.39.37 1.3 2.77.32 3.22 1.32-.09 1.74 2.43.71 2.9a1.78 1.78 0 01.36 3.31l-4.76 3c-2.49 1.82-3.52-.14-7 1.41-3.73 1.67-25 12.69-25 12.69z"
            />
            <path
              d="M96.52 9.69c0 .21-.08.43-.13.63-1.19 4.8-5.44 7.54-6.6 3.26 0 0-1.2 5.94-4.35 6.43l-7.76 1.83c.1.25.18.49.26.73 2.11 6.36-1.56 8.2-4 7.81 6.66 10.47-.47 14.74-5.83 12.77a11.26 11.26 0 01-3 3.44c-4.15 3.11-9.58 2-12.62-3-12.47 3-13.87-14.84-1.2-17.17 1.26-12.18 9.67-7.8 17.84-19.58a14.93 14.93 0 011-1.1 16.77 16.77 0 0126.4 3.92z"
              className="fill-[#bf7461]"
            />
            <circle className="fill-[#de9885]" cx="81.47" cy="20.53" r="4.01" />
            <path
              className="fill-[#fbf8f6]"
              d="M99.7 82.6v20.46l-17.4 6.54-12.84 4.57V89.88L99.7 82.6z"
            />
            <path
              className="fill-white"
              d="M131.4 127.19s0 5.12 3.33 7.31a37.15 37.15 0 0013.27 5.08 2.43 2.43 0 01.94 4.48 11.4 11.4 0 01-5.94 1.58h-22.86a3.31 3.31 0 01-3.21-4.12l2.08-8.25a14.09 14.09 0 00.32-7.47l12-3.75z"
            />
            <path
              className="fill-[#de9885]"
              d="M116.13 59.09l4.3-6.5c1-1.41 3.95-2.53 5.42-3.25a11.1 11.1 0 002.42-1.34l1.15-7.53-6.65-.63c-.75-.07-1.76-.51-1.72-1.36"
            />
            <path
              transform="rotate(4.97 125.697 34.483)"
              className="fill-[#f4fbfe]"
              d="M120.73 24.59h10.02v19.95h-10.02z"
            />
            <path
              fill="#f4ba64"
              d="M129.87 44.94l-9.98-.87 1.24-14.64 10.09-.04-1.35 15.55z"
            />
            <path
              className="fill-[#de9885]"
              d="M119.06 51.12a10.3 10.3 0 003.8-5.56c.75-3.42-1.78-5.42-1.81-7.06l.1-1.22.14-1.5.83-.69a1.17 1.17 0 00.28-1.44 1.15 1.15 0 00-1.71-.39l-1.36 1a1.84 1.84 0 00-.7 1L117.18 41l-9.38 10.19 8.33 7.9z"
            />
            <rect
              className="fill-[#de9885]"
              x="127"
              y="38.24"
              width="4.83"
              height="2.69"
              rx="1.27"
            />
            <rect
              className="fill-[#de9885]"
              x="127.23"
              y="40.82"
              width="4.3"
              height="2.69"
              rx="1.27"
              transform="rotate(-6.42 129.456 42.229)"
            />
            <rect
              className="fill-[#de9885]"
              x="126.91"
              y="43.47"
              width="3.49"
              height="2.69"
              rx="1.27"
              transform="rotate(-6.42 128.77 44.873)"
            />
            <rect
              className="fill-[#de9885]"
              x="126.45"
              y="45.71"
              width="3.2"
              height="2.69"
              rx="1.27"
              transform="rotate(-10.86 128.058 47.044)"
            />
            <path
              className="fill-[#955646]"
              d="M259.07 58.87L242 87.43l-24.53-9.35s-3.8-5.43-8.49-6.42a12.36 12.36 0 01-2.69-1l-3.12-1.5a1.2 1.2 0 00-1.17 2.11l3.28 2s.66 4.72-11.48.72c0 0-1.53-.45-1 1.65a4.14 4.14 0 002.06 2.89l2.61 1.32a23.9 23.9 0 006 2.12c2.69.54 6.38 1 9.25.39l22.16 15.76c3.15 2.78 11 7.05 16.44 2.36.13-.12-.13.14 0 0l3.3-3.45c.71-.69 1.46-1.43 2.23-2.2l1.74-2c9.13-9.43 20.35-23.11 17.41-32-4.74-14.51-16.93-1.96-16.93-1.96z"
            />
            <path
              className="fill-[#381710]"
              d="M242 87.43l9.34 13s15.42-15.77 17.56-18.75c6.19-8.62 9.81-14.18 9.11-18.83S273 45.65 258.93 59z"
            />
            <path
              className="fill-[#0d2135]"
              d="M330.71 170.44l-6.35-2.57-3 9.9a8.35 8.35 0 013.8 2.45l6.55 4.51 5.12-11.65z"
            />
            <path
              className="fill-white"
              d="M342 175.34l-7.09 21.58a11.25 11.25 0 01-3.34 5.1 2.38 2.38 0 01-1.73.57 2.36 2.36 0 01-1.38-.58l-.24-.23a2.45 2.45 0 01-.56-2c1.65-9.34-2.47-19.53-2.47-19.53 2.6-1 3.81-1.39 3.81-1.39 5.79-3.94 1.7-8.39 1.7-8.39l8.43.59a3.32 3.32 0 012 .86 3.29 3.29 0 01.87 3.42z"
            />
            <path
              className="fill-[#57697b]"
              d="M342 175.34l-7.09 21.58a11.25 11.25 0 01-3.34 5.1 2.38 2.38 0 01-1.73.57c7.19-6.71 2.61-21.69 11.28-30.69a3.29 3.29 0 01.88 3.44z"
            />
            <path
              fill="#efb7a8"
              d="M258.52 139.76l67.42 28.61-9.54 24.1-66.74-29.4 8.86-23.31z"
            />
            <path
              className="fill-[#955646]"
              d="M298.64 23a16.62 16.62 0 01-2.71 9.11l-.13.2a16.73 16.73 0 01-13.8 7.36A16.65 16.65 0 01265.34 23v-.67a11.25 11.25 0 00.09-1.21A16.65 16.65 0 01298.64 23z"
            />
            <path
              className="fill-[#955646]"
              d="M293.55 35.68c-4.16 6.21-5.55 9.32 1.35 17.83l-.33.13h-23.36s1.55-4.85.46-8.39a4.87 4.87 0 00-2.19-2.92 10.17 10.17 0 01-1.48-1.07 6.69 6.69 0 01-1.85-2.65c-.06-.15-.11-.3-.16-.45l-.11-.38c0-.1-.05-.21-.08-.32s-.06-.28-.08-.42v-.14c0-.14 0-.26-.05-.4s0-.33-.06-.51 0-.35 0-.53v-1.89a3.49 3.49 0 00-.23-1.67c-.57-1.29-1.94-1.38-1.94-2.71 0-1.58 1.65-3.37 2.06-6.82a11.25 11.25 0 00.09-1.21l12.41 4.5 7.54 2.71 10.34 3.74-.14.2c-.8 1.22-1.55 2.33-2.24 3.35z"
            />
            <path
              d="M298.64 23a16.62 16.62 0 01-2.71 9.11l-.14.2c-.8 1.22-1.55 2.33-2.24 3.35l-.87.09c-3.85.32-7.87-.77-7.1-7.38.07-.54.16-1.11.29-1.73l-7.82-1.45c-2.52-.44-1.7-5.72.6-6.7-3.36.89-3.89-2.09-3.89-2.09-3.38 2.18-6.49-.46-6.49-.46l-1-.71-2.5-1.75A4.5 4.5 0 01263.23 9a3.13 3.13 0 011.53-2.16 3.67 3.67 0 011.5-.32 8 8 0 012.48.31c-1.6-3.22 3.49-3.93 6.16-2.6-.74-2.63 4.42-2.56 6-.51C284 .13 288.47 7 291.8 9.56A16.59 16.59 0 01298.64 23z"
              fill="#61382d"
            />
            <circle
              className="fill-[#955646]"
              cx="281.99"
              cy="25.78"
              r="3.98"
            />
            <path
              d="M233.93 158l30.3 61.89 24.9-15.52-25.43-53.48 32.58-5.52c11.91-2.69 15.89-15 15.89-15L304 111.69l-56.52 16A21.6 21.6 0 00233.93 158z"
              fill="#f9d4c8"
            />
            <path
              className="fill-[#381710]"
              d="M288.43 48.85l-16.76.55-12.74 26c-10.06 25.42-6.88 50.85-6.88 50.85l27.56-4.32c15.61-1.77 20.9 6.78 32.56 8.46 15.09-38.83-5.32-68.05-9.24-74.12s-14.5-7.42-14.5-7.42z"
            />
            <path
              className="fill-[#955646]"
              d="M286.19 106.68l-32.83 13.79-8-1.31a4.57 4.57 0 00-4.23 1.56L237.5 125a2.12 2.12 0 00-.48 1.74 2.15 2.15 0 002.47 1.78l29.3-4.81 22-3.37a14.36 14.36 0 0012-11.84l2.79-16.8-20.25 4.24z"
            />
            <path
              className="fill-[#0d2135]"
              d="M292.18 210.49l-3.05-6.13-8.77 5.47a8.33 8.33 0 011.22 4.35l1.93 7.72 11.54-5.36z"
            />
            <path
              className="fill-white"
              d="M297.43 221.65l-19.59 11.49a11.18 11.18 0 01-5.88 1.62 2.4 2.4 0 01-1.68-.72 2.33 2.33 0 01-.65-1.34v-.33a2.41 2.41 0 01.91-1.89c7.42-5.92 11.07-16.28 11.07-16.28 2.64.95 3.77 1.47 3.77 1.47 7 .89 6.84-5.16 6.84-5.16l5.92 6a3.28 3.28 0 01-.68 5.14z"
            />
            <path
              className="fill-[#57697b]"
              d="M297.43 221.65l-19.59 11.49a11.18 11.18 0 01-5.88 1.62 2.4 2.4 0 01-1.68-.72c9.83-.28 16.32-14.54 28.77-15.55a3.29 3.29 0 01-1.62 3.16z"
            />
            <path
              d="M278.05 25.21v.47l-.45 10.42-.14 2.9-.09 2a4.46 4.46 0 01-4.46 4.26h-1.24a4.87 4.87 0 00-2.19-2.92 10.17 10.17 0 01-1.48-1.08 6.69 6.69 0 01-1.85-2.65c-.06-.15-.11-.3-.16-.45l-.11-.38c0-.1-.05-.21-.08-.32s-.06-.28-.08-.42v-.14c0-.14 0-.26-.05-.4s0-.33-.06-.51 0-.35 0-.53v-1.89a3.49 3.49 0 00-.23-1.67v-.11a7.1 7.1 0 003.21.94c4 .27 8.78-2.08 9.54-7-.13-.21-.13-.36-.08-.52z"
              opacity=".65"
              fill="#61382d"
            />
          </g>
          <path
            fill="none"
            d="M0 0h400v320H0z"
            id="Layer_3"
            data-name="Layer 3"
          />
        </svg>
        <div className="mt-8">
          <h2 className="text-3xl">Connect with people who can help</h2>
          <Link href="/">
            <a className="font-system-ui inline-block mr-2 mt-6 border border-gray-500 text-xl px-5 py-2 rounded-full text-gray-600 hover:underline hover:bg-gray-300 font-bold w-auto">
              Find people you know
            </a>
          </Link>
        </div>
      </div>
      <div className="right mt-14 mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[192px] w-[240px]"
          viewBox="0 0 400 320"
        >
          <g id="Layer_2" data-name="Layer 2">
            <path
              d="M267.84 140.13A169.43 169.43 0 0198.41 309.55V140.13z"
              fill="#dc6240"
            />
            <rect
              x="111.16"
              y="137.08"
              width="40.65"
              height="3.08"
              rx="1.42"
              transform="rotate(180 131.49 138.62)"
              fill="#394450"
            />
            <rect
              className="fill-[#0d2135]"
              x="134.37"
              y="118.77"
              width="40.73"
              height="3.08"
              rx="1.42"
              transform="rotate(-76.28 154.728 120.313)"
            />
            <path
              d="M62.82 187.4l-18.58.23c-11.21 0-17.94-11.92-19.83-23.19l-7.16-42.86C14.31 106.75 5 104.19 5 104.19s4.17 39.27 7.71 72.68c2.57 24.28 15.64 24.68 51.45 23.08 6.94-.31 9.4-12.78-1.34-12.55z"
              fill="#b4c6d8"
            />
            <path
              d="M9.2 310L19 208.32a9.25 9.25 0 019.18-7.59H60a9.24 9.24 0 019.17 7.59L79 310"
              strokeWidth=".79"
              strokeMiterlimit="10"
              stroke="#0d2135"
              fill="none"
            />
            <path
              className="fill-[#de9885]"
              d="M50.8 260.38l3.61-3.83 8.12 7.23c-2.23 2.16-2.41 3.65-2.41 3.65l-3.69 4.44-7.94-6.12z"
            />
            <path
              className="fill-[#61372c]"
              d="M50.8 260.38l-7.49 4.33a3.38 3.38 0 00-.74 5.27l16.19 16.72a11.45 11.45 0 005.36 3.22A2.47 2.47 0 0067 288.5a2.48 2.48 0 00-.27-2.44c-5.7-7.88-6.6-18.63-6.6-18.63-11.69.88-9.33-7.05-9.33-7.05z"
            />
            <path
              className="fill-[#1b4481]"
              d="M98.61 202.43l-44.2 54.12 20.14 19.07 41.15-56.16-17.09-17.03z"
            />
            <path
              d="M77.3 155.29s31.08 21.1 40.65 29.27c6.27 5.34 10.4 10.71 11.87 18.84l12.9 70.92-28.21 3.22-9.21-60.18c-.6-4-5.3-9.37-8.41-11.89-19.38-15.68-31.65-17-43.26-16.73-12.94.26-16.92-6.74-19.32-11.52-3.17-6.28-.19-19.52-.19-19.52l43.76-8.16z"
              className="fill-[#2a67b2]"
            />
            <path
              className="fill-[#de9885]"
              d="M115.36 283.55l-.85-6 11.55-1.67c.35 3.09.73 17.2.73 17.2l-10.74-2.17z"
            />
            <path
              className="fill-[#61372c]"
              d="M115.68 286l-5.77 6.47a3.37 3.37 0 001 5.23l20.61 10.76a11.61 11.61 0 006.1 1.36 2.47 2.47 0 002.28-2.26 2.47 2.47 0 00-1-2.22c-7.89-5.68-12.11-15.59-12.11-15.59-10.88 4.56-11.11-3.75-11.11-3.75z"
            />
            <path
              className="fill-[#efb7a8]"
              d="M88 52c-.05.42-.11.85-.19 1.28q-.06.38-.15.75A19.72 19.72 0 0164.09 69c-.36-.08-.73-.17-1.08-.27A19.8 19.8 0 1188 51.86z"
            />
            <path
              className="fill-[#efb7a8]"
              d="M45.89 81.89l26.47 5.35s-2.94-13 3.93-13.82 7.23-.93 8.48-7.19c.55-3.55 3.2-2.48 3.65-4.51s-1.37-4.89-.38-9.86L50 56.61c4.37 11.76 7.6 15.61-4.41 25z"
            />
            <path
              className="fill-[#dfefff]"
              d="M78.26 151.76c.6-23.91 2-47.63-6-65.8a41 41 0 01-21.77-8.58l-4.32 5.5c-4.64 6-5.54 18.65-7.31 26.2-3.18 10.84 4.35 12.85-1.62 33.74a126.12 126.12 0 00-3.52 15.3c9.18-2.12 44.54-6.12 44.54-6.36z"
            />
            <path
              strokeWidth=".98"
              strokeMiterlimit="10"
              stroke="#0d2135"
              className="fill-none"
              d="M86.63 52.15l-1.45 5.6"
            />
            <path
              className="fill-[#0d2135]"
              d="M85.72 55.73l-11-3.14.11-.48 11.26 2.05-.37 1.57z"
            />
            <path
              d="M87.58 44.93c-1.34 2-4.69 6.3-9 7 0 0 2-1.15 3.71-6.07a24.82 24.82 0 01-6.7 7.57 17.26 17.26 0 01-2.76 1.66l-3.4-.89-7.13-1.85a12 12 0 000 2.73c.35 3.47 1.38 8.74.73 13.64a13.38 13.38 0 01-4.55 9 12.43 12.43 0 00-4 6.12c-2.52 7.41.46 14-8.74 18.13-6.43 2.89-7.22 8.38-7.12 13.56.08 4.3 1.7 8.82.92 12.18-28.11-15-7.52-38.49-9-44.47C23.6 67.58 45.93 58 49.2 45.37a19.72 19.72 0 0138.38-.44z"
              className="fill-[#be3626]"
            />
            <ellipse
              className="fill-[#efb7a8]"
              cx="67.72"
              cy="52.91"
              rx="5.52"
              ry="5.5"
              transform="rotate(-83.98 67.717 52.917)"
            />
            <path
              className="fill-[#dfefff]"
              d="M69.96 128.43l20.26.76-2.9 18.19-17.97 2.28.61-21.23z"
            />
            <path
              className="fill-[#efb7a8]"
              d="M132 125.11l-.1.37c-.26.91-.53 1.1-1.79 1.39a59.24 59.24 0 01-7.09.52c0 1.43-.25 8.24-6.87 9.35l-7.68 1.07-20.1 3 1.86-11.65 17.13.38 7.06.12a3.82 3.82 0 002.7-1l3.75-3.47a1.63 1.63 0 011.17-.44z"
            />
            <path
              className="fill-[#efb7a8]"
              d="M122 127l8.21 2.12a3 3 0 01-3.18 1.16l-5.83-.58z"
            />
            <circle cx="184.51" cy="27.75" r="4.14" fill="#fbebd3" />
            <path
              stroke="#94c9fd"
              strokeWidth="1.6"
              strokeMiterlimit="10"
              className="fill-none"
              d="M202.31 10.54l18.13 77.07-23.63 52.11"
            />
            <path
              className="fill-[#94c9fd]"
              d="M195.11 38.46l-21.28-21.27a15 15 0 0114.92-3.79 5.88 5.88 0 005.76-1.55l1.84-1.85 6 5.94-1.85 1.85a5.86 5.86 0 00-1.55 5.76 15 15 0 01-3.84 14.91z"
            />
            <circle
              className="fill-[#0d2135]"
              cx="200.25"
              cy="11.92"
              r="1.38"
            />
            <circle
              className="fill-[#0d2135]"
              cx="220.19"
              cy="88.09"
              r="1.67"
            />
            <path
              className="fill-[#94c9fd]"
              d="M207.93 136.18h-20.14a4.18 4.18 0 00-4.18 4.18h28.5a4.18 4.18 0 00-4.18-4.18z"
            />
          </g>
          <path
            fill="none"
            d="M0 0h400v320H0z"
            id="Layer_3"
            data-name="Layer 3"
          />
        </svg>
        <div className="mt-8">
          <h2 className="text-3xl">Learn the skills that can help you now</h2>
          <select
            name="topic"
            id="topic"
            className="form-select mt-6 p-4 w-full rounded border border-gray-200 font-system-ui"
          >
            <option value="" className="font-bold">
              Choose a topic to learn about
            </option>
            {topics.map((topic, index) => (
              <option
                key={index}
                value={topic.name.toLowerCase().replace(/\s/g, "-")}
              >
                {topic.name} {topic.total}+ courses
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

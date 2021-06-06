import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";

const carouselData = [
  {
    title: "Let the right people know you’re open to work",
    description:
      "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities",
    image: "/images/carousel-1.png",
  },
  {
    title: "Conversations today could lead to opportunity tomorrow",
    description:
      "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career",
    image: "/images/carousel-2.png",
  },
  {
    title: "Stay up to date on your industry",
    description:
      "From Live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry",
    image: "/images/carousel-3.png",
  },
];

export default function Carousel() {
  const [isActive, setIsActive] = useState(0);

  const nextSlide = () => {
    isActive <= carouselData.length - 1 && setIsActive(isActive + 1);
  };

  const prevSlide = () => {
    isActive > 0 && setIsActive(isActive - 1);
  };

  return (
    <div className="py-14 px-4 bg-gray-100">
      <div className="mb-4 pl-1 flex space-x-6 font-system-ui">
        <button
          type="button"
          onClick={prevSlide}
          disabled={isActive === 0}
          className="flex items-center text-gray-500 disabled:text-gray-300 font-bold focus:outline-none"
        >
          <ChevronLeftIcon className="w-10 h-10" />
          <span>Previous</span>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          disabled={isActive === carouselData.length - 1}
          className="flex items-center text-gray-500 disabled:text-gray-300 font-bold focus:outline-none"
        >
          <span>Next</span>
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      </div>
      <ul className="w-full flex">
        {carouselData.map(
          (data, index) =>
            isActive === index && (
              <li
                key={index}
                className="w-full inline-block transition-transform duration-200 ease-in-out"
              >
                <h2 className="text-4xl text-blue-500 font-system-ui">
                  {data.title}
                </h2>
                <p className="my-4 text-3xl font-extralight font-system-ui">
                  {data.description}
                </p>
                <Image
                  src={data.image}
                  width={445}
                  height={445}
                  layout="responsive"
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
}

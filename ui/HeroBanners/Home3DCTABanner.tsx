import Link from "next/link";
import WelcomeMarquee from "ui/Marquees/WelcomeMarquee";
import CribScene from "ui/Models/ThreeDCrib";

export default function Hero3DCribBanner(settings: any) {
  const set = settings.settings.result[0];
  return (
    <div className="bg-white dark:bg-gray-900 max-w-screen">
      <div className="grid w-full px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 md:grid-cols-1 whitespace-normal ">
        <div className="mx-10 place-self-center whitespace-normal">
          <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-8xl text-gray-900 dark:text-white uppercase whitespace-normal">
            {set.homeHeadLine}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg sm:whitespace-normal lg:text-xl dark:text-gray-400 whitespace-normal">
            {set.homeSubLine}
          </p>

          <Link
            href="/explore"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-red-100 bg-red-700 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-red-500 dark:focus:ring-gray-800"
          >
            View all collectibles
          </Link>
        </div>
        <div className="max-w-xl order-first lg:order-last animate-pulse hover:animate-none focus:animate-none mx-8 md:p-0">
          <CribScene />
        </div>
      </div>
    </div>
  );
}

export function ImaCollector() {
  return (
    <a
      href="/holder"
      className="ml-2 inline-flex items-center justify-center px-5 py-3 mr-3 text-black font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
    >
      I'm a collector
      <svg
        className="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}

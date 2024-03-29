import { getOwnersForEthCollection } from "lib/hooks/get-collection-data";
import React from "react";
import dynamic from "next/dynamic";

const AllCollectorsTable = dynamic(() => import("ui/Sections/AllCollectorsTable"), {
  ssr: false,
});

async function Collectors() {
  const contract = "0x148280a1395af6F430248c2E4B8063c69B7cA23E";
  const collectors = await getOwnersForEthCollection(contract);

  return (
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="/explore"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            🔥
          </span>{" "}
          <span className="text-sm font-medium">
            Not a collector yet? Let's make it happen!
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <AllCollectorsTable collectors={collectors} />
      </div>
    </div>
  );
}

export default Collectors;

'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import { ShareButton } from "ui/Buttons/ShareCardButton";
import CollectionContent from "ui/Sections/CollectionContent";

const ViewNfts = dynamic(() => import("ui/Sections/ViewNfts"), { ssr: false });

function CollectionNav({ props }: any) {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center content-center justify-items-center mt-8">
      <div className="grid grid-cols-12">
        <div className="flex col-span-2"></div>
      <div className="flex col-span-8 justify-center">
        <div
          onClick={() => setActiveTab("details")}
          className="px-4 py-2 text-sm font-medium text-red-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Details
        </div>
        <div
          onClick={() => setActiveTab("view-collection")}
          className="px-4 py-2 text-sm rounded-r-lg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          View Collection
        </div>
      </div>
      <div className="flex col-span-2 justify-end">
        <ShareButton url={`https://thecrib.space/collection/${props[0]?.slug?.current}`} title={props[1]?.collection?.name} />
      </div>
      </div>
     
      <div className="w-screen p-6">
        {activeTab === "details" && <CollectionContent props={props} />}
        {activeTab === "view-collection" && <ViewNfts props={props} />}
      </div>
    </div>
  );
}

export default CollectionNav;

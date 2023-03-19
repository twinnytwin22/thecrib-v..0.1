'use client'
import { useState } from "react";
import { LayloBar } from "ui/Modals/LayloModals";
import CollectionCard from "../Cards/CollectionCard";
import AllStats from "../Misc/AllStats";
import CribFinder from "../Misc/CribFinder";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";


export default function AllCollections({collections}: any) {
  const [sortType, setSortType] = useState("mintStatus");
  const [searchQuery, setSearchQuery] = useState("");



  const allCollections = collections.result.sort((a: any, b: any) => {
    if (sortType === "mintPrice") {
      return a.mintPrice - b.mintPrice;
    } else if (sortType === "mintStatus") {
      if (a.mintStatus === "upcoming" || a.mintStatus === "active") {
        if (b.mintStatus === "upcoming" || b.mintStatus === "active") {
          return 0;
        } else {
          return -1;
        }
      } else if (b.mintStatus === "upcoming" || b.mintStatus === "active") {
        return 1;
      } else {
        return a._createdAt - b._createdAt;
      }
    } else if (sortType === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortType === "_createdAt") {
      return b._createdAt - a._createdAt;
    } else {
      return b.mintactive - a.mintactive;
    }
  });
  const filteredCollections = allCollections.filter((collection: any) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
  
    return (
      collection.title.toLowerCase().includes(lowerCaseQuery) ||
      collection.description.toLowerCase().includes(lowerCaseQuery) 
    );
  });


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            All Collections
          </h2>
          <AllStats collections={collections?.result} />
        </div>
        <div className=" flex mx-auto items-center justify-center content-center text-centner">
          <LayloBar />
        </div>
        <div className="max-w-xl mx-auto p-10">
        <CribFinder searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="mx-10 md:mx-auto flex justify-center md:justify-between items-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white" onClick={() => setSortType("mintStatus")}>
              Status
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white" onClick={() => setSortType("title")}>
             A-Z
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white" onClick={() => setSortType("mintPrice")}>
              Price
            </button>
            </div>
        </div>
        <div className="mx-10 md:mx-auto grid gap-8  md:grid-cols-2">
          {filteredCollections.map((collection: any, i: any) => (
            <CollectionCard collection={collection} key={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'
import React from "react";
import Link from "next/link";
import { urlFor } from "lib/hooks/sanityImage";
import { ActiveIndicator, NonActiveIndicator, UpcomingIndicator } from "ui/Misc/Indicator";

function CollectionCard({collection, i}:any) {
  const description = collection?.description;
  const mintStatus = collection?.mintStatus as string;
  console.log(mintStatus, 'MS')
  const MintPrice = () => {
    return (
      <div className="flex relative" key={collection.mintPrice}>
        <p className="text-sm dark:bg-black p-2 rounded-lg items-center font-bold content-center">
          {collection.mintPrice}ETH
        </p>
      </div>
    );
  };

  return (
    <div key={collection._id}>
      <Link
        href={`collection/${collection?.slug?.current}`}
        className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          key={collection?.nftImage}
          className="object-cover aspect-square w-full rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={urlFor(collection?.nftImage).width(400).url()}
          alt=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            {collection?.title}
          </h5>
          <div className="flex mb-3 content-center items-center">
            <h6 className="hidden md:block text-sm uppercase text-gray-900 dark:text-white tracking-tight pr-5 items-center">
            </h6>
            {mintStatus == 'upcoming' && <UpcomingIndicator/>}{" "}
            {mintStatus == 'active' && <ActiveIndicator/>}{" "}
            {mintStatus == 'inactive' && <NonActiveIndicator/>}
            {mintStatus !== 'inactive' && <MintPrice />}

          </div>
          <p className="hidden lg:block mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="mx-auto">
            {collection?.tags?.map((tag: any) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 text-[8px] md:text-[10px] lg:text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;

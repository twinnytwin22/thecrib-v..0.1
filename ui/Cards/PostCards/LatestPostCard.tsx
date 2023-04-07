import Link from "next/link";
import React from "react";
import { SocialShareRow } from "ui/Misc/SocialShare";
import { UpcomingLayloBar } from "ui/Modals/UpcomingDropNotify";
import { ShareButton } from "ui/Buttons/ShareCardButton";
import { MintPrice } from "ui/Misc/MintPrice";

function LatestDropCard({ image, url, props }: any) {
  const chainSymbol = props?.chain == 'eth' ? 'ETH' : 'MATIC'
  const price = props?.mintPrice
  return (
    <>
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-md">
        <div className="p-5">
          <Link href={url}>
            <img src={image} className="w-72 rounded-2xl mb-4" />
          </Link>
          <div className="flex justify-between items-center">
            <Link href={url}>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
             View Drop
            </button></Link>

            <MintPrice chainSymbol={chainSymbol} mintPrice={price} />
            <ShareButton url={url} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestDropCard;

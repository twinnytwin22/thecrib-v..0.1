import Link from "next/link";
import React from "react";
import { SocialShareRow } from "ui/Misc/SocialShare";
import { UpcomingLayloBar } from "ui/Modals/UpcomingDropNotify";

function LatestDropCard({ image, url }: any) {
  return (
    <>
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-md">
        <div className="p-5">
          <Link href="/collection/twinny-always">
            <img src={image} className="w-72 rounded-2xl mb-4" />
          </Link>
          <div className="flex justify-between">
            <Link
              className="tex-lg font-extrabold"
              href="/collection/twinny-always"
            >
              View Drop
            </Link>
            <SocialShareRow />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestDropCard;

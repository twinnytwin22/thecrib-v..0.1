import Link from "next/link";
import React from "react";
import LatestPostCard from "ui/Cards/PostCards/LatestPostCard";
import UpcomingDropCard from "ui/Cards/PostCards/UpcomingDropCard";
import LaunchCountdown from "ui/Misc/Countdown/LaunchCountdown";
import { TARGET_DATE } from "ui/Misc/Countdown/targetDate";
export function LatestDrop() {
  const bgImage = "/assets/lving-small.png";
  return (
    <section
      className="bg-white bg-cover dark:bg-gray-900 max-w-sm md:max-w-6xl w-full my-8 shadow-md rounded-2xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-black bg-opacity-75 grid max-w-screen rounded-2xl"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center">
          <div className="p-0 md:pl-12 mr-auto place-self-center lg:col-span-6 justify-items-center items-center">
            <h4 className="max-w-2xl mb-4 text-md font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Latest Drop
            </h4>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              CRIB Music: Vol 1
            </h1>
            <a href="/collection/cribmusicv1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                Open Edition Music NFT by Twinny{" "}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200">
              Introducing the World to CRIB Music, house music with extra sauce,
              Twinny Twin present CRIB Music Vol 1. A compilation of his
              released works up to now! Kick your feet up, or not and dance!
              Enjoy.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex">
            <LatestPostCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export function UpcomingDrop() {
  const Image = "/assets/always_FINAL_cover.png";
  return (
    <section
      className="bg-white bg-cover dark:bg-gray-900 max-w-sm md:max-w-6xl w-full my-8 shadow-md rounded-2xl justify-items-center content-center justify-center mx-auto"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-black bg-opacity-75 grid max-w-screen rounded-2xl"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center">
          <div className="p-0 mr-auto place-self-center lg:col-span-6 justify-items-center items-center">
            <h4 className="max-w-2xl mb-4 text-md font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
             Upcoming Drop
            </h4>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Always - Single
            </h1>
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                feat. Jaii.Reynolds
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 ">
          Music NFT by Twinny Twin minting March 22nd, 2023
            </p>
            <div className="mx-auto justify-items-center content-center justify-center">
            <LaunchCountdown targetDate={TARGET_DATE}/></div>
            <Link href="https://raritysniper.com/nft-drops-calendar"><img className="w-8" src="/assets/logo1.png"/></Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex">
            <UpcomingDropCard image={Image} />
          </div>
        </div>
      </div>
    </section>
  );
}


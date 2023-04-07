import React from "react";
import LatestDropCard from "ui/Cards/PostCards/LatestPostCard";
import UpcomingDropCard from "ui/Cards/PostCards/UpcomingDropCard";
import { PoweredByDecent } from "ui/Decent/PoweredByDecent";
import LaunchCountdown from "ui/Misc/Countdown/LaunchCountdown";
import { TARGET_DATE } from "ui/Misc/Countdown/targetDate";
import { urlFor } from "lib/hooks/sanityImage";
export function LatestDrop({props}:any) {

  const Image = urlFor(props?.nftImage).width(600).url();
  const contractAddress = props?.contract
  const url = `http://thecrib.space/collection/${props?.slug.current}`

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
             Latest Drop
            </h4>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Always - Single
            </h1>
            <a href="/collection/twinny-always">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                feat. Jaii.Reynolds
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 ">
          Music NFT by Twinny Twin minting now.
            </p>
          <PoweredByDecent contractAddress={contractAddress}/>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex">
            <LatestDropCard url={url} image={Image} props={props}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UpcomingDrop({props}:any) {
  const Image = urlFor(props?.nftImage).width(600).url();
  const contractAddress = props?.contract
  const url = `http://thecrib.space/collection/${props?.slug.current}`
  const mintPrice = props?.mintPrice
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
            <a href="/collection/twinny-always">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
                feat. Jaii.Reynolds
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 ">
          Music NFT by Twinny Twin minting March 22nd, 2023
            </p>
            <div className="mx-auto justify-items-center content-center justify-center">
            <LaunchCountdown targetDate={TARGET_DATE}/></div>
          <PoweredByDecent contractAddress={contractAddress}/>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex">
            <UpcomingDropCard url={url} image={Image} props={props}/>
          </div>
        </div>
      </div>
    </section>
  );
}


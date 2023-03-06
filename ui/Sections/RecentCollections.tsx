"use client";
import React from "react";
import RecentCollectionCard from "ui/Cards/RecentCollectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecentCollections({ collections }: any) {
  const recentCollections = collections?.result.sort(
    (a: any, b: any) => b.mintactive - a.mintactive
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'center',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-900 max-w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Recent Drops
          </h2>
        </div>
        <div className="mx-auto">
        <div className="w-full mx-auto px-8 md:px-24 xl:px-4">
        <Slider {...settings}>
          {recentCollections.slice(0, 4).map((collection: any, i: any) => (
            <div key={i} className="md:px-5 mx-auto">
              <RecentCollectionCard collection={collection} />
            </div>
          ))}</Slider>
        </div>
      </div></div>
      <div className="flex justify-center items-center w-full mb-16 mt-6 mx-auto">
        <a
          href="/explore"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-red-100 bg-red-700 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-red-500 dark:focus:ring-gray-800"
        >
          View all collectibles
        </a>
      </div>
    </div>
  );
}

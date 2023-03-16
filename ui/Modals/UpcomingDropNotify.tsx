"use client";
import React, { useState } from "react";
import { UpcomingLayloCard } from "ui/Cards/UpcomingLayloCard";

export const UpcomingLayloBar = (image: any) => {
  const [isOpen, setIsOpen] = useState(false);
  function UpcomingLayloButton() {
    return (
      <div
        onClick={() => setIsOpen(true)}
     className="inline-flex w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
            Get Notified
            <svg className='w-6' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>       
 </div>
      
    );
  }

  return (
    <>
      <div className="">
        <UpcomingLayloButton />
        {isOpen && (
          <div
            className="z-50 flex m-4 mx-auto backdrop-blur-sm bg-white/30"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              display: "flex",
            }}
            tabIndex={-1}
          >
            <div
              className="flex flex-col p-4 rounded-2xl bg-black opacity-2"
              onClick={() => setIsOpen(false)}
            >
              <button onClick={() => setIsOpen(false)}>Close</button>
              <UpcomingLayloCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
};


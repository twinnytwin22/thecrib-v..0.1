import React from "react";
import PostCard from "ui/Cards/PostCards/PostCard";
import LatestPost from "ui/HeroBanners/LatestPostHero";

async function AllPosts() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <LatestPost />
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Collectible Posts
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
            <>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllPosts;

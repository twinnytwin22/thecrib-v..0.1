import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { urlFor } from "lib/hooks/sanityImage";
import VideoLightbox from "ui/Modals/VideoModal";

const CollectorsSection = ({ settings }: any) => {
  const set = settings.result[0];
  const image = urlFor(set?.secondSectionImmage).width(400).url();

  return (
    <section className="static bg-white dark:bg-gray-900 mt-8">
      <div className="static gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <>
          <figure className="relative w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <VideoLightbox image={image} />
            <div className="absolute px-4 text-lg text-white bottom-36 left-20">
              <PlayCircleIcon />
            </div>
          </figure>
        </>
        <>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-md font-extrabold text-gray-900 dark:text-white uppercase break-words text-justify leading-relaxed">
              {set.secondSectionHeaderText}
            </h2>
            <a
              href="#"
              className="inline-flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </>
      </div>
    </section>
  );
};
export default CollectorsSection;

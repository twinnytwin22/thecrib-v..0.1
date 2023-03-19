import Hero3DCribBanner from "ui/HeroBanners/Home3DCTABanner";
import RecentCollections from "ui/Sections/RecentCollections";
import { getAllCollections, getLatestDrop, getUpcomingDrop } from "lib/hooks/get-collection-data";
import { getSiteSettings } from "lib/hooks/pageSettings";
import TwinOnLenz from "ui/HeroBanners/TwinOnLenz";
import Twinny from "ui/Cards/Twinny";
import LayloSection from "ui/Sections/LayloSection";
import WelcomeMarquee from "ui/Marquees/WelcomeMarquee";
import RMInfo from "ui/HeroBanners/RoadMapInfo";
import { LatestDrop, UpcomingDrop } from "ui/HeroBanners/DropHeros";

async function Home() {
  const collections = await getAllCollections();
  const homeSettings = await getSiteSettings();
  const upComingProps = await getUpcomingDrop()
  const latestDropProps = await getLatestDrop()

  return (
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
      <Hero3DCribBanner settings={homeSettings} />
      <div className="overflow-hidden w-full opacity-10">
        <WelcomeMarquee />
      </div>
      <Twinny />
      {upComingProps?.result?.contract ? <UpcomingDrop props={upComingProps?.result}/> :
      <LatestDrop props={latestDropProps.result} />}
      
      <RecentCollections collections={collections} />
      <hr className=" max-w-7xl w-full dark:opacity-25 mb-10" />
      <RMInfo />
      <LayloSection />
      <TwinOnLenz />
      <div className="mb-20" />
    </div>
  );
}

export default Home;

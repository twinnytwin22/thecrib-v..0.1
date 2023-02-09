import CribLoader from "ui/Misc/CribLoader";

export default async function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="h-[100vh]"><CribLoader/></div>
  }
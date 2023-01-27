import CollectionCard from "../Cards/CollectionCard";
import AllStats from "../Misc/AllStats";
import CribFinder from "../Misc/CribFinder"

  
  export default function AllCollections(collections: any) {

    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">All Collections</h2>
                <AllStats collections={collections.collections.result}/>
            </div> 
            <div className="max-w-xl mx-auto p-10">
            <CribFinder/>
            </div>
            <div className="mx-10 md:mx-auto grid gap-8 grid-cols-2">
             {collections.collections.result.map((collection: any) => (
                   <CollectionCard collections={collection}/>
             ))}
              
             
            </div>  
        </div>
      </section>
    );
  };
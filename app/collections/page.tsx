// pages/index.js
import { getAllCollections } from "../../lib/hooks/get-collection-data";
import AllCollections from "../../ui/Sections/AllCollections";
import EmailSignUp from "../../ui/Sections/EmailSignUp";


export const dynamic= 'force-dynamic'

async function AllCollectionsPage() {
  const collections = await getAllCollections()

  return (
    <>

<div className="flex min-h-screen flex-col items-center bg-white dark:bg-gray-900">
<AllCollections collections={collections}/>
<EmailSignUp/>
    </div>

    </>
  );
}


export default AllCollectionsPage;


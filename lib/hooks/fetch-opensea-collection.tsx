


export async function fetchCollectionOS(currentSlug: any) { 
    const OSoptions = {method: 'GET', headers: {'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY }};
    await currentSlug
    fetch(`https://api.opensea.io/api/v1/collection/${currentSlug}`, OSoptions as any)   
    }
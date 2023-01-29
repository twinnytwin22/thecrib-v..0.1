




export async function batchQuery(contracts: any) {
    const promiseArray = contracts.map(async (contract: any) => {
        try {
            const result = await contract.query();
            return result;
        } catch (error) {
            console.log(`Error querying contract: ${error}`);
        }
    });

    const results = await Promise.all(promiseArray);
    return results;
}

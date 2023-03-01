import { getAllContracts } from "../hooks/get-collection-data";

const ethApiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID;
export const getRequestOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const fetchCollectors = async (addresses: { contract: any }[]) => {
  const promises = addresses.map(({ contract }) =>
    fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${ethApiKey}/getOwnersForCollection?contractAddress=${contract}&withTokenBalances=true`,
      getRequestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        return {
          contract,
          collectors: data?.ownerAddresses.map((collector: any) => ({
            ...collector,
            balance: collector.tokenBalances.reduce(
              (total: any, { balance }: any) => total + balance,
              0
            ),
          })),
          allAddresses: data?.ownerAddresses.map((collector: any) => ({
            collector,
          })),
        };
      })
  );

  return Promise.all(promises);
};

export const allCollectors = async () => {
  const getAddresses = await getAllContracts();
  const res = await getAddresses.result;
  try {
    const results = await fetchCollectors(res);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

allCollectors();

import React, { useState } from 'react';
import { urlFor } from 'lib/hooks/sanityImage';
import {
 usePrepareContractWrite,
 useContractWrite,
 useWaitForTransaction,
 useAccount,
 useConnect,
 useDisconnect
} from 'wagmi'

const CollectionMinter = (collection: any) => {
    const currentCollection = collection.collection
    const image = urlFor(currentCollection?.nftImage).width(600).url()
    const contractAddress = currentCollection.contract
    const [mintAmount, setMintAmount] = useState(1);
    const { address } = useAccount();
    const isConnected = !!address;    
    const price = currentCollection.mintPrice
    const sanityAbi = currentCollection.abiURL
    console.log(sanityAbi, 'abi', price, 'price')
    const mintStatus = currentCollection?.mintactive as boolean
    if (window) {
    console.log(window, 'window eth')}
    async function getABI() {
    const res = await fetch(sanityAbi);
    return res.json()}

async function MintNFT() {
 const abi = await getABI()
 const {
 config,
 error: prepareError,
 isError: isPrepareError,
 } = usePrepareContractWrite({
 address: contractAddress,
 abi: abi.abi,
 functionName: 'mint',
 })
 const { data, error, isError, write } = useContractWrite(config)

 const { isLoading, isSuccess } = useWaitForTransaction({
 hash: data?.hash,
 })

 return (
 <div>
 <button disabled={!write || isLoading} onClick={() => write?.()}>
 {isLoading ? 'Minting...' : 'Mint'}
 </button>
 {isSuccess && (
 <div>
 Successfully minted your NFT!
 <div>
 <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
 </div>
 </div>
 )}
 {(isPrepareError || isError) && (
 <div>Error: {(prepareError || error)?.message}</div>
 )}
 </div>
 )
}
}

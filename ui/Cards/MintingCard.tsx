'use client'
import { useState, } from 'react';
import { ethers, BigNumber } from 'ethers';
import { useAccount } from 'wagmi';
import { urlFor } from 'lib/hooks/sanityImage';
import { ActiveIndicator, NonActiveIndicator } from 'ui/Misc/Indicator';
import { useSession } from "next-auth/react"
import CrossMint from 'ui/Buttons/CrossMint';
import { IPFSRenderer } from 'ui/Misc/IPFSRenderer';
import collection from 'studio/schemas/collections/collection';
import { toast } from 'react-toastify'
import { ConnectToMint } from 'ui/Buttons/ConnectToMint';



function CollectionMinterCard(data: any) {
    const currentCollection = data?.collection
   ////  const image = urlFor(currentCollection?.nftImage).width(600).url()
   //// const bgImage = urlFor(currentCollection?.nftImage).url()
    const contractAddress = '0x148280a1395af6F430248c2E4B8063c69B7cA23E' as string
    const [mintAmount, setMintAmount] = useState(1);
    const { data: session, status } = useSession()
    const { address } = useAccount();
    const isConnected = !!address;    
    const price = 0.06
    const sanityAbi = currentCollection?.abiURL
    const mintStatus = true as boolean
    async function getABI() {
    const res = await fetch(sanityAbi);
    return res.json()}
    


        
    async function handleMint() {
        if(isConnected) {
            const abi = await getABI()
            const provider = new ethers.providers.Web3Provider(window.ethereum as any);
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
                contractAddress,
                abi.abi,
                signer
            );
            try {
                const response = await contractInstance.publicPurchase(address?.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((price * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
                toast("Not enough ETH! Please try again");

                
            }
        }
    }

    async function handleClaim() {
        if(isConnected) {
            const abi = await getABI()
            const provider = new ethers.providers.Web3Provider(window.ethereum as any)
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
                contractAddress,
                abi.abi,
                signer
            );
            try {
                const response = await contractInstance.twinesisPurchase(address?.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.0 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log(address)
                toast("Not enough ETH! Please try again");

            }
        }
    }

   
    const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1)
};
const handleIncrement = () => {
    if (mintAmount >= 100) return;
    setMintAmount(mintAmount + 1);
};

return (
    <div className='max-w-md p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="flex flex-col  justify-center gap-5 mx-auto">
           
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                  <img className="rounded-2xl w-20 aspect-square object-fit" alt={'NFT Image'} src="/assets/twinnygem.jpeg"/>
                 </div>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold text-black dark:text-white text-center uppercase'>{currentCollection ? collection.title : "Twinny Gems"}
                    </h1>
                    <p className="text-center mt-5">10,789/100,000 Minted</p>
                    </div>
                   </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-red-300 h-2.5 rounded-full" style={{width: '10.7%'}}></div>
            </div>
    {status === "authenticated" && mintStatus ? (
        <>
          <div className='flex flex-row items-center justify-center items-center space-between'>
                       
                              

                            </div>
        <div className='flex flex-row justify-center justify-start'>
                            <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                onClick={handleDecrement}>-</button>
                            <input className=' w-lg h-10 text-center font-bold'
                            readOnly
                                type="number" value={mintAmount} />
                            <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                onClick={handleIncrement}>+</button>

<button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    onClick={currentCollection?.title && handleMint}>MINT</button>

                        </div>
                      </>         
    ) : (
        <div className='flex content-center items-center justify-center pt-3' >
    {mintStatus}
   <ConnectToMint/>
        </div>
    )}
    {currentCollection?.title == "Twinesis" ?
<CrossMint price={price}/> : "" }
   </div>
</div>

 


);

    };

    export default CollectionMinterCard;



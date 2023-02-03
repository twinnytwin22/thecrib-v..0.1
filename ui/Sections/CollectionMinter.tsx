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



function CollectionMinter(data: any) {
    const currentCollection = data.collection
    const image = urlFor(currentCollection?.nftImage).width(600).url()
    const bgImage = urlFor(currentCollection?.nftImage).url()
    const contractAddress = currentCollection.contract
    const [mintAmount, setMintAmount] = useState(1);
    const { data: session, status } = useSession()
    const { address } = useAccount();
    const isConnected = !!address;    
    const price = currentCollection.mintPrice
    const sanityAbi = currentCollection.abiURL
    const mintStatus = currentCollection?.mintactive as boolean
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

    async function handleTwinesisMint() { 
        try {
        if (isConnected) {
        const abi = await getABI()
        const provider = new ethers.providers.Web3Provider(window.ethereum  as any)
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(
            contractAddress,
            abi.abi,
            signer
        );
        let tx
        
        if (mintAmount == 1) {
            tx = await contractInstance.mintTwin({
                value: mintAmount
            })
        } else if (mintAmount > 1) {
            tx = await contractInstance.mintTwins(mintAmount, {
                 value: ethers.utils.parseEther((price * mintAmount).toString()),
            })
        }
        const receipt = await tx.wait();
        if (receipt.status === 1) {
            console.log("Twinesis minted! https://etherscan.com/tx/" + tx.hash);
          }
          else {
            toast("Please update your balance and try again");
        }
      }
    } catch (error) {
        console.log(error);
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
    

    <div className='bg-cover w-full max-w-screen mx-auto justify-items-center content-center' style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', }}>
    <div className='bg-black bg-opacity-75 grid max-w-screen px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:gap-8 md:gap-8 lg:grid-cols-12 justify-items-center content-center' style={{ backdropFilter: 'blur(8px)',}}>
    <div className="mx-auto place-self-center place-items-center md:mx-auto md:col-span-12 sm:col-span-12 lg:col-span-6 h-96">
      {currentCollection.slug.current != "thecribvx" ? (
          <div className='w-72 md:w-96 mt-10 md:mt-0 p-4 md:p-4 lg:p-0'>
             <IPFSRenderer data={data}/>
           </div>
          ) : ( 
            <div className='w-72 md:w-96 mt-20 md:mt-0'>
                <img className="rounded-2xl" alt={'NFT Image'} src={image}/>
             </div>
             )}
        </div>
        <div className="flex flex-col lg:mt-0 md:col-span-12 sm:col-span-12 lg:col-span-6 justify-center gap-5 mx-auto">
            
            <h1 className='text-5xl font-bold text-white text-center uppercase' 
            >{currentCollection.title}
            </h1>
            <div className='flex h-5 justify-center'><h6 className='text-sm mb-2 uppercase text-white tracking-tight pr-5'> Mint Status:</h6>{mintStatus && ActiveIndicator()} {!mintStatus && NonActiveIndicator()}</div>

    
    {status === "authenticated" && mintStatus ? (
    
        <><div className='flex flex-row justify-center justify-start'>
                            <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                onClick={handleDecrement}>-</button>
                            <input className=' w-lg h-10 text-center font-bold'
                                readOnly

                                type="number" value={mintAmount} />
                            <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                onClick={handleIncrement}>+</button>



                        </div><div className='flex flex-row items-center justify-center items-center space-between'>
                                <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    onClick={currentCollection.title == "Twinesis" ? handleTwinesisMint : handleMint}>MINT</button>
                                <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"

                                    onClick={handleClaim}>CLAIM</button>

                            </div></>         
    ) : (
        <div className='flex content-center items-center justify-center pt-10' >
    {mintStatus ? <p className='text-white'>Please sign-in to collect</p> : ""}
        </div>
    )}
    {currentCollection.title == "Twinesis" ?
<CrossMint price={price}/> : "" }
   </div>
</div>
</div>

 


);

    };

    export default CollectionMinter;

    

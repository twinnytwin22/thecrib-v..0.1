'use client'
import { useState, } from 'react';
import { ethers, BigNumber } from 'ethers';
import { useAccount } from 'wagmi';
import { ConnectToMint } from '../Buttons/ConnectToMint';
import { urlFor } from 'lib/hooks/sanityImage';
import { ActiveIndicator, NonActiveIndicator } from 'ui/Misc/Indicator';

const CollectionMinter = (collection: any) => {
    const currentCollection = collection.collection
    const image = urlFor(currentCollection?.nftImage).width(200).url()
    const contractAddress = currentCollection.contract
    const [mintAmount, setMintAmount] = useState(1);
    const { address } = useAccount();
    const isConnected = !!address;    
    const price = currentCollection.mintPrice
    const sanityAbi = currentCollection.abiURL
    console.log(sanityAbi, 'abi', price, 'price')
    const mintStatus = currentCollection?.mintactive as boolean
   
    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum as any);
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
                contractAddress,
                sanityAbi.abi,
                signer
            );
            try {
                const response = await contractInstance.publicPurchase(address?.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((price * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    async function handleClaim() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum as any)
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
                contractAddress,
                sanityAbi.abi,
                signer
            );
            try {
                const response = await contractInstance.twinesisPurchase(address?.toString(), BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.0 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err, 'You are not eligible for free claim')
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
    <>

    <div className='bg-[url(/assets/newbgdark.png)] bg-cover w-screen mx-auto backdrop-blur-lg' >
    <div className='grid max-w-screen px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:gap-8 md:gap-8 lg:grid-cols-12 ' >
    <div className="mx-auto place-self-center md:mx-auto md:col-span-12 sm:col-span-12 lg:col-span-6 h-96 rounded-2xl">
        <img className="w-96 h-auto rounded-2xl lg:mx-20 md:mx-20 sm:mx-auto " alt={'NFT Image'} src={image}  />

         
        </div>
        <div className="flex flex-col lg:mt-0 md:col-span-12 sm:col-span-12 lg:col-span-6 justify-center gap-5 mx-auto">
            
            <h1 className='text-5xl font-bold text-white text-center uppercase' 
            >{currentCollection.title}
            </h1>
            <div className='flex h-5 justify-center'><h6 className='text-sm mb-2 uppercase text-white tracking-tight pr-5'> Mint Status:</h6>{mintStatus && ActiveIndicator()} {!mintStatus && NonActiveIndicator()}</div>

   
    {isConnected && mintStatus ? (
    
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
                                    onClick={handleMint}>MINT</button>
                                <button className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"

                                    onClick={handleClaim}>CLAIM</button>

                            </div></>
                    
                   
      
    ) : (
        <div className='flex content-center items-center justify-center pt-10' >
    {mintStatus && ConnectToMint()}
        </div>
    )}

   </div>
</div>
</div>

  </>


);

    };

    export default CollectionMinter;



'use client'
import { useEffect, useState } from "react";
import { useContractReads, erc721ABI } from "wagmi";

const twinesisContract = {
    address: '0x148280a1395af6F430248c2E4B8063c69B7cA23E', /// TWINESIS
    abi: erc721ABI,
}
const superKikuContract = {
    address: '0xbAf0007B7129ed3E151DBa406340841b5a95216d', /// SUPER KIKU
    abi: erc721ABI,
}
const resurgenceContract = {
    address: '0xA33EdB3810ee9faE9077dAf9AcDD834E1860a72C', /// RESURGENCE
    abi: erc721ABI,
}


export function tokenGates(walletAddress: any) {
  console.log("tg:", walletAddress)
    const { data } = useContractReads({
        contracts: [
            {
             ...twinesisContract,
              functionName: 'balanceOf',
              args: walletAddress
            },
            {
             ...superKikuContract,
              functionName: 'balanceOf',
              args: walletAddress,
            },
            {
            ...resurgenceContract,
                functionName: 'balanceOf',
                args: walletAddress,
              },
          ],
        })
      
  
    const [hasAccess, setHasAccess] = useState(false);
    useEffect(() => {
        if (data) {
           console.log(data)
        }
    }, [data])
  
    return (
      <div>
        {hasAccess ? (
          <p>You own a JellyBot! Well done!</p>
        ) : (
          <p>You don&apos;t have access yet :(</p>
        )}
      </div>
    );
  };
  

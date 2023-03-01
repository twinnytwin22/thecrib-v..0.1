"use client";

import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { useAccount } from "wagmi";
import { useState } from "react";

const [mintAmount, setMintAmount] = useState(1);

export async function handleMint(contractAddress: any, abi: any, price: any) {
  const { address } = useAccount();
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    try {
      const response = await contractInstance.publicPurchase(
        address?.toString(),
        BigNumber.from(mintAmount),
        {
          value: ethers.utils.parseEther((price * mintAmount).toString()),
        }
      );
      console.log("response: ", response);
    } catch (err) {
      console.log("error: ", err);
    }
  }
}

export async function handleClaim(contractAddress: any, abi: any) {
  const { address } = useAccount();

  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    try {
      const response = await contractInstance.twinesisPurchase(
        address?.toString(),
        BigNumber.from(mintAmount),
        {
          value: ethers.utils.parseEther((0.0 * mintAmount).toString()),
        }
      );
      console.log("response: ", response);
    } catch (err) {
      console.log("error: ", err);
    }
  }
}

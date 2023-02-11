"use client"
import { MediaRenderer } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export const IPFSRenderer = ({data, image}: any) => {

    const activeChainId = ChainId.Mainnet;

    /// This comes from the OpensSea fetch
    const ipfsProps = data[0].metadata
    const animationURL = ipfsProps?.animation_url as string

    /// Image from Sanity for Fallback until IPFS loads
    const nftImage = image
    
    return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <MediaRenderer style={{}} requireInteraction={true} poster={nftImage}
        src={animationURL ? animationURL : nftImage}/>
    </ThirdwebProvider>
  );
};


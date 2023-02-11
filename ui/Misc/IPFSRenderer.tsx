"use client"
import { MediaRenderer } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";





export const IPFSRenderer = ({data, image}: any) => {
  console.log(data,'collection', image, 'image')
    const activeChainId = ChainId.Mumbai;
    const ipfsProps = data[0].metadata
    const animationURL = ipfsProps?.animation_url as string
    const nftImage = image
    
    return (
    

    <ThirdwebProvider desiredChainId={activeChainId}>
    <MediaRenderer style={{}} requireInteraction={true} poster={nftImage}
      src={animationURL ? animationURL : nftImage}
      />
    </ThirdwebProvider>

  );
};


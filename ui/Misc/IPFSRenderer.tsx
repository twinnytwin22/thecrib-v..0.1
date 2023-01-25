"use client"
import { MediaRenderer } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";





export const IPFSRenderer = (data: any) => {
    const activeChainId = ChainId.Mumbai;
    const ipfsProps = data?.data.data[0].metadata
    const animationURL = ipfsProps.animation_url as string
    
    return (
    

    <ThirdwebProvider desiredChainId={activeChainId}>
    <MediaRenderer
      src={`${animationURL}`}
      alt="A mp4 video"
    />
    </ThirdwebProvider>

  );
};


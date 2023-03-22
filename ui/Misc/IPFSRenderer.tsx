"use client";
import { MediaRenderer, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export const IPFSRenderer = ({ data, image }: any) => {
  const activeChainId = ChainId.Mainnet;

  /// This comes from the OpensSea fetch
  const ipfsProps = data[0].metadata;
  const animationURL = ipfsProps?.animation_url as string;

  /// Image from Sanity for Fallback until IPFS loads
  const nftImage = image;

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      {!animationURL ? (
        <MediaRenderer
          requireInteraction={true}
          poster={nftImage}
          src={nftImage}
        />
      ) : (
        <ThirdwebNftMedia
          metadata={ipfsProps}
          controls={true}
          requireInteraction
        />
      )}
    </ThirdwebProvider>
  );
};

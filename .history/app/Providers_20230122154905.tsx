'use client'
import '@rainbow-me/rainbowkit/styles.css';
import * as React from "react"
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  walletConnectWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  ledgerWallet
} from '@rainbow-me/rainbowkit/wallets';

import {
  darkTheme, RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { configureChains,  WagmiConfig, createClient
} from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import dynamic from 'next/dynamic';
import { SessionProvider } from 'next-auth/react';
import { GetSiweMessageOptions, RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { unstable_getServerSession } from "next-auth/next"
import { getAuthOptions } from "pages/api/auth/[...nextauth]";
import { Session } from 'next-auth';
import { GetServerSideProps } from 'next';
import { RainbowKitProviderProps } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitProvider';

const ThemeProvider = dynamic(
  () => {
    return import('next-themes').then(mod => mod.ThemeProvider);
  },
  { ssr: false, }
);



const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID! as string
const { chains, provider } = configureChains(
  [mainnet, polygon],
  [
    alchemyProvider({ apiKey }),
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'CRIB Recommended',
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: 'THE CRIB' }),
      ledgerWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Whats up fam?. Sign in to the CRIB!',
});

const Providers = ({
    children,
  }: {
    
    children: React.ReactNode
  }) => {
  return ( 
  <SessionProvider >
  <WagmiConfig client={wagmiClient}>
  <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
       <RainbowKitProvider chains={chains} 
         theme={darkTheme()}>        
         <ThemeProvider enableSystem={true} attribute="class">
          {children}
         </ThemeProvider>
       </RainbowKitProvider>
       </RainbowKitSiweNextAuthProvider>

  </WagmiConfig> 
   </SessionProvider>
  )
}

export default Providers



export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await unstable_getServerSession(req, res, getAuthOptions(req)),
    },
  };
};

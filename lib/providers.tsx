'use client'
import '@rainbow-me/rainbowkit/styles.css';
import 'styles/globals.css';
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
import { getServerSession } from "next-auth/next"
import { getAuthOptions } from "pages/api/auth/[...nextauth]";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const ThemeProvider = dynamic(
  () => {
    return import('next-themes').then(mod => mod.ThemeProvider);
  },
  { ssr: false, }
);

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID! as string
const { chains, provider, webSocketProvider, } = configureChains(
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
  provider,
  webSocketProvider,
})

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Whats up fam?. Sign in to the CRIB!',
});



export const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return ( 
  <SessionProvider>
  <WagmiConfig client={wagmiClient}>
  
  <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >         
        

       <RainbowKitProvider chains={chains} 
         theme={darkTheme()}>    
         <ThemeProvider enableSystem={true} attribute="class">
          {children}
         
         </ThemeProvider> 
         <ToastContainer/> 
        
       </RainbowKitProvider>
       </RainbowKitSiweNextAuthProvider> 

  </WagmiConfig> 
   </SessionProvider>
  )
}

export default Providers


export async function getServerSideProps(c: any) {
  const session = await getServerSession(c.req, c.res, getAuthOptions(c.req))
    return session 
  };


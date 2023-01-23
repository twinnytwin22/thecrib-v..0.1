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
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';

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

const Providers = ({
    children,
    session
  }: {
    session: any
    children: React.ReactNode
  }) => {
  return (
  <WagmiConfig client={wagmiClient}>
    <SessionProvider session={session} refetchInterval={0}>
       <RainbowKitProvider chains={chains} 
         theme={darkTheme()}>        
         <ThemeProvider enableSystem={true} attribute="class">
          {children}
         </ThemeProvider>
       </RainbowKitProvider>
    </SessionProvider>
  </WagmiConfig>
  )
}

export default Providers
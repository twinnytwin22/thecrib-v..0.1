'use client'
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react'
import {
  getDefaultWallets,
  darkTheme, RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { configureChains,  WagmiConfig, createClient
} from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import dynamic from 'next/dynamic';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
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

const { connectors } = getDefaultWallets({
  appName: 'The Crib',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

const Providers = ({
    children,
    session,
  }: {
    children: React.ReactNode
    session: SessionProvider
  }) => {
  return (

    <WagmiConfig client={wagmiClient}>
        <SessionProvider refetchInterval={0} session={session}>
      <RainbowKitProvider chains={chains}
       theme={darkTheme()}>        
        <ThemeProvider enableSystem={true} attribute="class" >
          {children}
        </ThemeProvider>
      </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default Providers
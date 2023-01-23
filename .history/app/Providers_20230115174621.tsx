'use client'
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react'
import {
  getDefaultWallets,
  darkTheme, RainbowKitProvider, createAuthenticationAdapter,   RainbowKitAuthenticationProvider,


} from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';

import { configureChains,  WagmiConfig, createClient
} from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import dynamic from 'next/dynamic';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce');
    return await response.text();
  },

  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    });
  },

  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },

  verify: async ({ message, signature }) => {
    const verifyRes = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature }),
    });

    return Boolean(verifyRes.ok);
  },

  signOut: async () => {
    await fetch('/api/logout');
  },
});
  /* See above... */

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
    session
  }: {
    session: any
    children: React.ReactNode
  }) => {
  return (

    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={session}>
        <RainbowKitAuthenticationProvider
           adapter={authenticationAdapter}
           status={'loading'}>

      <RainbowKitProvider chains={chains}
       theme={darkTheme()}>        
        <ThemeProvider enableSystem={true} attribute="class" >
          {children}
        </ThemeProvider>
      </RainbowKitProvider>
      </RainbowKitAuthenticationProvider>

      </SessionProvider>
    </WagmiConfig>
  )
}

export default Providers
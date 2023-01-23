import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useEffect } from 'react';

const WalletConnectedMiddleware = (props: { children: any; wallet: any; }) => {
  const { children, wallet } = props;

  useEffect(() => {
    if (!wallet.connected) {
      // redirect to login page or display a message
      // indicating the user needs to connect their wallet
    }
  }, [wallet]);

  return children;
}

export default WalletConnectedMiddleware;



export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}


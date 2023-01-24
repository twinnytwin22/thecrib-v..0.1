import * as React from "react"
import '../styles/globals.css';
import Providers from './providers';
import { Footer } from '../ui/Navigation/Footer';
import NewNavBar from '../ui/Navigation/NewNavBar';

export declare type ISODateString = string;

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html>
    <head>
   
    </head>
      
  <body>
    <div className="flex min-h-screen max-w-screen w-full  bg-white dark:bg-gray-900">
        <Providers >
          <NewNavBar/> 
            {children}      
          <Footer/>
      </Providers>
    </div>
  </body>
</html>
  )
}

export default RootLayout
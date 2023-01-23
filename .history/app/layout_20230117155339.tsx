'use client'
import '../styles/globals.css';
import Providers from './Providers';
import { Footer } from '../ui/Navigation/Footer';
import NewNavBar from '../ui/Navigation/NewNavBar';


function RootLayout({
  children,

}: {
  children: React.ReactNode

}) {
  return (
    <html>
    <head>
   
    </head>
      
  <body>
    <div className="flex min-h-screen max-w-screen w-full  bg-white dark:bg-gray-900">
        <Providers session>
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
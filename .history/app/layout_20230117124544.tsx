import '../styles/globals.css';
import Providers from './Providers';
import { Footer } from '../ui/Navigation/Footer';
import NewNavBar from '../ui/Navigation/NewNavBar';


function RootLayout({
  children,
  session,

}: {
  children: React.ReactNode
  session: any

}) {
  return (
    <html>
    <head>
   
    </head>
      
  <body>
    <div className="flex min-h-screen max-w-screen w-full  bg-white dark:bg-gray-900">
        <Providers session={session}>
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
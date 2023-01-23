
import NewNavBar from 'ui/Navigation/NewNavBar';

interface Props {
  children: React.ReactNode;
}

function HolderDashboard({ children }: Props) {
  return (
    <html>
    <head>
   
    </head>
      
  <body>
    <div className="flex min-h-screen max-w-screen w-full  bg-white dark:bg-gray-900">

            {children}      

    </div>
  </body>
</html>
  )
}

export default HolderDashboard
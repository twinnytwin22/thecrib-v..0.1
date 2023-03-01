import * as React from "react";
import "styles/globals.css";
import Providers from "lib/providers";
import { Footer } from "ui/Navigation/Footer";
import NewNavBar from "ui/Navigation/NewNavBar";
import MobileMenu from "ui/Navigation/MobileMenu";
import { Suspense } from "react";
import CribLoader from "ui/Misc/CribLoader";

export const dynamicParams = true; // true | false,

export declare type ISODateString = string;

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <div className="bg-white dark:bg-gray-900">
          <Providers>
            <NewNavBar />
            <Suspense fallback={<CribLoader />}>{children}</Suspense>
            <Footer />
            <MobileMenu />
          </Providers>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;

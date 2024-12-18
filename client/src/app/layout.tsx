import "../styles/globals.scss";
import { Montserrat } from "next/font/google";

import ReduxProvider from "@/redux/Provider";
import UserProvider from "@/hooks/sessionProvider";

import React from "react";

import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "AutoFinderX | Find your own vehicle",
  description: "AutoFinderX | Find your own vehicle",
};

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>
        <ReduxProvider>
          <UserProvider>
            {children}
            <Footer />
          </UserProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

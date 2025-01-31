import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs"

import "./globals.css";
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});


const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Cybera",
  description: "A community-driven platform for asking and answering programming question.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider
        appearance={{
          elements:{
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover:text-primary-500"
          },
        }}
      >
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn("bg-white dark-black",
              inter.variable,
              SpaceGrotesk.variable
            )}
          >
              {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}

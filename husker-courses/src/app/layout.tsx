"use client";

import "../styles/globals.css";
import { ReactNode } from "react";
import { api } from "../utils/api";
import { ClientProvider } from "../server/api/trpc-next-13";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <ClientProvider>
        <body
          className={`font-sans text-gray-800 dark:bg-black dark:text-gray-200`}
        >
          {children}
        </body>
      </ClientProvider>
    </html>
  );
}

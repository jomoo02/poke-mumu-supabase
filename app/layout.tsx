import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

import { SWRProvider } from './context/swr';
import Header from './shared/ui/header';

const suit = localFont({
  src: '../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  variable: '--font-suit',
  weight: '100 900',
});

const suite = localFont({
  src: '../public/fonts/SUITE-Variable.woff2',
  display: 'swap',
  variable: '--font-suite',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Poke MuMu',
  description: 'Poke MuMu',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${suite.variable} ${suit.variable} antialiased`}
    >
      <body className={`relative bg-background min-h-svh flex flex-col`}>
        <SWRProvider>
          <Header />
          <div id="ttt" className="sticky top-14 z-60" />
          <main className="flex flex-1 flex-col font-suit">{children}</main>
          <div>{modal}</div>
        </SWRProvider>
        <footer className="border-t border-gray-300 p-4 bg-neutral-50"></footer>
      </body>
    </html>
  );
}

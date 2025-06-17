import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import AppHeader from './components/app-header';
import { SWRProvider } from './components/provider/swr';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Poké MuMu',
  description: 'Poké MuMu',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} `}>
        <SWRProvider>
          <AppHeader />
          <div id="modal-root" />
          {modal}
          {/* <main className="py-6 xl:max-w-screen-xl mx-auto">{children}</main> */}
          <main className="my-6 mx-auto">{children}</main>
        </SWRProvider>
        <footer className="border-t border-gray-300 p-4 bg-neutral-50"></footer>
      </body>
    </html>
  );
}

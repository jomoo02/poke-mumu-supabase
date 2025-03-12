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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        <SWRProvider>
          <AppHeader />
          <main className="py-6 min-h-svh px-4 xl:max-w-screen-xl mx-auto">
            {children}
          </main>
        </SWRProvider>
      </body>
    </html>
  );
}

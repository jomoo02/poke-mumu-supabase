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

const suit = localFont({
  src: '../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  variable: '--font-suit',
  weight: '100 900',
});
//   src: [
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-1Thin.ttf',
//       weight: '100',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-2ExtraLight.ttf',
//       weight: '200',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-3Light.ttf',
//       weight: '300',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-4Regular.ttf',
//       weight: '400',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-5Medium.ttf',
//       weight: '500',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-6Semibold.ttf',
//       weight: '600',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-7Bold.ttf',
//       weight: '700',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-8ExtraBold.ttf',
//       weight: '800',
//     },
//     {
//       path: '../public/fonts/Paperlogy-1.000/Paperlogy-9Black.ttf',
//       weight: '900',
//     },
//   ],
//   variable: '--font-paperlogy',
//   weight: '100 900',
// });

// const nanumsquareneo = localFont({
//   src: '../public/fonts/NanumSquareNeo-Variable.ttf',
//   display: 'swap',
//   variable: '--font-nanumsquareneo',
//   weight: '100 900',
// });

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
      <body
        className={`${suit.className} relative bg-background min-h-svh flex flex-col`}
      >
        <SWRProvider>
          <AppHeader />

          <div id="ttt" className="sticky top-14 z-60" />
          <main className="flex flex-1 flex-col">{children}</main>
          <div>{modal}</div>
        </SWRProvider>
        <footer className="border-t border-gray-300 p-4 bg-neutral-50"></footer>
      </body>
    </html>
  );
}

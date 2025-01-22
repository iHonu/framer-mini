import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nevel - Wild Dutch Beers',
  description: 'Dutch Beers Brewery',
};

const archivo = Archivo({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-archivo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-archivo bg-stone-200 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}

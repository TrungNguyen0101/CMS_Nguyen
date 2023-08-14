import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({
  variable: '--font-inter',
  preload: false,
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}

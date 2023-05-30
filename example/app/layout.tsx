import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React-inline-autocomplete',
  description: 'Generated by create next app with typescript enabled',
}

export default function RootLayout({children,}: {children: React.ReactNode}) : JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from "next"

import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Telegrsm Mini App",
  description: "A simple Telegram mini app using Next.js and Prisma",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
        {children}
      </body>
    </html>
  )
}

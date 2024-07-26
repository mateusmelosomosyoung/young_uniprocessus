import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Uniprocessus",
  description: "Uniprocessus",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager-script"
          src="/googleTagManager.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

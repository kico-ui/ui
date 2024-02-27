import React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { fontMono } from "@/lib/fonts"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ThemeProvider from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Kico Ui",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Build complex components easy and responsive. Just copy code and paste in your app.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontMono.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="bg-background relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

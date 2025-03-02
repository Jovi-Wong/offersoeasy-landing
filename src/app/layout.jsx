import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PopupWidget } from "@/components/PopupWidget"

export const metadata = {
  title: "面试龙 - 使用文档",
  description: "面试龙软件使用文档",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="w-full h-full">{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}

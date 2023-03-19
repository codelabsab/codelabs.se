import './globals.css'
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export const metadata = {
  title: 'Code Labs',
  description: 'Vi är Code Labs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
    <Navbar />
      {children}
    <Footer />
      </body>
    </html>
  )
}

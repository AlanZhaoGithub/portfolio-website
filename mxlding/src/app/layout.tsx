import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mxlding',
  description: 'Portfolio website for Mxlding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}

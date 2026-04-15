import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blessed To Bless Foundation | Empowering Lives, Inspiring Hope, Creating Change',
  description: 'Bless2Bless Foundation is a nonprofit organisation transforming communities through child welfare, education, mentorship, and faith-driven service. Founded in 2023.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

import './globals.css'
import MaritimePlatform from './components/MaritimePlatform'

export const metadata = {
  title: 'TESSERA - Maritime Logistics System',
  description: 'Maritime Intelligence Platform for Real-time Vessel Monitoring',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MaritimePlatform>{children}</MaritimePlatform>
      </body>
    </html>
  )
}
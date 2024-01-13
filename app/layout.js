
import './globals.css'



export const metadata = {
  title: 'هیئت خدام امام رضا',
  description: 'هیئت خدام امام رضا',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body >{children}</body>
    </html>
  )
}

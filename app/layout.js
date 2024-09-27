import './globals.css'

export const metadata = {
  title: 'PARIKALPANAIO - Web Development Services',
  description: 'Professional web development services including WordPress, static, and dynamic websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
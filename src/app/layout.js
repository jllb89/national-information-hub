import "./globals.css"

export const metadata = {
  title: "National Information Hub",
  description: "National Information Hub",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

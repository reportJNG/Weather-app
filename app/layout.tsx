import "./globals.css";
import { ThemeProvider } from "./Components/Themeprovider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

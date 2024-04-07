import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/style.scss";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import ReactQueryProvider from "@/query/reactQuerySetup";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster visibleToasts={1} position="top-right"   />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { QuickSandFont } from "@/Utils/Fonts";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import Arrow from "@/Components/Footer/Arrow";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={QuickSandFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Arrow />
      </body>
    </html>
  );
}

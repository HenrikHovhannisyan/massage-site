import { Lora, Lato, Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import { info_data } from "@/constants/info-data";

const fontLora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fontLato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fontRoboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: info_data.name,
  description: info_data.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontLato.className} ${fontLora.className} ${fontRoboto.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

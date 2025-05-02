import { Lora, Lato, Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

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
  subsets: ["Roboto"],
});

export const metadata = {
  title: "Website Massage",
  description: "9864 Website for Sheepish Serenity Massage",
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

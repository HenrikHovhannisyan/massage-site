import { Lora, Lato } from "next/font/google";
import "./globals.css";

const fontLora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fontLato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Website Massage",
  description: "9864 Website for Sheepish Serenity Massage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontLato.className} ${fontLora.className}`}>
        {children}
      </body>
    </html>
  );
}

import "./style.css";
import "./responsive.css";

export const metadata = {
  title: "Services",
  description: "9864 Website for Sheepish Serenity Massage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

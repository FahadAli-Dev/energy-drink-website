import "../style/globals.css";
import { Antonio } from "next/font/google";
import localFont from "next/font/local";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-antonio",
});

const proximaNova_regular = localFont({
  src: "../fonts/ProximaNova-Regular.otf",
  variable: "--font-proxima",
});

export const metadata = {
  title: {
    default: "Energy Drink",
    template: "%s | Energy Drink",
  },

  description:
    "Energy Drink a bold, refreshing boost for your mind and body. Packed with caffeine, vitamins, and natural ingredients to keep you energized, focused, and ready to conquer your day. Perfect for students, gamers, athletes, and professionals looking for instant energy with a modern taste.",
  authors: [{ name: "Fahad Ali", url: "mailto:fa6084904@gmail.com" }],
  keywords: [
    "energy drink",
    "best energy drink",
    "healthy energy drink",
    "sugar free energy drink",
    "energy drink for gamers",
    "energy drink for students",
    "natural energy booster",
    "sports energy drink",
    "caffeine energy drink",
    "focus and energy drink",
    "modern energy drink brand",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${proximaNova_regular.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}

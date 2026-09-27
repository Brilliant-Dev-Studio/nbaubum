import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N Bau Bum Myanmar | Travel deeper. Connect closer.",
  description:
    "Discover Myanmar through local eyes. Explore small group journeys, tailor-made adventures and Yangon walking tours with N Bau Bum Myanmar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

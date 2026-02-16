import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Western PA Solar Installation",
  description: "Free solar assessment for Western Pennsylvania homeowners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

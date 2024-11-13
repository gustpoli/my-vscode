import type { Metadata } from "next";
import "./globals.css";
import VSCode from "@/components/VSCode";

export const metadata: Metadata = {
  title: "My VSCode - gustpoli",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" min-darkest-dracula">
      <body>
        <div className=" flex justify-center items-center w-screen h-screen bg-bgGradient">
          <VSCode>
            {children}
          </VSCode>
        </div>
      </body>
    </html>
  );
}

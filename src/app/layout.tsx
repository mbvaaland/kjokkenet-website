// src/app/layout.tsx
import "../../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Kjøkkenet Kafe & Delikatesse",
  description: "Velkommen til Kjøkkenet Kafe & Delikatesse",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="bg-white text-gray-800">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
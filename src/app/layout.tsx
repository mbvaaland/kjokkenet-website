import '../../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kjøkkenet Cafe & Delikatesse</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
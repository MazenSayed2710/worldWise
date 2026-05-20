import "./globals.css";

export const metadata = {
  title: "WorldWise",
  description: "Keep track of your adventures around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full text-gray-300 p-5">
      <body className="h-full">
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Fungora",
  description: "Natural Mushroom Extract",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= 'antialiased'
      >
        {children}
      </body>
    </html>
  );
}

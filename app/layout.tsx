import CompaniesIcon from "../components/Layout/companines";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/header";
import "rc-dropdown/assets/index.css";
import "../styles/globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <CompaniesIcon />
        <Footer />
      </body>
    </html>
  );
}

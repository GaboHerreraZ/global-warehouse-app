import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const languages = ["en", "es"];

//PENDIENTE SEO

/**
 * 
 * export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL("https://www.dominicanmasterblue.com"),
    title: {
      default: "Dominican MasterBlue",
      template: "%s | Dominican MasterBlue",
    },
    description: t("description"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}
 * 
 * 
 */

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  console.log("lng", lng);

  return (
    <html lang={lng}>
      <body className={inter.className}>
        <Navbar lng={lng} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

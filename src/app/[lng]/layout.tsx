// import { Inter } from "next/font/google";
import { getTranslation } from "@/i18n";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

const languages = ["en", "es"];

//PENDIENTE SEO

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL("https://www.globalwarehousecenter.com"),
    title: {
      default: "Global Warehouse Center",
      template: "%s | Global Warehouse Center",
    },
    description: t("description"),
    verification: {
      google:
        "",
    },
  };
}
 

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
  return (
    <html lang={lng}>
      <body>
        <Navbar lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}

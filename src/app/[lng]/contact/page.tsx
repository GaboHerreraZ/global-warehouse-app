import { BannerContact, ContactForm } from "@/components";
import { getTranslation } from "@/i18n";
import { Metadata } from "next";

const getContactTranslations = async (lng: string) => {
  const { t } = await getTranslation(lng, "contact");

  return {
    companyName: t("companyName"),
    contactPerson: t("contactPerson"),
    email: t("email"),
    phoneNumber: t("phoneNumber"),
    message: t("message"),
    contactUs: t("contactUs"),
    errorCompanyName: t("errorCompanyName"),
    errorContactPerson: t("errorContactPerson"),
    errorEmail: t("errorEmail"),
    errorPhoneNumber: t("errorPhoneNumber"),
    errorMessage: t("errorMessage")
  };
};

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL(
      `https://www.globalwarehousecenter.com/${lng}/what-we-do`
    ),
    title: t("titleContact") + " | Global Warehouse Center",
    description: t("descriptionContactUs"),
    verification: {
      google: "",
    },
  };
}

export default async function ContactPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const translations = await getContactTranslations(lng);
  return (
    <>
      <BannerContact lng={lng} />
      <ContactForm translations={translations} />
    </>
  );
}

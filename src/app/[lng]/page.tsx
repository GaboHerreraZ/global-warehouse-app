import { AboutUs, Banner, Message, OurValues } from "@/components";
import { getTranslation } from "@/i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await getTranslation(lng, "home");

  console.log(t("home"));

  return (
    <>
      <Banner lng={lng}/>
      <Message lng={lng}/>
      <AboutUs lng={lng}/>
      <OurValues lng={lng}/>
    </>
  );
}

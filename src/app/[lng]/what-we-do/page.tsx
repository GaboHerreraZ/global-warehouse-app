import { BannerWhatWeDo, WhatWeDo } from "@/components";
import { getTranslation } from "@/i18n";
import { Metadata } from "next";


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
    title: t("titleWhatWeDo") + " | Global Warehouse Center",
    description: t("descriptionWhatWeDo"),
    verification: {
      google:
        "",
    },
  };
}

export default function WhatWeDoPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      <BannerWhatWeDo lng={lng} />
      <WhatWeDo lng={lng} />
    </>
  );
}

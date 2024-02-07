import { getTranslation } from "@/i18n";
import Image from "next/image";

import packageA from "../../../public/png/package.png";

export const AboutUs = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-2  px-5 md:px-20 mt-10">
      <article className="px-10 md:px-20 py-10 bg-main ">
        <h1 className="text-white text-3xl md:text-5xl py-2">
          {t("aboutTitle")}
        </h1>
        <p className="text-justify ">{t("aboutParagraph")}</p>
      </article>
      <div className="  flex h-[200px] md:h-full w-full  ">
        <Image src={packageA} alt="Package" width={900} />
      </div>
    </section>
  );
};

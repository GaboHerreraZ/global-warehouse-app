import { getTranslation } from "@/i18n";
import Image from "next/image";

import packageA from "../../../public/png/package.png";

export const AboutUs = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 font-acumin  gap-7 lg:grid-cols-2  px-5 md:px-20 mt-10">
      <article className="px-10 md:px-20 py-5 bg-main ">
        <h1 className="text-white font-extrabold text-3xl md:text-5xl py-2">
          {t("aboutTitle")}
        </h1>
        <p className="text-justify text-xl ">{t("aboutParagraph")}</p>
      </article>
      <div className="relative h-[350px] lg:h-full ">
        <Image
          src={packageA}
          alt="Package"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

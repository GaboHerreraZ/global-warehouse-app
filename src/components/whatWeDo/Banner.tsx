import { getTranslation } from "@/i18n";
import Image from "next/image";

import whatWeDo from "../../../public/png/what-we-do.png";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "whatWeDo");

  return (
    <section className="px-5 md:px-20 ">
      <div className="grid grid-cols-1  lg:grid-cols-2 justify-center items-center px-2  mt-[70px] md:px-5  bg-secondary ">
        <h1 className="text-white text-5xl justify-center text-center md:text-start  lg:justify-self-end md:text-6xl py-10 px-0 md:px-24 font-bold">
          {t("title1")} <br />
          {t("title2")} <br />
          {t("title3")}
        </h1>
        <div className="flex scale-110 justify-center lg:justify-start">
          <div>
            <Image
              src={whatWeDo}
              alt="what we do image"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

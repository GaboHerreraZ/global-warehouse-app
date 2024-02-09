import { getTranslation } from "@/i18n";
import Image from "next/image";

import whatWeDo from "../../../public/png/what-we-do.png";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "whatWeDo");

  return (
    <section className="px-5 md:px-20 ">
      <div className="flex flex-col md:flex-row   justify-evenly items-center w-full px-2  mt-[30px] md:px-5  bg-secondary ">
        <h1 className="text-white text-acumin text-5xl justify-center text-center md:text-start  lg:justify-self-end  lg:text-7xl py-10 px-0  ">
          {t("title1")} <br />
          {t("title2")} <br />
          {t("title3")}
        </h1>
        <div className="flex scale-110 ">
          <div className="pl-5">
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

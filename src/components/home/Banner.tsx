import { getTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

import home from "../../../public/png/home.png";
import homeTitle from "../../../public/png/title-home.png";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="flex flex-col items-center lg:flex-row  justify-center bg-background md:py-5 lg:py-5 px-2 md:px-24 lg:px-32">
      <div className="w-full lg:w-1/2 mt-2 ">
        {/*   <div className="bg-white px-10 py-2 text-xl md:text-2xl  rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] w-full md:w-[80%] ">
          <h1 className="text-others">{t("bannerTitle1")}</h1>
          <h1 className="text-secondary text-end ">{t("bannerTitle2")}</h1>
        </div> */}
        <div className=" w-full xl:w-1/2 h-28  lg:mb-2 ">
          <Image
            src={homeTitle}
            alt="titulo home"
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <ul className="list-disc px-10 text-others font-acumin text-xl  mb-10">
          <li>{t("bannerList1")}</li>
          <li>{t("bannerList2")}</li>
          <li>{t("bannerList3")}</li>
          <li>{t("bannerList4")}</li>
        </ul>
        <Link
          className="bg-secondary px-5 ml-5 font-acumin text-white rounded-xl py-2 "
          href="/contact"
        >
          {t("bannerLink")}
        </Link>
      </div>
      <div className="p-4 md:mt-0 w-full lg:w-1/2 flex justify-center">
        <Image
          className=""
          src={home}
          alt="home image"
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};

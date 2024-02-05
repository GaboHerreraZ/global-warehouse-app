import { getTranslation } from "@/i18n";
import Link from "next/link";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2   bg-background py-20 px-2 md:px-32">
      <div className="w-full">
        <div className="bg-white w-full px-10 py-2 text-3xl md:text-4xl rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] md:w-[70%]">
          <h1 className="text-others">{t("bannerTitle1")}</h1>
          <h1 className="text-secondary text-end">{t("bannerTitle2")}</h1>
        </div>
        <ul className="list-disc px-10 text-others text-sm mt-5 mb-10">
          <li>{t("bannerList1")}</li>
          <li>{t("bannerList2")}</li>
          <li>{t("bannerList3")}</li>
          <li>{t("bannerList4")}</li>
        </ul>
        <Link
          className="bg-secondary px-5 ml-5 text-white rounded-xl py-2 "
          href="/contact"
        >
          {t("bannerLink")}
        </Link>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

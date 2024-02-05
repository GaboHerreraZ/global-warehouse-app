import { getTranslation } from "@/i18n";
import Link from "next/link";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="flex   bg-background py-20 px-32">
      <div className="w-1/2">
        <div className="bg-white px-10 py-2 text-5xl rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] w-[70%]">
          <h1 className="text-others">{t('bannerTitle1')}</h1>
          <h1 className="text-secondary text-end">{t('bannerTitle2')}</h1>
        </div>
        <ul className="list-disc px-10 text-others text-sm mt-5 mb-10">
          <li>{t('bannerList1')}</li>
          <li>{t('bannerList2')}</li>
          <li>{t('bannerList3')}</li>
          <li>{t('bannerList4')}</li>
        </ul>
        <Link
          className="bg-secondary px-5 ml-5 text-white rounded-xl py-2 "
          href="/contact"
        >
          {t('bannerLink')}
        </Link>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

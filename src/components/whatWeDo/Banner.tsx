import { getTranslation } from "@/i18n";

export const Banner = async ({lng}: {lng:string}) => {
  const { t } = await getTranslation(lng, "whatWeDo");

  return (
    <section className="px-40">
      <div className="flex mt-10 px-10  bg-secondary ">
        <h1 className="text-white text-6xl py-10 px-20 font-bold">
          {t('title1')} <br />
          {t('title2')} <br />
          {t('title3')}
        </h1>
      </div>
    </section>
  );
};

import { getTranslation } from "@/i18n";

export const AboutUs = async ({lng}: {lng: string}) => {

  const { t } = await getTranslation(lng, "home");


  return (
    <section className="flex px-20 mt-10">
      <article className="w-1/2 px-20 py-10 bg-main ">
        <h1 className="text-white text-6xl py-2">{t('aboutTitle')}</h1>
        <p className="text-justify ">
          {t('aboutParagraph')}
        </p>
      </article>
      <div></div>
    </section>
  );
};

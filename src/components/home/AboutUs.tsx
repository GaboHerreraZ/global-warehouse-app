import { getTranslation } from "@/i18n";

export const AboutUs = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 mt-10">
      <article className="px-10 md:px-20 py-10 bg-main ">
        <h1 className="text-white text-3xl md:text-5xl py-2">
          {t("aboutTitle")}
        </h1>
        <p className="text-justify ">{t("aboutParagraph")}</p>
      </article>
      <div></div>
    </section>
  );
};

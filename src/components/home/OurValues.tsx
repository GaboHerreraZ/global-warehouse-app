import { getTranslation } from "@/i18n";

export const OurValues = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <>
      <section className="px-5 md:px-20">
        <article className="grid grid-cols-1 lg:grid-cols-2 md:flex-row mt-8 bg-secondary px-10">
          <div className="py-8  md:px-10 ">
            <h1 className="text-main text-3xl md:text-5xl">
              {t("ourValuesTitle1")}
            </h1>
            <p className="text-white text-justify mt-2">
              {t("ourValuesParagraph1")}
            </p>
          </div>
          <div className="py-8 md:px-10">
            <h1 className="text-main text-3xl md:text-5xl">
              {t("ourValuesTitle2")}
            </h1>
            <p className="text-white text-justify mt-2">
              {t("ourValuesParagraph2")}
            </p>
          </div>
        </article>

        <article className="grid grid-cols-1  lg:grid-cols-3 mt-10 gap-10 ">
          <div className="bg-background px-5 md:px-10 py-10">
            <h1 className="text-secondary text-2xl md:text-4xl font-bold">
              {t("ourValuesTitle3")}
            </h1>
            <p className="text-justify mt-5">{t("ourValuesParagraph3")}</p>
          </div>
          <div className="bg-others px-5 md:px-10 py-10">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              {t("ourValuesTitle4")}
            </h1>
            <p className="text-justify text-white mt-5">
              {t("ourValuesParagraph4")}
            </p>
          </div>
          <div className="bg-background px-5 md:px-10 py-10">
            <h1 className="text-secondary text-2xl md:text-4xl font-bold">
              {t("ourValuesTitle5")}
            </h1>
            <p className="text-justify mt-5">{t("ourValuesParagraph5")}</p>
          </div>
        </article>
      </section>
      <article className="bg-main text-default text-center mt-10 py-4 text-lg md:text-2xl">
        <h1>{t("ourValuesTitle6")}</h1>
        <h1>{t("ourValuesTitle7")}</h1>
      </article>
    </>
  );
};

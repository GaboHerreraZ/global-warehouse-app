import { getTranslation } from "@/i18n";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "whatWeDo");

  return (
    <section className="px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2  px-2  mt-10 md:px-10  bg-secondary ">
        <h1 className="text-white text-3xl md:text-5xl py-10 px-0 md:px-20 font-bold">
          {t("title1")} <br />
          {t("title2")} <br />
          {t("title3")}
        </h1>
      </div>
    </section>
  );
};

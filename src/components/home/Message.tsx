import { getTranslation } from "@/i18n";

export const Message = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <article className="bg-others text-white text-center mt-10 py-2 text-lg md:text-2xl">
      <h1>&ldquo;{t("messageTitle1")}</h1>
      <h1>
        {t("messageTitle2")}
        <span className="font-bold"> {t("messageTitle3")}</span>&rdquo;
      </h1>
    </article>
  );
};

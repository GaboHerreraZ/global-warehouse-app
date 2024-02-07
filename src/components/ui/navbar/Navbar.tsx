import { getTranslation } from "@/i18n";
import Link from "next/link";

export const Navbar = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "navbar");

  return (
    <nav className="bg-main text-white">
      <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-10 px-32 py-2 text-sm font-bold">
        <li>
          <Link href={`/${lng}`}>{t("home")}</Link>
        </li>
        <li>
          <Link href={`/${lng}/what-we-do`}>{t("whatWeDo")}</Link>
        </li>
        <li>
          <Link href={`/${lng}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
};

import { getTranslation } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/png/logo.png";

export const Navbar = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "navbar");

  return (
    <nav className="bg-main text-white font-gotham">
      <div className="bg-white px-32 py-2">
        <Image src={logo} alt="logo global warehouse" height={70} />
      </div>
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

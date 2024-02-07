import Image from "next/image";
import { getTranslation } from "@/i18n";

import contact from "../../../public/png/contact.png";
import email from "../../../public/png/email.png";
import phone from "../../../public/png/phone.png";
import location from "../../../public/png/location.png";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "contact");
  return (
    <section className="px-5 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-10  bg-main ">
        <h1 className="text-white text-3xl   md:text-5xl py-10 px-2 md:px-20 font-bold">
          {t("contactTitle1")} <br />
          {t("contactTitle2")} <br />
          {t("contactTitle3")}
        </h1>
        <div className="flex  justify-center lg:justify-start">
          <Image
            src={contact}
            alt="Contact image"
            className=""
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-2  lg:grid-cols-3 items-center   mt-10">
        <div className="flex flex-col lg:flex-row lg:justify-center  items-center ">
          <Image src={location} alt="Location global warehouse" />
          <label className="text-others ml-4 font-bold">
            6758 N.W. 72 AV, Miami-Florida, 3316
          </label>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center    items-center mt-5 md:mt-0">
          <Image src={email} alt="Location global warehouse" />
          <label className="text-others ml-4 font-bold">
            miami@globalwarehousecenter.com
          </label>
        </div>

        <div className="flex flex-col lg:flex-row   lg:justify-center  items-center mt-5 md:mt-0">
          <Image src={phone} alt="Location global warehouse" />
          <label className="text-others ml-4 font-bold">+1-786-658-1314</label>
        </div>
      </div>
    </section>
  );
};

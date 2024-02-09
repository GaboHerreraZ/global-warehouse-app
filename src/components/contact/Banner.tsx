import Image from "next/image";
import { getTranslation } from "@/i18n";

import contact from "../../../public/png/contact.png";
import email from "../../../public/png/email.png";
import phone from "../../../public/png/phone.png";
import location from "../../../public/png/location.png";

export const Banner = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "contact");
  return (
    <section className="px-5 md:px-20 font-acumin">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-10  bg-main "> */}
      <div className="flex flex-col md:flex-row   justify-evenly items-center w-full px-2  mt-[30px] md:px-5  bg-main ">
        <h1 className="text-white  text-acumin tracking-tighter  justify-center text-center md:text-start  lg:justify-self-end  text-4xl lg:text-6xl py-10 px-0 leading-snug ">
          {t("contactTitle1")} <br />
          {t("contactTitle2")} <br />
          {t("contactTitle3")}
        </h1>

        <div className="flex  h-[300px] scale-110 ">
          <div className="relative h-full w-[300px] ">
            <Image
              className="absolute -top-1"
              src={contact}
              alt="what we do image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-evenly  gap-2  lg:grid-cols-3 items-center   mt-10">
        <div className="flex flex-col lg:flex-row lg:justify-center  items-center ">
          <Image src={location} alt="Location global warehouse" width={30} />
          <label className="text-others  ml-4 tracking-tighter  text-lg font-bold">
            6758 N.W. 72 AV, Miami-Florida, 3316
          </label>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center    items-center mt-5 md:mt-0">
          <Image src={email} alt="Location global warehouse" width={30} />
          <label className="text-others ml-4 tracking-tighter font-bold text-lg">
            miami@globalwarehousecenter.com
          </label>
        </div>

        <div className="flex flex-col lg:flex-row   lg:justify-center  items-center mt-5 md:mt-0">
          <Image src={phone} alt="Location global warehouse" width={30} />
          <label className="text-others ml-4 tracking-tighter  font-bold text-lg">
            +1-786-658-1314
          </label>
        </div>
      </div>
    </section>
  );
};

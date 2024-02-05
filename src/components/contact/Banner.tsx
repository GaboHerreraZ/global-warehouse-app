import Image from "next/image";
import location from "../../../public/svg/location.svg";
import mail from "../../../public/svg/mail.svg";
import phone from "../../../public/svg/phone.svg";
import { getTranslation } from "@/i18n";

export const Banner = async ({ lng }: { lng: string }) => {
  const {t} = await getTranslation(lng, "contact");
  return (
    <section className="px-40">
      <div className="flex mt-10 px-10  bg-main ">
        <h1 className="text-white text-6xl py-10 px-20 font-bold">
          {t('contactTitle1')} <br />
          {t('contactTitle2')} <br />
          {t('contactTitle3')}
        </h1>
      </div>

      <div className="flex justify-between mt-10">
        <div className="flex justify-center items-center">
          <div className="bg-secondary rounded-full h-12 w-12">
            <Image src={location} alt="Location global warehouse" />
          </div>
          <label className="text-others ml-4 font-bold">
            6758 N.W. 72 AV, Miami-Florida, 3316
          </label>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-secondary rounded-full h-12 w-12 flex justify-center">
            <Image src={mail} alt="Location global warehouse" />
          </div>
          <label className="text-others ml-4 font-bold">
            miami@globalwarehousecenter.com
          </label>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-secondary rounded-full h-12 w-12 flex justify-center">
            <Image src={phone} alt="Location global warehouse" />
          </div>
          <label className="text-others ml-4 font-bold">+1-786-658-1314</label>
        </div>
      </div>
    </section>
  );
};

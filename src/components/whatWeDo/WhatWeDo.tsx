import { getTranslation } from "@/i18n";
import Image from "next/image";

import airplane from "../../../public/png/airplane.png";

export const WhatWeDo = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "whatWeDo");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 font-acumin">
        <section className="grid gap-20 px-5 md:px-20 mt-10">
          <article className="">
            <h1 className="text-3xl text-main font-bold">{t("airShipment")}</h1>
            <p className="text-default text-justify my-5">
              {t("airShipmentParagraph")}
            </p>
            <ul className="list-disc px-5">
              <li>{t("airShipmentList1")}</li>
              <li>{t("airShipmentList2")}</li>
              <li>{t("airShipmentList3")}</li>
              <li>{t("airShipmentList4")}</li>
              <li>{t("airShipmentList5")}</li>
              <li>{t("airShipmentList6")}</li>
              <li>{t("airShipmentList7")}</li>
              <li>{t("airShipmentList8")}</li>
              <li>{t("airShipmentList9")}</li>
            </ul>
          </article>

          <article className="">
            <h1 className="text-3xl text-main font-bold">
              {t("additionalServices")}
            </h1>
            <ul className="list-disc px-5 mt-5">
              <li>{t("additionalServicesList1")}</li>
              <li>{t("additionalServicesList2")}</li>
              <li>{t("additionalServicesList3")}</li>
              <li>{t("additionalServicesList4")}</li>
              <li>{t("additionalServicesList5")}</li>
              <li>{t("additionalServicesList6")}</li>
              <li>{t("additionalServicesList7")}</li>
              <li>{t("additionalServicesList8")}</li>
              <li>{t("additionalServicesList9")}</li>
              <li>{t("additionalServicesList10")}</li>
              <li>{t("additionalServicesList11")}</li>
            </ul>
          </article>
          <article>
            <h1 className="text-3xl text-main font-bold">
              {t("maritimeService")}
            </h1>
            <ul className="list-disc px-5 mt-5">
              <li>{t("maritimeServiceList1")}</li>
              <li>{t("maritimeServiceList2")}</li>
              <li>{t("maritimeServiceList3")}</li>
              <li>{t("maritimeServiceList4")}</li>
            </ul>
          </article>
        </section>
        <section className="flex flex-col  px-5 md:px-20 mt-10">
          <article className="">
            <h1 className="text-main text-3xl font-bold">{t("airport")}</h1>
            <div className="mt-5">
              <h1>{t("airportOption1")}</h1>
              <p>{t("airportOption1Paragraph")}</p>
            </div>
            <div className="mt-5">
              <h1>{t("airportOption2")}</h1>
              <p>{t("airportOption2Paragraph")}</p>
            </div>
            <div className="mt-5">
              <h1>{t("airportOption3")}</h1>
              <p>{t("airportOption3Paragraph")}</p>
            </div>
          </article>
          <div className="relative  h-[350px] md:h-full  w-full">
            <Image
              src={airplane}
              alt="Package"
              className=" py-20"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </section>
      </div>
      <div className="px-5 md:px-20 mt-10 font-acumin">
        <h1 className="text-secondary text-3xl font-bold">
          {t("globalWarehouseCenter")}
        </h1>
        <p className="my-5  text-justify">
          {t("globalWarehouseCenterParagraph")}
        </p>
      </div>
    </>
  );
};

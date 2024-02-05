import { getTranslation } from "@/i18n";

export const ContactForm = async ({ lng }: { lng: string }) => {

  const {t} = await getTranslation(lng, "contact");

  return (
    <section className="px-40 my-20">
      <form className="grid text-others font-bold text-xl w-full">
        <label className="py-2 ">
          {t('companyName')}
          <input className="border-b-2 w-1/2  ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <label className="py-2">
          {t('contactPerson')}
          <input className="border-b-2 w-1/2  ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <label className="py-2">
          {t('email')}
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>

        <label className="py-2">
          {t('phoneNumber')}
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>

        <label className="py-2">
          {t('message')}
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <button className="bg-secondary px-5 text-sm w-36 text-white rounded-xl py-2 mt-4">
          {t('contactUs')}
        </button>
      </form>
    </section>
  );
};

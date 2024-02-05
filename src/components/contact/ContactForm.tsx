export const ContactForm = () => {
  return (
    <section className="px-40 my-20">
      <form className="grid text-others font-bold text-xl w-full">
        <label className="py-2 ">
          Company Name:
          <input className="border-b-2 w-1/2  ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <label className="py-2">
          Contact person:
          <input className="border-b-2 w-1/2  ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <label className="py-2">
          Email Address:
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>

        <label className="py-2">
          Phone number (including country code):
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>

        <label className="py-2">
          Message:
          <input className="border-b-2 w-1/2   ml-2 focus:outline-none focus:border-b-2" />
        </label>
        <button className="bg-secondary px-5 text-sm w-36 text-white rounded-xl py-2 mt-4">
          Contact Us
        </button>
      </form>
    </section>
  );
};

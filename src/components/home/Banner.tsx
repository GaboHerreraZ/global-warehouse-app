import Link from "next/link";

export const Banner = () => {
  return (
    <section className="flex   bg-background py-20 px-32">
      <div className="w-1/2">
        <div className="bg-white px-10 py-2 text-5xl rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] w-[70%]">
          <h1 className="text-others">We can help you</h1>
          <h1 className="text-secondary text-end">grow your business</h1>
        </div>
        <ul className="list-disc px-10 text-others text-sm mt-5 mb-10">
          <li>Listening to your real needs</li>
          <li>Analyzing problems to provide optimal solutions</li>
          <li>
            Working diligently to automate and streamline your e-commerce import
            and logistics
          </li>
          <li>Allowing you to focus on your next step</li>
        </ul>
        <Link
          className="bg-secondary px-5 ml-5 text-white rounded-xl py-2 "
          href="/contact"
        >
          LETS TALK!
        </Link>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

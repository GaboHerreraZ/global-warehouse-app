import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex gap-20 justify-evenly font-bold text-default bg-background  text-xl p-10">
      <ul className=" ">
        <li className=" pb-5">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold py-5">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="font-bold py-5">
          <Link href="/what-we-do">What we do</Link>
        </li>
        <li className="font-bold py-5">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.0454563660364!2d-80.31690952355983!3d25.835047405568588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ba36220badd3%3A0xf36df1c0be999caa!2s6758%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033166%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1707064666562!5m2!1ses-419!2sco"
          width="500"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <address className="not-italic">
        <h1 className="mb-5">6758 N.W.72 AV, Miami - Florida, 3316</h1>
        <h1 className="mb-5">+1-786-658-1314</h1>
        <h1 className="mb-5">miami@globalwarehousecenter.com</h1>
      </address>
    </footer>
  );
};

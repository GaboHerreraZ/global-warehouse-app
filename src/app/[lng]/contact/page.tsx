import { BannerContact, ContactForm } from "@/components";

export default function ContactPage({params:{lng}}: {params: {lng: string}}) {
  return (
    <>
      <BannerContact lng={lng}/>
      <ContactForm lng={lng}/>
    </>
  );
}

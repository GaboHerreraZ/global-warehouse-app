import { AboutUs, Banner, Message, OurValues } from "@/components";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      {/* <Banner lng={lng} /> */}
      {/* <Message lng={lng} /> */}
      {/* <AboutUs lng={lng} /> */}
      {/* <OurValues lng={lng} /> */}
    </>
  );
}

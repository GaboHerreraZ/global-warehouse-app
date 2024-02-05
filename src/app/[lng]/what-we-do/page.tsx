import { BannerWhatWeDo, WhatWeDo } from "@/components";

  export default function WhatWeDoPage({params:{lng}}: {params: {lng: string}}) {
  return (
    <>
      <BannerWhatWeDo lng={lng}/>
      <WhatWeDo lng={lng}/>
    </>
  );
}

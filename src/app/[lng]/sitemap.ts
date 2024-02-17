// import ProductService from "@/service/productService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.globalwarehousecenter.com";

  const lng = ["en", "es"];
  const siteMaps = lng.map((lng) => [
    { url: `${baseUrl}/${lng}/`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/what-we-do`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/contact`, lastModified: new Date() }
  ]);


  return [
    { url: baseUrl, lastModified: new Date() },
    ...siteMaps[0],
    ...siteMaps[1]
  ];
}

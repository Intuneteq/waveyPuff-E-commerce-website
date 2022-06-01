import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m3958ulc",
  dataset: "production",
  apiVersion: "2022-05-26",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

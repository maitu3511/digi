import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import SiteApp from "../../SiteApp";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing & Web Development Services in Rajkot | DigiBasera" },
      {
        name: "description",
        content:
          "Explore DigiBasera's SEO, digital marketing, Google Ads, web development, social media marketing and Shopify services for businesses in Rajkot, Gujarat and India.",
      },
      {
        name: "keywords",
        content:
          "digital marketing services Rajkot, SEO services Rajkot, web development Rajkot, Google Ads agency Rajkot, social media marketing Rajkot, Shopify development Rajkot",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digibasera.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://digibasera.com/services" }],
  }),
  component: ServicesIndexRoute,
});

function ServicesIndexRoute() {
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-white" />}>
      <SiteApp initialPage="services" />
    </ClientOnly>
  );
}

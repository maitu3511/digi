import { createFileRoute, ClientOnly, notFound } from "@tanstack/react-router";
import SiteApp from "../../SiteApp";
import { getServiceRoute, getServiceCanonical } from "../../data/serviceRoutes";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceRoute(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    if (!service) return {};
    return {
      meta: [
        { title: service.title },
        { name: "description", content: service.description },
        { name: "keywords", content: service.keywords },
        { property: "og:type", content: "website" },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.description },
        { property: "og:url", content: getServiceCanonical(service.slug) },
      ],
      links: [{ rel: "canonical", href: getServiceCanonical(service.slug) }],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-white" />}>
      <SiteApp initialPage="services" initialCategorySlug={slug} serviceRouteSlug={slug} />
    </ClientOnly>
  );
}

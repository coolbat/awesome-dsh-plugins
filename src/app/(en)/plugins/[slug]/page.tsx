import LocalePluginDetailPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/plugins/[slug]/page";
import { getEvidenceRecords } from "@/lib/catalog";

export function generateStaticParams() {
  return getEvidenceRecords().map((plugin) => ({ slug: plugin.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateLocaleMetadata({
    params: params.then(({ slug }) => ({ locale: "en", slug })),
  });
}

export default function EnglishPluginDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return LocalePluginDetailPage({
    params: params.then(({ slug }) => ({ locale: "en", slug })),
  });
}

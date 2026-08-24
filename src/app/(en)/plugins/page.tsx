import PluginsPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/plugins/page";

const englishParams = Promise.resolve({ locale: "en" });

export function generateMetadata() {
  return generateLocaleMetadata({ params: englishParams });
}

export default function EnglishPluginsPage() {
  return PluginsPage({ params: englishParams });
}

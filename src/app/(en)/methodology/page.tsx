import MethodologyPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/methodology/page";

const englishParams = Promise.resolve({ locale: "en" });

export function generateMetadata() {
  return generateLocaleMetadata({ params: englishParams });
}

export default function EnglishMethodologyPage() {
  return MethodologyPage({ params: englishParams });
}

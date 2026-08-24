import LocaleHome, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/page";

const englishParams = Promise.resolve({ locale: "en" });

export function generateMetadata() {
  return generateLocaleMetadata({ params: englishParams });
}

export default function EnglishHome() {
  return LocaleHome({ params: englishParams });
}

import ReviewPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/review/page";

const englishParams = Promise.resolve({ locale: "en" });

export function generateMetadata() {
  return generateLocaleMetadata({ params: englishParams });
}

export default function EnglishReviewPage() {
  return ReviewPage({ params: englishParams });
}

import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";
import { HomeSection } from "@/components/sections/HomeSection";
import { Footer } from "@/components/layout/Footer";

export default async function HomePage({
  params
}: {
  params: { locale: Locale }
}) {
  const { t } = await createServerTranslator(params.locale, ['common', 'about']);

  return (
    <div>
      <div className="w-full">
        <HomeSection />
      </div>
      
    </div>
  );
}

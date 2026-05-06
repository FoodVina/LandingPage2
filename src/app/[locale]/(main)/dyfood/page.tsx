import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";
import { HomeSection } from "@/components/sections/HomeSection";
import { DyFoodSection } from "@/components/sections/DyFoodSection";

export default async function DyFoodPage({
  params
}: {
  params: { locale: Locale }
}) {
  const { t } = await createServerTranslator(params.locale, ['common', 'about']);

  return (
    <div>
      <div className="w-full">
        <DyFoodSection />
      </div>
    </div>
  );
}

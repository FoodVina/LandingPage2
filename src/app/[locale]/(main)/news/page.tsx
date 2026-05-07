import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";
import { NewsSection } from "@/components/sections/NewsSection";

export default async function NewsPage({
    params
}: {
    params: { locale: Locale }
}) {
    const { t } = await createServerTranslator(params.locale, ['common', 'about']);

    return (
        <div>
            <div className="w-full">
                <NewsSection />
            </div>
        </div>
    );
}

import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";
import { AboutSection } from "@/components/sections/AboutSection";

export default async function AboutPage({
    params
}: {
    params: { locale: Locale }
}) {
    const { t } = await createServerTranslator(params.locale, ['common', 'about']);

    return (
        <div>
            <div className="w-full">
                <AboutSection />
            </div>

        </div>
    );
}

import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function ContactPage({
    params
}: {
    params: { locale: Locale }
}) {
    const { t } = await createServerTranslator(params.locale, ['common', 'about']);

    return (
        <div>
            <div className="w-full">
                <ContactSection />
            </div>
        </div>
    );
}

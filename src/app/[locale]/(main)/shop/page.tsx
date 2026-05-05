import { createServerTranslator } from "@/i18n/serverUtils";
import { Locale } from "@/i18n/config";

export default async function ShopPage({
    params
}: {
    params: { locale: Locale }
}) {
    const { t } = await createServerTranslator(params.locale, ['common', 'ghop']);

    return (
        <div>
            <div className="container mx-auto px-4">
                This is shop page
                <p>{t("hello", "common")}</p>
                <p>{t("welcome", "common")}</p>
            </div>
        </div>
    );
}

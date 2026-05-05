// i18n/serverUtils.ts - TẠO FILE MỚI
import { getMessages } from "./getMessages";
import { Locale } from "./config";

// Types (copy từ I18nProvider.tsx)
type MessageValue = string | number | boolean;
type NestedMessages = {
    [key: string]: MessageValue | NestedMessages;
};

// Helper function để get nested value (similar to client)
function getNestedValue(obj: NestedMessages, path: string): string {
    const keys = path.split('.');
    let current: MessageValue | NestedMessages = obj;

    for (const key of keys) {
        if (typeof current === 'object' && current !== null && key in current) {
            current = current[key];
        } else {
            return path;
        }
    }

    return typeof current === 'string' ? current : String(current);
}

// SERVER TRANSLATION FUNCTION
export async function createServerTranslator(
    locale: Locale,
    namespaces: string[] = ['common']
) {
    const messages = await getMessages(locale, namespaces);

    // Server translation function (plain text only)
    const t = (key: string, namespace: string = 'common'): string => {
        const namespaceData = messages[namespace] as NestedMessages;
        if (!namespaceData) {
            console.warn(`Namespace '${namespace}' not found`);
            return key;
        }

        const rawText = getNestedValue(namespaceData, key);

        // Strip custom tags for server (no JSX support)
        return rawText.replace(/<\w+\s*\/>/g, ' ').replace(/\s+/g, ' ').trim();
    };

    // Server translation with JSX tags converted to text
    const tWithBreaks = (key: string, namespace: string = 'common'): string => {
        const namespaceData = messages[namespace] as NestedMessages;
        if (!namespaceData) {
            console.warn(`Namespace '${namespace}' not found`);
            return key;
        }

        const rawText = getNestedValue(namespaceData, key);

        // Convert custom tags to appropriate text
        return rawText
            .replace(/<desktopBr\s*\/>/g, '\n')
            .replace(/<mobileBr\s*\/>/g, '\n')
            .replace(/<space\s*\/>/g, ' ')
            .replace(/<dot\s*\/>/g, ' • ')
            .replace(/<arrow\s*\/>/g, ' → ')
            .replace(/<\w+\s*\/>/g, ' ') // Other unknown tags
            .replace(/\s+/g, ' ')
            .trim();
    };

    return { t, tWithBreaks, messages };
}

// FUNCTION FOR SINGLE TRANSLATIONS
export async function serverT(
    key: string,
    locale: Locale,
    namespace: string = 'common'
): Promise<string> {
    const { t } = await createServerTranslator(locale, [namespace]);
    return t(key, namespace);
}

// Translate client side usage:
// "use client";
// import { useT } from "@/i18n/I18nProvider";
// const t = useT();

// Translate client side usage:
// import { createServerTranslator } from "@/i18n/serverUtils";
// const { t } = await createServerTranslator(locale, ['common']);
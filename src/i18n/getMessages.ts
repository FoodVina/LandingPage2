import { Locale, defaultLocale, locales } from "./config";

// Types cho i18n messages
type MessageValue = string | number | boolean;
type NestedMessages = {
  [key: string]: MessageValue | NestedMessages;
};

type I18nMessages = Record<string, NestedMessages>;

export async function getMessages(
  locale: string, 
  namespaces: string[] = ['common']
): Promise<I18nMessages> {
  if (!locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  const messages: I18nMessages = {};
  
  // Load tất cả các namespace được yêu cầu
  for (const namespace of namespaces) {
    try {
      const mod = await import(`../locales/${locale}/${namespace}.json`);
      // Type assertion - chúng ta biết JSON file structure
      messages[namespace] = mod.default as NestedMessages;
    } catch (error) {
      console.warn(`Could not load namespace ${namespace} for locale ${locale}`);
      // Provide empty object as fallback
      messages[namespace] = {};
    }
  }
  
  return messages;
}
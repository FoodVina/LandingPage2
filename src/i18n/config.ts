//config.ts

export const locales = [
    "en",
    "vi",
    // "ja",
    // "ko"
] as const; // Thêm ngôn ngữ mới

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Optional: Thêm tên hiển thị cho các ngôn ngữ
export const localeNames = {
    en: "English",
    vi: "Tiếng Việt",
    // ja: "日本語",
    // ko: "한국어",
} as const;
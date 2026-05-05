// i18n/I18nProvider.tsx - THAY THẾ TOÀN BỘ FILE NÀY
/* eslint-disable react/display-name */
"use client";

import { createContext, useContext, ReactNode, JSX } from "react";

// Types cho i18n messages
type MessageValue = string | number | boolean;
type NestedMessages = {
  [key: string]: MessageValue | NestedMessages;
};

type I18nMessages = Record<string, NestedMessages>;

type I18nContextType = {
  locale: string;
  messages: I18nMessages;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: I18nMessages;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

// Add display name for ESLint
I18nProvider.displayName = 'I18nProvider';

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

// Helper function get nested value
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

// CUSTOM TAGS - Add custom tags and their JSX implementations here
const customTags: Record<string, () => JSX.Element> = {
  desktopBr: function DesktopBr() {
    return <br className="hidden md:block" />;
  },
  mobileBr: function MobileBr() {
    return <br className="block md:hidden" />;
  },
  space: function Space() {
    return <span className="w-2 inline-block" />;
  },
  dot: function Dot() {
    return <span className="mx-1">•</span>;
  },
  arrow: function Arrow() {
    return <span className="mx-2">→</span>;
  },
};

// Function to parse text with custom tags into ReactNode array
function parseCustomTags(text: string): ReactNode[] {
  const tagPattern = /<(\w+)\s*\/>/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = tagPattern.exec(text)) !== null) {
    // Add text before tag
    if (match.index > lastIndex) {
      const textPart = text.slice(lastIndex, match.index);
      if (textPart) {
        parts.push(textPart);
      }
    }

    // Add custom tag JSX
    const tagName = match[1];
    if (customTags[tagName]) {
      parts.push(
        <span key={`${tagName}-${match.index}`}>
          {customTags[tagName]()}
        </span>
      );
    } else {
      // Unknown tag, keep as text
      parts.push(match[0]);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

// Translation hooks for translation with JSX support
export function useT() {
  const { messages } = useI18n();

  return (key: string, namespace: string = 'common'): ReactNode => {
    const namespaceData = messages[namespace];
    if (!namespaceData) {
      console.warn(`Namespace '${namespace}' not found`);
      return key;
    }

    const rawText = getNestedValue(namespaceData, key);

    // Check if text contains custom tags
    if (rawText.includes('<') && rawText.includes('/>')) {
      const parsed = parseCustomTags(rawText);
      // If only one part and it's string, return as string
      if (parsed.length === 1 && typeof parsed[0] === 'string') {
        return parsed[0];
      }
      // Return JSX fragment for multiple parts
      return <>{parsed}</>;
    }

    return rawText;
  };
}

// Translation hooks for plain text only (no JSX)
export function useTString() {
  const { messages } = useI18n();

  return (key: string, namespace: string = 'common'): string => {
    const namespaceData = messages[namespace];
    if (!namespaceData) {
      console.warn(`Namespace '${namespace}' not found`);
      return key;
    }

    const rawText = getNestedValue(namespaceData, key);
    // Strip custom tags and return plain text
    return rawText.replace(/<\w+\s*\/>/g, ' ').replace(/\s+/g, ' ').trim();
  };
}


// Translate client side usage:
// "use client";
// import { useT } from "@/i18n/I18nProvider";
// const t = useT(); 

// Translate client side usage:
// import { createServerTranslator } from "@/i18n/serverUtils";
// const { t } = await createServerTranslator(locale, ['common']);
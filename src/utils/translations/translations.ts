import enTranslations from "./langs/en.json";
import ptTranslations from "./langs/pt.json";

export let langat: "pt" | "en" = "pt";

export function setlang(lang: "en" | "pt") {
  langat = lang;
}

export function t(key: string): string {
  const translations = getTranslations();
  return translations[key] || key;
}

function getTranslations(): { [key: string]: string } {
  if (langat === "en") {
    return enTranslations;
  } else if (langat === "pt") {
    return ptTranslations;
  } else {
    return {};
  }
}

export type Translations = {
  en: { [key: string]: string };
  pt: { [key: string]: string };
};

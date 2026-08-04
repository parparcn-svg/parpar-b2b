export const LANGS = ["ar", "en"] as const;
export type Lang = (typeof LANGS)[number];

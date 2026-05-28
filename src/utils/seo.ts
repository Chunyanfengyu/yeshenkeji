export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const siteBase = "https://yeshen.tech";

export function generateSEO(defaults: SEOProps) {
  return defaults;
}

export const defaultSEO: SEOProps = {
  title: "夜深科技 | Yeshen Tech - AI & 软件技术公司",
  description:
    "河北省夜深科技有限责任公司 — 深耕人工智能、机器人技术与数字创意，用代码重塑深夜的无限可能。",
  ogImage: `${siteBase}/images/og-default.png`,
  ogType: "website",
  canonical: siteBase,
};

export function formatTitle(pageTitle: string): string {
  return `${pageTitle} | 夜深科技 Yeshen Tech`;
}

export function getCanonical(path: string): string {
  return `${siteBase}${path}`;
}

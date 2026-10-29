"use client";

// "Where did this customer come from", taken from Matikut's site-source.js.
// On the first visit we keep (in this browser only, no cookies, no outside service) where the visitor came from:
// Google, Instagram, Facebook, WhatsApp, an AI chat or a campaign link (?utm_source= / ?ref=).
// Every order, enquiry and workshop sign-up carries it, so the admin reports show which source brings real customers.
// A campaign link always wins; otherwise the first visit's source is kept for 30 days.

export type Source = { source: string; detail: string; landing: string; at: number };

const KEY = "lirons-source";
const DAYS = 30;

const HOSTS: [RegExp, string][] = [
  [/^(mail\.google\.com|outlook\.live\.com|outlook\.office\.com|mail\.yahoo\.com)$/, "מייל"],
  [/(^|\.)google\./, "גוגל"],
  [/(^|\.)bing\.com$/, "בינג"],
  [/(^|\.)facebook\.com$|(^|\.)fb\.me$/, "פייסבוק"],
  [/(^|\.)instagram\.com$/, "אינסטגרם"],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, "וואטסאפ"],
  [/(^|\.)(youtube\.com|youtu\.be)$/, "יוטיוב"],
  [/(^|\.)(t\.me|telegram\.org)$/, "טלגרם"],
  [/(^|\.)tiktok\.com$/, "טיקטוק"],
  [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$|(^|\.)claude\.ai$|(^|\.)perplexity\.ai$|(^|\.)gemini\.google\.com$/, "צ'אט AI"],
];
const UTM: Record<string, string> = {
  google: "גוגל", facebook: "פייסבוק", fb: "פייסבוק", instagram: "אינסטגרם", ig: "אינסטגרם",
  whatsapp: "וואטסאפ", wa: "וואטסאפ", status: "סטטוס וואטסאפ", group: "קבוצת וואטסאפ", groups: "קבוצת וואטסאפ",
  telegram: "טלגרם", email: "מייל", newsletter: "מייל", tiktok: "טיקטוק", flyer: "פלייר", qr: "קוד QR",
};

function read(): Source | null {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "null") as Source | null;
    return s && Date.now() - s.at < DAYS * 864e5 ? s : null;
  } catch { return null; }
}

/** Runs once on every page load (SourceTracker in the layout). */
export function captureSource() {
  try {
    const q = new URLSearchParams(location.search);
    const utm = (q.get("utm_source") || q.get("ref") || "").trim().toLowerCase();
    const landing = location.pathname;
    if (utm) {
      const s: Source = { source: UTM[utm] ?? utm, detail: q.get("utm_campaign") || q.get("utm_medium") || "", landing, at: Date.now() };
      localStorage.setItem(KEY, JSON.stringify(s));
      return;
    }
    if (read()) return;
    let source = "כניסה ישירה", detail = "";
    if (document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host !== location.hostname) {
        source = HOSTS.find(([re]) => re.test(host))?.[1] ?? "אתר אחר";
        detail = host;
      } else return;
    }
    localStorage.setItem(KEY, JSON.stringify({ source, detail, landing, at: Date.now() }));
  } catch {}
}

export function getSource(): Source | null {
  return typeof window === "undefined" ? null : read();
}

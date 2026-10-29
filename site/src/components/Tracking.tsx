"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { captureSource } from "@/lib/source";

/** Keeps where the visitor came from (lib/source), and counts clicks on WhatsApp and phone links with the page they
 *  came from (as on Batel's site): most of Liron's enquiries start in WhatsApp, not in a form. */
export default function Tracking() {
  useEffect(() => {
    captureSource();
    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement | null)?.closest?.("a")?.getAttribute("href") ?? "";
      if (href.includes("wa.me")) track("whatsapp_click", { page: location.pathname });
      else if (href.startsWith("tel:")) track("phone_click", { page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

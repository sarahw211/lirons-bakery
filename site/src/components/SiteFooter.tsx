import Link from "next/link";
import Image from "next/image";
import { BUSINESS, waLink } from "@/lib/business";

// The footer from the home page, "the footer like a menu": big service links, contact column and the leaf divider.
// The seal that opens onto the table stays on the home page only.
const LINKS = [
  ["קייטרינג לאירועים", "/events"],
  ["מגשי אירוח", "/menu?c=trays"],
  ["מארזי חג ומתנה", "/menu?c=boxes"],
  ["סדנאות אפייה", "/workshops"],
  ["עוגות ועוגיות", "/menu"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="in">
        <div className="fgrid">
          <nav className="menu" aria-label="השירותים">
            {LINKS.map(([t, h]) => <Link key={h} href={h}>{t} <small>←</small></Link>)}
          </nav>
          <div className="contact">
            <b>דברו איתי</b>
            <a href={waLink()} target="_blank" rel="noopener">וואטסאפ: {BUSINESS.phone}</a>
            <span>{BUSINESS.address}</span>
            <span>{BUSINESS.deliveryArea}</span>
            <span>{BUSINESS.kashrut}</span>
            <a href={BUSINESS.instagram} target="_blank" rel="noopener">אינסטגרם</a>
          </div>
          <div className="contact">
            <b>מידע</b>
            <Link href="/contact">צור קשר</Link>
            <Link href="/delivery">משלוחים ושאלות</Link>
            <Link href="/account">האזור האישי</Link>
            <Link href="/terms">תקנון</Link>
            <Link href="/privacy">פרטיות</Link>
            <Link href="/accessibility">הצהרת נגישות</Link>
          </div>
        </div>
        <div className="leaf" aria-hidden />
        <p className="copy">
          <span>כל הזכויות שמורות ל-Liron&apos;s Bakery</span>
          <a className="madeby" href="https://saraweizman.co.il" target="_blank" rel="noopener" aria-label="האתר עוצב ונבנה על ידי שרה וייצמן">
            <span>Made by</span><Image src="/img/sara-weizman-logo-mono-white.svg" alt="Sara Weizman" width={90} height={18} />
          </a>
        </p>
      </div>
    </footer>
  );
}

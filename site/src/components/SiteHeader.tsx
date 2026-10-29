"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { store, useStore } from "@/lib/store";

// The sticky menu from the home page (.stk): a cream label with cut corners, dropdowns with a picture per item.
const MENU: { label: string; href: string; items?: { img: string; title: string; sub: string; href: string }[]; all?: string }[] = [
  { label: "אירוח ומגשים", href: "/events", all: "לכל האירועים", items: [
    { img: "/img/gen/g-event-spread.jpg", title: "קייטרינג לאירועים", sub: "ברית, בר מצווה, שבע ברכות", href: "/events" },
    { img: "/img/gen/g-sfinge.jpg", title: "מגשי אירוח", sub: "20 יחידות במגש", href: "/menu?c=trays" },
  ] },
  { label: "מארזים", href: "/menu?c=boxes", all: "לכל המארזים", items: [
    { img: "/img/gen/g-shabbat-s.jpg", title: "מארזים לחגים ולשבת", sub: "שבועות, פורים ושבת", href: "/menu?c=boxes" },
    { img: "/img/gen/g-box-pastries.jpg", title: "מארזים לעסקים", sub: "ללקוחות ולעובדים", href: "/contact?t=business" },
  ] },
  { label: "סדנאות", href: "/workshops", all: "לרשימת ההמתנה", items: [
    { img: "/img/gen/g-ws3-women.jpg", title: "ערב אפייה לנשים", sub: "240 ₪ · 3 שעות", href: "/workshops" },
    { img: "/img/gen/g-ws3-kids.jpg", title: "נוער וילדים", sub: "240 ₪ · 3 שעות", href: "/workshops" },
  ] },
  { label: "התפריט", href: "/menu", all: "לכל התפריט", items: [
    { img: "/img/gen/g-marble-one.jpg", title: "עוגות", sub: "שיש, שמרים ובחושות", href: "/menu?c=cakes" },
    { img: "/img/gen/g-rolled-box-s.jpg", title: "עוגיות", sub: "מגולגלות, אלפחורס ועוד", href: "/menu?c=cookies" },
  ] },
  { label: "הסיפור שלי", href: "/about" },
];

export default function SiteHeader() {
  const { cart, favs } = useStore();
  const [open, setOpen] = useState(false);
  const count = cart.reduce((n, l) => n + l.qty, 0);
  return (
    <header className="stk">
      <span className="shape" aria-hidden />
      <Link href="/" className="logo-link" aria-label="לירונ'ס, לדף הבית">
        <Image className="logo" src="/img/logo-clear.png" alt="" width={44} height={44} priority />
      </Link>
      <nav className={`links${open ? " open" : ""}`} aria-label="תפריט ראשי">
        {MENU.map((m) => (
          <div className="it" key={m.label}>
            <Link href={m.href} onClick={() => setOpen(false)}>{m.label}{m.items && <span className="car" aria-hidden>▾</span>}</Link>
            {m.items && (
              <div className="drop">
                {m.items.map((i) => (
                  <Link key={i.title} href={i.href} onClick={() => setOpen(false)}>
                    <Image src={i.img} alt="" width={44} height={44} />
                    <span><b>{i.title}</b><small>{i.sub}</small></span>
                  </Link>
                ))}
                <Link className="all" href={m.href} onClick={() => setOpen(false)}>{m.all} ←</Link>
              </div>
            )}
          </div>
        ))}
        <Link className="m-only" href="/contact" onClick={() => setOpen(false)}>צור קשר</Link>
        <Link className="m-only" href="/account" onClick={() => setOpen(false)}>האזור האישי</Link>
      </nav>
      <span className="icons">
        <Link className="ico" href="/account" aria-label="האזור האישי">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" /></svg>
        </Link>
        <Link className="ico" href="/favorites" aria-label={`האהובים שלי, ${favs.length}`}>
          <svg viewBox="0 0 24 24"><path d="M12 19.5s-7-4.3-7-9.6A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7 2.3c0 5.3-7 9.6-7 9.6z" /></svg><i>{favs.length}</i>
        </Link>
        <button className="ico" type="button" onClick={store.open} aria-label={`ההזמנה שלי, ${count} פריטים`}>
          <svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11.5h-11z" /><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" /></svg><i>{count}</i>
        </button>
        <Link className="order" href="/menu">להזמנה</Link>
        <button className="burger" type="button" aria-label="פתיחת התפריט" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </span>
    </header>
  );
}

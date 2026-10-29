"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { BUSINESS, waLink } from "@/lib/business";
import { getSource } from "@/lib/source";
import { store, useStore } from "@/lib/store";
import { ils } from "@/lib/types";

/** The cart as a drawer from the side. No payment on the site: the order goes to Liron in WhatsApp,
 *  she confirms stock, and only then the customer pays (decided 26.10). After the Supabase step the order is
 *  also saved in the admin, with the source it came from. */
export default function CartDrawer() {
  const { cart, cartOpen } = useStore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [how, setHow] = useState<"pickup" | "delivery">("pickup");
  const [address, setAddress] = useState("");
  const [when, setWhen] = useState("");
  const [note, setNote] = useState("");
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && store.close();
    addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [cartOpen]);

  const lines = cart.map((l) => ({ ...l, p: PRODUCTS.find((p) => p.id === l.id)! })).filter((l) => l.p);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const fee = how === "delivery" && subtotal < BUSINESS.freeDeliveryFrom ? BUSINESS.deliveryFee : 0;
  const missing = !name.trim() || !phone.trim() || (how === "delivery" && !address.trim());

  function send() {
    setTried(true);
    if (missing || !lines.length) return;
    const src = getSource();
    const text = [
      `שלום לירון, אני רוצה להזמין:`,
      ...lines.map((l) => `• ${l.p.name} × ${l.qty} · ${ils(l.p.price * l.qty)}`),
      ``,
      `סה"כ: ${ils(subtotal + fee)}${fee ? ` (כולל משלוח ${ils(fee)})` : ""}`,
      how === "pickup" ? `איסוף עצמי` : `משלוח ל: ${address}`,
      when ? `מתי: ${when}` : null,
      note ? `הערה: ${note}` : null,
      ``,
      `${name} · ${phone}`,
      src ? `(הגעתי מ: ${src.source})` : null,
    ].filter((x) => x !== null).join("\n");
    window.open(waLink(text), "_blank", "noopener");
  }

  return (
    <div className={`drawer${cartOpen ? " on" : ""}`} aria-hidden={!cartOpen}>
      <button className="scrim" type="button" aria-label="סגירת הסל" tabIndex={cartOpen ? 0 : -1} onClick={store.close} />
      <aside className="panel" role="dialog" aria-modal="true" aria-labelledby="cart-h">
        <div className="head">
          <h2 id="cart-h">ההזמנה שלי</h2>
          <button type="button" className="x" onClick={store.close} aria-label="סגירה">×</button>
        </div>
        {lines.length === 0 ? (
          <div className="empty">
            <p>הסל עוד ריק.</p>
            <a className="dl" href="/menu">לתפריט<i /></a>
          </div>
        ) : (
          <>
            <ul className="lines">
              {lines.map((l) => (
                <li key={l.id}>
                  <Image src={l.p.image} alt="" width={64} height={64} />
                  <span className="nm"><b>{l.p.name}</b><small>{ils(l.p.price)} ליחידה</small></span>
                  <span className="qty">
                    <button type="button" onClick={() => store.setQty(l.id, l.qty + 1)} aria-label={`עוד ${l.p.name}`}>+</button>
                    <b>{l.qty}</b>
                    <button type="button" onClick={() => store.setQty(l.id, l.qty - 1)} aria-label={`פחות ${l.p.name}`}>−</button>
                  </span>
                </li>
              ))}
            </ul>
            <form className="form" onSubmit={(e) => { e.preventDefault(); send(); }} noValidate>
              <div className="seg" role="radiogroup" aria-label="איך מקבלים">
                <button type="button" role="radio" aria-checked={how === "pickup"} className={how === "pickup" ? "on" : ""} onClick={() => setHow("pickup")}>איסוף מעפולה</button>
                <button type="button" role="radio" aria-checked={how === "delivery"} className={how === "delivery" ? "on" : ""} onClick={() => setHow("delivery")}>משלוח</button>
              </div>
              <label>שם<input id="c-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" aria-invalid={tried && !name.trim()} /></label>
              <label>טלפון<input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" autoComplete="tel" aria-invalid={tried && !phone.trim()} /></label>
              {how === "delivery" && <label>כתובת<input id="c-addr" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" aria-invalid={tried && !address.trim()} /></label>}
              <label>מתי צריך את זה?<input id="c-when" value={when} onChange={(e) => setWhen(e.target.value)} placeholder="למשל: שישי בבוקר" /></label>
              <label>הערה<textarea id="c-note" value={note} onChange={(e) => setNote(e.target.value)} rows={2} /></label>
              {tried && missing && <p className="err" role="alert">חסרים שם, טלפון{how === "delivery" ? " או כתובת" : ""}.</p>}
              <dl className="sum">
                <div><dt>מוצרים</dt><dd>{ils(subtotal)}</dd></div>
                {how === "delivery" && <div><dt>משלוח</dt><dd>{fee ? ils(fee) : "חינם"}</dd></div>}
                <div className="tot"><dt>סה&quot;כ</dt><dd>{ils(subtotal + fee)}</dd></div>
              </dl>
              {how === "delivery" && fee > 0 && <p className="hint">משלוח חינם מעל {ils(BUSINESS.freeDeliveryFrom)}. חסרים {ils(BUSINESS.freeDeliveryFrom - subtotal)}.</p>}
              <button className="btn p" type="submit">שליחת ההזמנה ללירון בוואטסאפ</button>
              <p className="hint">לא משלמים עכשיו. לירון מאשרת שהכל במלאי, ורק אז משלמים: מזומן, ביט או פייבוקס.</p>
            </form>
          </>
        )}
      </aside>
    </div>
  );
}

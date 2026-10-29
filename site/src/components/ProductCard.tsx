"use client";

import Image from "next/image";
import { store, useStore } from "@/lib/store";
import { TAGS, ils, type Product } from "@/lib/types";

/** A product as a paper label: the photo, the name in Nostela, the tags in small caps, the price, a heart and "to the cart".
 *  Same cut corners and inner frame as the service cards and buttons on the home page. */
export default function ProductCard({ p }: { p: Product }) {
  const { favs, cart } = useStore();
  const fav = favs.includes(p.id);
  const inCart = cart.find((l) => l.id === p.id)?.qty ?? 0;
  return (
    <article className={`pcard${p.soldOut ? " out" : ""}`}>
      <div className="ph">
        <Image src={p.image} alt={p.name} fill sizes="(max-width:700px) 50vw, (max-width:1100px) 33vw, 25vw" />
        <button type="button" className={`heart${fav ? " on" : ""}`} aria-pressed={fav}
          aria-label={fav ? `להוריד את ${p.name} מהאהובים` : `להוסיף את ${p.name} לאהובים`} onClick={() => store.toggleFav(p.id)}>
          <svg viewBox="0 0 24 24"><path d="M12 19.5s-7-4.3-7-9.6A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7 2.3c0 5.3-7 9.6-7 9.6z" /></svg>
        </button>
        {p.soldOut && <span className="badge">אזל השבוע</span>}
      </div>
      <div className="txt">
        {p.tags.length > 0 && <p className="tags">{p.tags.map((t) => <span key={t} className={`tag t-${t}`}>{TAGS[t]}</span>)}</p>}
        <h3>{p.name}</h3>
        {p.description && <p className="desc">{p.description}</p>}
        <div className="row">
          <span className="price">{ils(p.price)}</span>
          {!p.soldOut && (inCart > 0 ? (
            <span className="qty" aria-label={`כמות של ${p.name}`}>
              <button type="button" onClick={() => store.setQty(p.id, inCart + 1)} aria-label="עוד אחד">+</button>
              <b aria-live="polite">{inCart}</b>
              <button type="button" onClick={() => store.setQty(p.id, inCart - 1)} aria-label="אחד פחות">−</button>
            </span>
          ) : (
            <button type="button" className="add" onClick={() => store.add(p.id)}>לסל</button>
          ))}
        </div>
      </div>
    </article>
  );
}

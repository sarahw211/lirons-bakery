"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { store, useStore } from "@/lib/store";

/** "האהובים שלי": like a mood board, with no total and no payment (decided 26.10). One button moves them all to the cart. */
export default function FavoritesPage() {
  const { favs } = useStore();
  const items = PRODUCTS.filter((p) => favs.includes(p.id));
  return (
    <>
      <section className="wrap ph-head">
        <p className="crumbs"><Link href="/">דף הבית</Link> / האהובים שלי</p>
        <h1 className="he-h"><span className="enw" aria-hidden>favorites</span>האהובים <em>שלי</em></h1>
        <p className="lead">מה שסימנתם בלב נשמר כאן, כדי שיהיה קל להזמין שוב.</p>
      </section>
      <div className="wrap">
        {items.length ? (
          <>
            <div className="pgrid">{items.map((p) => <ProductCard key={p.id} p={p} />)}</div>
            <p style={{ marginTop: 28 }}>
              <button className="btn p" type="button" onClick={() => items.forEach((p) => store.add(p.id))}>להוסיף את כולם לסל</button>
            </p>
          </>
        ) : (
          <p className="empty-note">עוד לא סימנתם אהובים. לוחצים על הלב בכל מוצר בתפריט. <Link className="dl" href="/menu">לתפריט<i /></Link></p>
        )}
      </div>
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES, TAGS, type Category, type Tag } from "@/lib/types";

const FILTER_TAGS: Tag[] = ["parve", "dairy", "gluten-free"];

/** The archive: tabs per category (all = one section per category), and tag chips that narrow every section. */
export default function MenuView({ initial }: { initial: Category | "all" }) {
  const [cat, setCat] = useState<Category | "all">(initial);
  const [tags, setTags] = useState<Tag[]>([]);

  const pick = (c: Category | "all") => {
    setCat(c);
    history.replaceState(null, "", c === "all" ? "/menu" : `/menu?c=${c}`);
  };
  const shown = useMemo(
    () => PRODUCTS.filter((p) => tags.every((t) => p.tags.includes(t))).sort((a, b) => a.sort - b.sort),
    [tags],
  );
  const count = (c: Category) => shown.filter((p) => p.category === c).length;
  const sections = CATEGORIES.filter((k) => cat === "all" || k.id === cat);

  return (
    <>
      <div className="filters">
        <div className="cats" role="group" aria-label="קטגוריות">
          <button type="button" aria-pressed={cat === "all"} onClick={() => pick("all")}>הכל<small>{shown.length}</small></button>
          {CATEGORIES.map((k) => (
            <button key={k.id} type="button" aria-pressed={cat === k.id} onClick={() => pick(k.id)}>{k.label}<small>{count(k.id)}</small></button>
          ))}
        </div>
        <div className="chips" role="group" aria-label="סינון">
          {FILTER_TAGS.map((t) => (
            <label key={t}>
              <input type="checkbox" checked={tags.includes(t)} onChange={() => setTags(tags.includes(t) ? tags.filter((x) => x !== t) : [...tags, t])} />
              {TAGS[t]}
            </label>
          ))}
        </div>
      </div>
      {sections.map((k) => {
        const items = shown.filter((p) => p.category === k.id);
        if (!items.length && cat === "all") return null;
        return (
          <section key={k.id} className="catsec" aria-labelledby={`h-${k.id}`}>
            <div className="cathead">
              <h2 id={`h-${k.id}`}>{k.label}</h2>
              <span>{k.note}</span>
              <span className="en" aria-hidden>{k.en}</span>
            </div>
            {items.length ? (
              <div className="pgrid">{items.map((p) => <ProductCard key={p.id} p={p} />)}</div>
            ) : (
              <p className="empty-note">אין כרגע {k.label} שמתאימים לסינון. אפשר לכתוב לי בוואטסאפ, ואולי אכין במיוחד.</p>
            )}
          </section>
        );
      })}
    </>
  );
}

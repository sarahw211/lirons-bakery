import type { Metadata } from "next";
import Link from "next/link";
import MenuView from "./MenuView";
import { CATEGORIES, type Category } from "@/lib/types";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "התפריט",
  description: "עוגות בחושות, עוגיות, מגשי אירוח ומארזים בעבודת יד מעפולה. חלבי ופרווה, וגם ללא גלוטן.",
};

export default async function MenuPage({ searchParams }: { searchParams: Promise<{ c?: string }> }) {
  const { c } = await searchParams;
  const initial = CATEGORIES.some((k) => k.id === c) ? (c as Category) : "all";
  return (
    <>
      <section className="wrap ph-head">
        <p className="crumbs"><Link href="/">דף הבית</Link> / התפריט</p>
        <h1 className="he-h"><span className="enw" aria-hidden>menu</span>התפריט <em>שלי</em></h1>
        <p className="lead">הכל נאפה לפי הזמנה, בעבודת יד. בוחרים, שולחים לי בוואטסאפ, ואני חוזרת לאשר שהכל במלאי. משלמים רק אחרי האישור.</p>
      </section>
      <div className="wrap">
        <MenuView initial={initial} />
        <p className="note-strip">
          <span><b>איסוף</b> · {BUSINESS.address}</span>
          <span><b>משלוח בעפולה</b> · {BUSINESS.deliveryFee} ₪, חינם מעל {BUSINESS.freeDeliveryFrom} ₪</span>
          <span><b>כשרות</b> · {BUSINESS.kashrut}</span>
        </p>
      </div>
    </>
  );
}

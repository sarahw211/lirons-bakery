export type Category = "cakes" | "cookies" | "trays" | "boxes";
export type Tag = "parve" | "dairy" | "gluten-free" | "preorder";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  tags: Tag[];
  description: string;
  image: string;
  sort: number;
  /** Liron marks a product as sold out from the admin; it stays on the menu, greyed, without "add to cart" */
  soldOut?: boolean;
};

export const CATEGORIES: { id: Category; label: string; en: string; note: string }[] = [
  { id: "cakes", label: "עוגות", en: "cakes", note: "פס עוגה בתבנית נייר" },
  { id: "cookies", label: "עוגיות", en: "cookies", note: "קופסה של 10–12 יחידות" },
  { id: "trays", label: "מגשי אירוח", en: "trays", note: "מגש של 20 יחידות" },
  { id: "boxes", label: "מארזים", en: "gifts", note: "לחג, לשבת ולמתנה" },
];

export const TAGS: Record<Tag, string> = {
  parve: "פרווה",
  dairy: "חלבי",
  "gluten-free": "ללא גלוטן",
  preorder: "בהזמנה מראש",
};

export const ils = (n: number) => `${n.toLocaleString("he-IL")} ₪`;

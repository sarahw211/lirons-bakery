// פרטי העסק שחוזרים בכמה מקומות. אחרי החיבור ל-Supabase הם יעברו להגדרות בניהול.
export const BUSINESS = {
  name: "Liron's Bakery",
  nameHe: "לירונ'ס",
  phone: "052-893-1990",
  whatsapp: "972528931990",
  address: "קירשטיין 15ב', עפולה",
  deliveryArea: "משלוחים עד רמת ישי",
  kashrut: "חלבי ופרווה · בד\"צ העדה החרדית · לנדא · רובין",
  instagram: "https://instagram.com/lironwaiz",
  /** delivery in Afula; free above the threshold (from the questionnaire, 26.10) */
  deliveryFee: 15,
  freeDeliveryFrom: 150,
};

export const waLink = (text?: string) =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

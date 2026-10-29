// המוצרים מהאתר הקיים של לירון (נשלפו 29.10.2026). עד שיחובר Supabase, זה מקור המוצרים באתר.
// אחרי החיבור הם ייכנסו לטבלת products, ולירון תערוך אותם מהניהול.
import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    "id": "maple",
    "name": "עוגת מייפל",
    "price": 50,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "עוגת מייפל עשירה וטעימה",
    "image": "/img/products/01.jpg",
    "sort": 0
  },
  {
    "id": "brownies",
    "name": "בראוניז",
    "price": 45,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "בראוניז שוקולד עשיר ורך",
    "image": "/img/products/02.jpg",
    "sort": 1
  },
  {
    "id": "marble",
    "name": "עוגת שיש",
    "price": 45,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "עוגת שיש קלאסית",
    "image": "/img/products/03.jpg",
    "sort": 2
  },
  {
    "id": "apple",
    "name": "עוגת תפוחים",
    "price": 50,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "עוגת תפוחים עסיסית ומשגעת",
    "image": "/img/products/04.jpg",
    "sort": 3
  },
  {
    "id": "chocolate",
    "name": "עוגת שוקולד",
    "price": 45,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "עוגת שוקולד עשירה",
    "image": "/img/products/05.jpg",
    "sort": 4
  },
  {
    "id": "yeast",
    "name": "עוגת שמרים",
    "price": 55,
    "category": "cakes",
    "tags": [
      "parve"
    ],
    "description": "עוגת שמרים רכה וטעימה",
    "image": "/img/products/06.jpg",
    "sort": 5
  },
  {
    "id": "baklava",
    "name": "בקלאווה",
    "price": 45,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "בקלאווה מסורתית עם אגוזים (10 יחידות)",
    "image": "/img/products/07.jpg",
    "sort": 6
  },
  {
    "id": "moroccan-jar",
    "name": "עוגיות מכונה מרוקאיות בצנצנת",
    "price": 35,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "עוגיות מרוקאיות מסורתיות",
    "image": "/img/products/08.png",
    "sort": 7
  },
  {
    "id": "salty-cookies",
    "name": "עוגיות מלוחות",
    "price": 40,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "עוגיות מלוחות טעימות",
    "image": "/img/products/09.avif",
    "sort": 8
  },
  {
    "id": "rolled-dates",
    "name": "מגולגלות תמרים",
    "price": 45,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "עוגיות מגולגלות עם תמרים",
    "image": "/img/products/10.avif",
    "sort": 9
  },
  {
    "id": "alfajores",
    "name": "אלפחורס",
    "price": 45,
    "category": "cookies",
    "tags": [
      "dairy"
    ],
    "description": "עוגיות אלפחורס במילוי ריבת חלב",
    "image": "/img/products/11.jpg",
    "sort": 10
  },
  {
    "id": "rolled-bueno",
    "name": "מגולגלות בואנו",
    "price": 45,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "עוגיות מגולגלות בטעם שוקולד בואנו",
    "image": "/img/products/12.jpg",
    "sort": 11
  },
  {
    "id": "rolled-pistachio-halva",
    "name": "מגולגלות פיסטוק חלבה",
    "price": 45,
    "category": "cookies",
    "tags": [
      "dairy"
    ],
    "description": "עוגיות מגולגלות עם פיסטוק וחלבה",
    "image": "/img/products/13.jpg",
    "sort": 12
  },
  {
    "id": "alfajores-gf",
    "name": "אלפחורס ללא גלוטן",
    "price": 50,
    "category": "cookies",
    "tags": [
      "dairy",
      "gluten-free",
      "preorder"
    ],
    "description": "אלפחורס ללא גלוטן - בהזמנה מראש (בסביבת גלוטן)",
    "image": "/img/products/14.jpg",
    "sort": 13
  },
  {
    "id": "jam-sandwich",
    "name": "עוגיות סנדוויץ' ריבה",
    "price": 40,
    "category": "cookies",
    "tags": [
      "parve"
    ],
    "description": "עוגיות סנדוויץ' עם ריבה טעימה",
    "image": "/img/products/15.png",
    "sort": 14
  },
  {
    "id": "rolled-gf",
    "name": "מגולגלות במילוי ממרחים שונים ללא גלוטן",
    "price": 50,
    "category": "cookies",
    "tags": [
      "gluten-free",
      "preorder"
    ],
    "description": "עוגיות מגולגלות עם ממרחים שונים ללא גלוטן - בהזמנה מראש (בסביבת גלוטן)",
    "image": "/img/products/16.jpg",
    "sort": 15
  },
  {
    "id": "sfinge",
    "name": "ספינג'",
    "price": 140,
    "category": "trays",
    "tags": [
      "parve"
    ],
    "description": "לחנוכה ולכל אירוע ומתי שמתחשק מגש של 20 יח'",
    "image": "/img/products/17.jpg",
    "sort": 16
  },
  {
    "id": "ham-ham",
    "name": "חם חם",
    "price": 150,
    "category": "trays",
    "tags": [
      "parve"
    ],
    "description": "חם חם טרי ואוורירי מגש 20 יח'",
    "image": "/img/products/18.jpg",
    "sort": 17
  },
  {
    "id": "puffs",
    "name": "פחזניות",
    "price": 150,
    "category": "trays",
    "tags": [
      "dairy",
      "parve"
    ],
    "description": "מגש 20 יח'... ניתן להזמין פרווה/חלבי",
    "image": "/img/products/19.jpg",
    "sort": 18
  },
  {
    "id": "hamantaschen",
    "name": "אוזני המן במילויים שונים",
    "price": 45,
    "category": "cookies",
    "tags": [
      "dairy",
      "parve"
    ],
    "description": "אוזני המן במילויים שונים- שוקולד/בואונו/פיסטוק/תמרים במגוון מילויים מיני' 10 יח' בהזמנה",
    "image": "/img/products/20.png",
    "sort": 19
  },
  {
    "id": "shavuot-medium",
    "name": "מארז בינוני לשבועות",
    "price": 220,
    "category": "boxes",
    "tags": [
      "dairy",
      "parve"
    ],
    "description": "מארז מפנק הכולל- יין קטן (סוג היין עפ\"י מלאי) מיקס עוגיות מרוקאיות חום לבן, כדורי חלבה, בראוניז גבינה.",
    "image": "/img/products/21.png",
    "sort": 20
  },
  {
    "id": "shavuot-large",
    "name": "מארז גדול לשבועות",
    "price": 290,
    "category": "boxes",
    "tags": [
      "dairy",
      "parve"
    ],
    "description": "מארז מפנק הכולל- יין (סוג היין עפ\"י מלאי ) מיקס עוגיות מרוק",
    "image": "/img/products/22.png",
    "sort": 21
  },
  {
    "id": "shabbat-box",
    "name": "מארז מפנק לשבת",
    "price": 170,
    "category": "boxes",
    "tags": [
      "parve"
    ],
    "description": "אלפחורס עוגיות ריבה שמרים עוגיות מרוקאיות ניתן להרכיב מארז אישי עפ\"י מלאי",
    "image": "/img/products/23.png",
    "sort": 22
  },
  {
    "id": "mishloach-manot",
    "name": "משלוח מנות",
    "price": 160,
    "category": "boxes",
    "tags": [
      "dairy",
      "parve"
    ],
    "description": "משלוח מנות מוכן הכולל- 6 אלפחורס 6 סנדוויץ ריבה 6 אוזני המן שמרים בינונית קופסת מרשמלו מסכה רעשן * ניתן להרכיב משלוח בהתאמה אישית עפ\"י מלאי המוצרים באתר.",
    "image": "/img/products/24.png",
    "sort": 23
  }
];

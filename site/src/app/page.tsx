import { redirect } from "next/navigation";

// The home page is still the approved static design (design/דף-הבית-סדר-ברור.html); it moves here after the inner pages.
export default function Home() {
  redirect("/menu");
}

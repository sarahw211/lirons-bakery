"use client";

// The cart and the favourites ("האהובים שלי") live in this browser until the customer signs in;
// after the Supabase step they move to the account, the way Batel's favourites do.
import { useSyncExternalStore } from "react";

export type CartLine = { id: string; qty: number };
type State = { cart: CartLine[]; favs: string[]; cartOpen: boolean };

const KEY = "lirons-store-v1";
const empty: State = { cart: [], favs: [], cartOpen: false };
let state: State = empty;
let loaded = false;
const subs = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "null");
    if (s) state = { ...empty, cart: s.cart ?? [], favs: s.favs ?? [] };
  } catch {}
}
function set(next: Partial<State>) {
  state = { ...state, ...next };
  try { localStorage.setItem(KEY, JSON.stringify({ cart: state.cart, favs: state.favs })); } catch {}
  subs.forEach((f) => f());
}

export function useStore() {
  return useSyncExternalStore(
    (f) => { load(); subs.add(f); return () => subs.delete(f); },
    () => { load(); return state; },
    () => empty,
  );
}

export const store = {
  add(id: string, qty = 1) {
    const cart = state.cart.some((l) => l.id === id)
      ? state.cart.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
      : [...state.cart, { id, qty }];
    set({ cart, cartOpen: true });
  },
  setQty(id: string, qty: number) {
    set({ cart: qty <= 0 ? state.cart.filter((l) => l.id !== id) : state.cart.map((l) => (l.id === id ? { ...l, qty } : l)) });
  },
  clear() { set({ cart: [] }); },
  toggleFav(id: string) {
    set({ favs: state.favs.includes(id) ? state.favs.filter((f) => f !== id) : [...state.favs, id] });
  },
  open() { set({ cartOpen: true }); },
  close() { set({ cartOpen: false }); },
};

import { waLink } from "@/lib/business";

export default function WaFloat() {
  return (
    <a className="wa" href={waLink()} target="_blank" rel="noopener" aria-label="לכתוב ללירון בוואטסאפ">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 20.5 11.8z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path fill="currentColor" d="M9 8.2c.3-.6.6-.6.9-.6h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.6.8c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.8-.6c.2-.1.4-.1.6 0l1.9.8c.4.2.5.4.5.6v.6c0 .3 0 .6-.6.9-.6.4-1.6.6-2.6.3-1.8-.5-4.2-2.6-5.2-4.6-.6-1.2-.4-2.3 0-3z" />
      </svg>
      <span>כתבו לי בוואטסאפ</span>
    </a>
  );
}

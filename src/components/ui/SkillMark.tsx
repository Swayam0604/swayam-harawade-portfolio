import type { ReactElement, SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="inline-block size-[1em] shrink-0"
      {...props}
    />
  );
}

const marks: Record<string, () => ReactElement> = {
  Shopify: () => (
    <Icon>
      <path
        fill="currentColor"
        d="M15.3 3.4c-.2-.1-.4 0-.5.1l-1.4.3c-.3-.8-.8-1.6-1.7-1.6-.1 0-.2 0-.3.1L9.8 4.5 8 4.9c-.2 0-.3.2-.3.4l-1.4 16.1c0 .2.1.4.3.4h12.3c.2 0 .3-.2.3-.4L20.6 6c0-.2-.2-.3-.3-.4l-5-2.2ZM11.7 4.2c.5 0 .9.4 1.1.9l-2.2.5c.2-.7.6-1.4 1.1-1.4Zm.1 6.4s-.3-.1-.5-.1c-1.5 0-2.2.8-2.2 1.6 0 1.1 1 1.6 1.8 2.1.9.5 1.2.9 1.2 1.4 0 .8-.6 1.3-1.6 1.3-1.1 0-1.7-.4-2-.6l-.3 1.6c.3.2 1.1.6 2.3.6 2.1 0 3.4-1.1 3.4-2.7 0-1.1-.7-1.8-2.1-2.5-.8-.4-1.1-.7-1.1-1.2 0-.4.4-.9 1.2-.9.7 0 1.2.2 1.4.3l.3-1.6c-.3-.1-.8-.3-1.8-.3Z"
      />
    </Icon>
  ),
  "Judge.me": () => (
    <Icon>
      <path
        fill="currentColor"
        d="m12 3.2 2.1 4.4 4.8.7-3.5 3.4.8 4.8L12 14.2 7.8 16.5l.8-4.8L5.1 8.3l4.8-.7L12 3.2Z"
      />
    </Icon>
  ),
  Python: () => (
    <Icon>
      <path
        fill="currentColor"
        d="M12.1 2c-1.8 0-3.3.2-4.3.5C6 3 5.3 3.9 5.3 5.2v1.6h6.9v.5H4.5c-1.5 0-2.8.9-3.2 2.6-.5 2-.5 3.2 0 5.2.4 1.5 1.2 2.6 2.7 2.6h1.7V16c0-1.7 1.5-3.2 3.3-3.2h5.2c1.5 0 2.7-1.2 2.7-2.7V5.2c0-1.4-1.2-2.5-3.2-3-.9-.2-2-.2-3.6-.2Zm-2 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
      <path
        fill="currentColor"
        d="M17.8 6.8V9c0 1.8-1.5 3.3-3.3 3.3H9.3c-1.5 0-2.7 1.3-2.7 2.8v3.7c0 1.4 1.2 2.2 3.2 2.7 2.4.6 4.7.6 6.8 0 1.4-.4 3.2-1.2 3.2-2.7v-1.6h-6.9v-.5h9.1c1.5 0 2.1-1 2.5-2.6.5-2 .5-3.2 0-5.2-.4-1.5-1-2.6-2.5-2.6h-1.9Zm-1.8 11.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </Icon>
  ),
  "JavaScript (ES6+)": () => js(),
  JavaScript: () => js(),
  HTML5: () => (
    <Icon>
      <path fill="currentColor" d="M3.5 2h17l-1.5 17L12 22l-7-3L3.5 2Zm3.2 3.2 8.3 2.9v2.1L9 9.2l.2 2.3 5.8 1.6v2.2l-8.2-2.3.3 3.4L12 18l4.9-1.4.7-7.8.1-3.4H6.7Z" />
    </Icon>
  ),
  CSS3: () => (
    <Icon>
      <path fill="currentColor" d="M3.5 2h17l-1.5 17L12 22l-7-3L3.5 2Zm4 5.2h9.2l-.3 2.4H10l.2 2.2h6l-.7 6.2L12 19.2l-3.6-1.1-.2-2.4h2.2l.1 1 1.5.4 1.5-.4.2-2H8.4L7.5 7.2Z" />
    </Icon>
  ),
  SQL: () => db(),
  MySQL: () => db(),
  "MySQL fundamentals": () => db(),
  SQLite: () => db(),
  MongoDB: () => (
    <Icon>
      <path fill="currentColor" d="M12.4 2s.3 2.4-1 4.4c-1.4 2.1-1 4.3-1 4.3s-2.4-1.3-2.6-4.3C7.6 3.4 12.4 2 12.4 2Zm.2 1.2s4.7 2.3 3.6 8.3c-.8 4.5-3.6 6-3.6 8.5 0 0-3.4-1.4-3.6-6.2-.2-3.5 2.2-6.2 3.6-10.6Z" />
    </Icon>
  ),
  "React.js": () => (
    <Icon>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </Icon>
  ),
  Django: () => (
    <Icon>
      <path fill="currentColor" d="M8.6 3h3.2v14.2c0 4-2.5 5-5.6 5.1v-2.7c1.4 0 2.4-.4 2.4-2.2V3Zm5.2 5.4c1.1-.8 2.5-1.2 4.1-1.2 2.8 0 4.1 1.4 4.1 4.3v7.3h-3.1v-6.8c0-1.6-.6-2.3-1.8-2.3-1.3 0-2.1.8-2.1 2.4v6.7h-3.2V8.5c.6-.1 1.3-.1 2-.1Z" />
    </Icon>
  ),
  Git: () => (
    <Icon>
      <path fill="currentColor" d="M21.2 11 13 2.8a2.7 2.7 0 0 0-3.8 0L7.4 4.6l3 3a2 2 0 0 1 2.5 2.5l2.9 2.9a2 2 0 1 1-1.1.7L11.8 11v5.3a2 2 0 1 1-1.6.1V10.8a2 2 0 0 1-1.1-3.3L6.2 5.7 2.8 9.1a2.7 2.7 0 0 0 0 3.8l8.2 8.2a2.7 2.7 0 0 0 3.8 0l6.4-6.4a2.7 2.7 0 0 0 0-3.8Z" />
    </Icon>
  ),
  Razorpay: () => (
    <Icon>
      <path fill="currentColor" d="M3 4h12.5L21 12l-5.5 8H3l5.5-8L3 4Zm5.2 3.2 3.3 4.8-3.3 4.8h4.4L16.6 12 12.6 7.2H8.2Z" />
    </Icon>
  ),
  Klaviyo: () => (
    <Icon>
      <path fill="currentColor" d="M4 3h6.4L20 12 10.4 21H4l6.4-9L4 3Z" />
    </Icon>
  ),
  GoHighLevel: () => (
    <Icon>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M8 12.5 11 16l5-7" />
    </Icon>
  ),
  Kajabi: () => (
    <Icon>
      <path fill="currentColor" d="M4 6h16v3H9v3h9v3H9v3H4V6Z" />
    </Icon>
  ),
  Ivorey: () => (
    <Icon>
      <path fill="currentColor" d="M6 4h12v3H9v10h9v3H6V4Z" />
    </Icon>
  ),
  WebinarJam: () => (
    <Icon>
      <rect x="2.5" y="5" width="14" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="currentColor" d="m8.2 8.2 5 2.8-5 2.8V8.2Z" />
      <path fill="currentColor" d="M17.2 8.2 21.5 6v9l-4.3-2.2V8.2Z" />
    </Icon>
  ),
  Brevo: () => (
    <Icon>
      <path
        fill="currentColor"
        d="M3.2 8.2c0-2.4 1.9-4.2 4.3-4.2 1.4 0 2.6.6 3.4 1.6.8-1 2-1.6 3.4-1.6 2.4 0 4.3 1.8 4.3 4.2 0 3.4-3.6 5.6-7.7 8.6-4.1-3-7.7-5.2-7.7-8.6Z"
      />
    </Icon>
  ),
  Eventbrite: () => (
    <Icon>
      <path fill="currentColor" d="M12 3a9 9 0 1 0 8.7 11.4H14a3 3 0 1 1 0-2.8h8.2A9 9 0 0 0 12 3Z" />
    </Icon>
  ),
};

function js() {
  return (
    <Icon>
      <path fill="currentColor" d="M3 3h18v18H3V3Zm10.2 13.4c.3 1.3 1.3 2 3 2 1.6 0 2.7-.8 2.7-2.4 0-1.7-.9-2.3-2.6-3.1l-.5-.2c-.8-.4-1.1-.6-1.1-1.2 0-.5.4-.9 1.2-.9.8 0 1.3.3 1.6 1l1.6-.9c-.6-1.2-1.7-1.8-3.2-1.8-1.9 0-3.2 1.1-3.2 2.8 0 1.7 1 2.4 2.6 3.1l.6.2c.9.4 1.4.7 1.4 1.4 0 .8-.7 1.1-1.6 1.1-1.1 0-1.8-.5-2.2-1.3l-1.7 1ZM8.4 12.6H6.6V18c0 1.5-.5 2-1.6 2-.2 0-.7 0-1-.1v-1.6c.2 0 .4.1.6.1.5 0 .7-.2.7-.8v-5h-1.6V11h4.7v1.6Z" />
    </Icon>
  );
}

function db() {
  return (
    <Icon>
      <ellipse cx="12" cy="6" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </Icon>
  );
}

const generic: Record<string, () => ReactElement> = {
  "Email campaign setup": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M3 6.5h18V18H3V6.5Zm0 0 9 7 9-7" />
    </Icon>
  ),
  "Funnel structuring": () => (
    <Icon>
      <path fill="currentColor" d="M4 4h16l-6 8v6l-4 2v-8L4 4Z" />
    </Icon>
  ),
  "Landing page optimization": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M4 5h16v14H4V5Zm0 4h16M9 9v10" />
    </Icon>
  ),
  "Lead capture & forms": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M6 4h12v16H6V4Zm3 4h6M9 12h6M9 16h4" />
    </Icon>
  ),
  "Audience segmentation": () => (
    <Icon>
      <circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </Icon>
  ),
  "Workflow automation": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M4 7h6v4H4V7Zm10 6h6v4h-6v-4M7 11v2a3 3 0 0 0 3 3h4" />
    </Icon>
  ),
  "Campaign testing & QA": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="m5 13 4 4 10-10" />
    </Icon>
  ),
  "Basic performance review": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M4 18V6m0 12h16M7 14v4m5-8v8m5-5v5" />
    </Icon>
  ),
  "SEO audit review (foundational)": () => (
    <Icon>
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="m14.5 14.5 5 5" />
    </Icon>
  ),
  "DNS handling": () => (
    <Icon>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" />
    </Icon>
  ),
  "Domain configuration": () => (
    <Icon>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M3 12h18" />
    </Icon>
  ),
  "Basic HTML email coding": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12" />
    </Icon>
  ),
  "API integration": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M8 12H4m16 0h-4M9 9l-2-2m10 10 2 2m0-12-2 2M7 17l-2 2" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </Icon>
  ),
  "REST Framework": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M4 7h16M4 12h16M4 17h10" />
    </Icon>
  ),
  "REST APIs": () => (
    <Icon>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M7 8 3 12l4 4M17 8l4 4-4 4" />
    </Icon>
  ),
  PythonAnywhere: () => marks.Python(),
};

export function SkillMark({ name }: { name: string }) {
  const Node = marks[name] ?? generic[name];
  if (!Node) return null;
  return <Node />;
}

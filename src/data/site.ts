export const site = {
  name: "Swayam Harawade",
  firstName: "Swayam",
  lastName: "Harawade",
  role: "Full Stack Developer",
  location: "Mumbai, MH",
  email: "swayamharawade0604@gmail.com",
  phone: "88282 98801",
  phoneHref: "tel:+918828298801",
  whatsapp: "https://wa.me/918828298801",
  linkedinLabel: "Swayam Harawade",
  linkedin: "https://www.linkedin.com/in/swayam-harawade",
  githubLabel: "Swayam0604",
  github: "https://github.com/Swayam0604",
  summary:
    "Full Stack Developer with experience in Ecommerce Operations, CRM, and Marketing Automation. Hands-on work across Shopify, Kajabi, GoHighLevel, and Ivorey — supporting website customization, landing pages, customer journeys, automations, and integrations.",
  tagline: "The work, the system, the studio.",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
] as const;

export type CaseSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  period?: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  websiteUrl?: string;
  previewPath?: string;
  previewLabel: string;
  previewImage?: string;
  proxyPath?: string;
  embeddable?: boolean;
  deckPath?: string;
  deckFileName?: string;
  pdfPath?: string;
  pdfFileName?: string;
  tone: "ink" | "stone";
  sections: CaseSection[];
};

export const experience = [
  {
    title: "CRM & Marketing Operations Associate",
    org: "Freelance Support",
    period: "Jan 2026 — Present",
    bullets: [
      "Executed two 52-week automated email marketing campaigns (104+ emails) for ecommerce businesses using Klaviyo.",
      "Segmented customer audiences and built automated email workflows based on customer lifecycle.",
      "Managed DNS, domain configuration, and website updates across multiple client projects.",
      "Worked across Shopify, Kajabi, GoHighLevel, and Ivorey, supporting ecommerce websites through product updates, content management, landing page improvements, integrations, and marketing automation.",
      "Assisted with platform migrations including Groove to GoHighLevel and performed website audits to improve structure, usability, and client implementation.",
      "Delivered webinar systems and automation as freelance technical support — WebinarJam, Brevo, and WordPress landing and replay pages.",
    ],
  },
  {
    title: "Webinar Marketing Automation System",
    org: "Freelance Support",
    period: "Sep 2026",
    bullets: [
      "Set up WebinarJam for registration, the live session, and attendance capture.",
      "Built Brevo email automation: confirmation, pre-session reminders, and post-session replay follow-up.",
      "Created a registration landing page in WordPress and added it as a separate page on the existing site.",
      "Built a post-webinar replay page and the CRM workflow from registration through attended / no-show split.",
    ],
  },
  {
    title: "Shopify Developer — The Satvic Origin",
    org: "Freelance Project",
    period: "Aug 2026 — Sep 2026",
    bullets: [
      "Built the launch-ready Shopify storefront end-to-end — theme customization, products, collections, and content pages.",
      "Set up merchandising for six fragrances, including variants, SKUs, pricing, inventory, and metafields.",
      "Configured Razorpay checkout, shipping rules, and Judge.me reviews on the live store.",
      "Prepared operations for launch: store policies, customer accounts, and Drivaa logistics setup.",
    ],
  },
  {
    title: "Marketing Automation & Web Systems Intern (Python)",
    org: "Internship",
    period: "Nov 2025 — Jan 2026",
    bullets: [
      "Assisted in migrating a complete client website from Ivory to Kajabi, including pages, funnels, automations, forms, domain transition, and DNS configuration.",
      "Built and optimized responsive landing pages and sales funnels in Kajabi.",
      "Configured email sequences and automation workflows.",
      "Conducted website audits to ensure UI consistency and content structure before client handover.",
      "Collaborated with clients to gather requirements and implement feedback.",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "CRM & Marketing Automation",
    body: "Klaviyo campaigns, audience segmentation, lifecycle workflows, and 52-week email sequences that keep ecommerce brands in conversation with their customers.",
  },
  {
    number: "02",
    title: "Ecommerce Operations",
    body: "Hands-on support across Shopify, Kajabi, GoHighLevel, and Ivorey — product updates, content management, Judge.me reviews, and day-to-day site operations.",
  },
  {
    number: "03",
    title: "Landing Pages & Funnels",
    body: "Responsive landing pages, funnel structuring, lead capture, form configuration, and conversion-focused page work.",
  },
  {
    number: "04",
    title: "Platform Migrations",
    body: "Ivory to Kajabi, Groove to GoHighLevel — pages, automations, forms, domain transition, and DNS handled as a complete move.",
  },
  {
    number: "05",
    title: "Integrations & Web Systems",
    body: "API integrations, Razorpay payments, DNS and domain configuration, and website audits for structure, usability, and handover.",
  },
  {
    number: "06",
    title: "Full Stack Development",
    body: "Python, Django, React, REST APIs, and MySQL — membership platforms, role-based auth, and production-ready web applications.",
  },
];

export const projects: Project[] = [
  {
    slug: "satvic-origin",
    title: "The Satvic Origin",
    kind: "Shopify Ecommerce",
    year: "2026",
    period: "Aug–Sep 2026",
    summary:
      "A launch-ready Shopify storefront for a six-fragrance brand — theme, products, checkout, GST, shipping, and operations.",
    description:
      "The project focused on translating The Satvic Origin’s brand into a complete Shopify storefront — from theme customization and product setup to collections, content pages, checkout configuration, payments, shipping, tax, and launch preparation.",
    features: [
      "Brand direction applied across the Shopify theme — logo, typography, color, storefront styling",
      "Homepage: hero, offers, products, and brand content",
      "Six fragrances: Jasmine, Tulsi, Rose, Sandalwood, Lavender, Saffron",
      "Collections, navigation, and product discovery",
      "Variants, SKUs, pricing, inventory, and metafields",
      "Pre-order messaging and add-to-cart flow",
      "Razorpay checkout testing",
      "5% GST with tax included in displayed price",
      "Shipping: ₹99 below ₹599; free shipping at ₹599+",
      "About, Contact, FAQ, shipping, returns, privacy, and terms",
      "Customer accounts and Shopify-native experience",
      "Judge.me product reviews and star ratings on the storefront",
      "Drivaa logistics preparation — KYC, bank, and product setup",
    ],
    stack: ["Shopify", "Razorpay", "Judge.me", "Drivaa"],
    websiteUrl: "https://www.thesatvicorigin.com/",
    previewPath: "/live/satvic-origin",
    previewLabel: "www.thesatvicorigin.com",
    proxyPath: "/embed/satvic/",
    embeddable: true,
    deckPath: "/decks/satvic/deck.json",
    deckFileName: "Presentation - Satvic Origin.pptx",
    tone: "ink",
    sections: [
      {
        heading: "Project overview",
        body: "Building a launch-ready Shopify storefront for The Satvic Origin. Brand, merchandising, payments, and operations were set up as one store — not as disconnected admin tasks.",
      },
      {
        heading: "Brand direction & theme",
        body: "Applied the Satvic Origin visual direction across the Shopify theme, including logo, typography, color treatment, and storefront styling. Homepage structure includes hero, offers, products, and brand content, with pre-order messaging for launch.",
      },
      {
        heading: "Products, collections & discovery",
        items: [
          "6 fragrances: Jasmine, Tulsi, Rose, Sandalwood, Lavender, Saffron",
          "Collections, navigation, and product discovery",
          "Products, variants, SKUs, pricing, and inventory",
          "Metafields structured for the storefront",
        ],
      },
      {
        heading: "Product page & merchandising",
        items: [
          "Product details, fragrance notes, and pricing",
          "Pre-order presentation and add to cart",
          "Clear product presentation and purchase information",
        ],
      },
      {
        heading: "Reviews — Judge.me",
        body: "Judge.me was set up for product reviews so the storefront can show star ratings and customer feedback on product pages, rather than leaving social proof to a third-party tab.",
        items: [
          "Judge.me installed on the Shopify store",
          "Review widgets and star ratings on product pages",
          "Social proof in the purchase path",
        ],
      },
      {
        heading: "Cart, checkout & payments",
        items: [
          "Cart configured for the store’s purchase flow",
          "Razorpay payment setup and checkout testing",
          "5% GST with tax included in the displayed price",
          "Shipping ₹99 below ₹599; free shipping at ₹599+",
        ],
      },
      {
        heading: "Supporting pages",
        items: [
          "About, Contact, FAQ",
          "Shipping, Returns & Refunds",
          "Privacy Policy and Terms",
        ],
      },
      {
        heading: "Launch & operations",
        items: [
          "GST configured across products",
          "Pre-order launch: Buy 2 for ₹699 · Buy 3 for ₹999 · deliveries in 2 weeks",
          "Drivaa preparation — Shopify logistics connection, KYC, bank, and product setup",
        ],
      },
    ],
  },
  {
    slug: "coffee-connect",
    title: "Coffee Connect",
    kind: "UX Case Study",
    year: "2025",
    summary:
      "A self-initiated single-page café website: branch discovery, Zomato ordering, flipbook menus, and community events.",
    description:
      "Coffee Connect is a self-initiated single-page café website concept built in Lovable, showcasing real-world product thinking through branch discovery, ordering, flipbook menus, and community events.",
    features: [
      "Streamlined branch selection",
      "Order Now routes each branch to its Zomato page",
      "Interactive flipbook menus by category — names, descriptions, prices",
      "Google Sheet as the source of menu and event records",
      "Apps Script automates updates for a lightweight CMS",
      "Events section with location, date, and short descriptions",
    ],
    stack: ["Lovable", "Google Sheets", "Apps Script", "Zomato"],
    websiteUrl: "https://cafe-connect-zeta.vercel.app/",
    previewPath: "/live/coffee-connect",
    previewLabel: "cafe-connect-zeta.vercel.app",
    embeddable: true,
    deckPath: "/decks/coffee-connect/deck.json",
    deckFileName: "Presentation - Coffee Connect UX Case Study.pptx",
    tone: "stone",
    sections: [
      {
        heading: "Project overview",
        body: "A sample portfolio project. Coffee Connect explores how a multi-branch café can present discovery, ordering, menus, and community in one page — without a heavy CMS.",
      },
      {
        heading: "User-centric navigation",
        body: "A streamlined branch selection interface lets visitors choose a location first, then see that branch’s menu, order path, and events.",
      },
      {
        heading: "Zomato integration",
        body: "Each branch features a dedicated Order Now button that routes directly to the respective branch’s Zomato page, keeping ordering on a platform customers already use.",
      },
      {
        heading: "Interactive flipbook menu",
        body: "Each branch uses an interactive flipbook menu, organizing dishes by category and showing names, descriptions, and prices.",
      },
      {
        heading: "Lightweight content management",
        items: [
          "Google Sheet maintains menu items and event records",
          "Apps Script automates updates for a seamless visitor experience",
        ],
      },
      {
        heading: "Community gatherings",
        body: "A dedicated events section highlights upcoming gatherings at each branch, with location, date, and short descriptions.",
      },
    ],
  },
  {
    slug: "webinar-systems",
    title: "Webinar Marketing Automation System",
    kind: "Freelance Support",
    year: "2026",
    period: "Sep 2026",
    summary:
      "From registration to replay: WebinarJam, Brevo, and WordPress pages for a live webinar funnel. Client and brand withheld.",
    description:
      "A live webinar campaign needed a complete system from sign-up to attendance and follow-up. I set up the webinar platform, the email automation, the web pages, and the CRM logic that connect them. Strategy, copy, and creative were done by the wider team and are not shown.",
    features: [
      "WebinarJam configured for registration, the live session, and attendance capture",
      "Brevo flows for confirmation, pre-session reminders, and replay follow-up",
      "Bilingual registration page added as a separate page on the existing WordPress site",
      "Protected replay page published after the live session",
      "CRM workflow: form submit, registered tag, reminders, attended / no-show split, replay sequence",
    ],
    stack: ["WebinarJam", "Brevo", "WordPress"],
    previewLabel: "Webinar Automation Case Study.pdf",
    pdfPath: "/docs/webinar-automation-case-study.pdf",
    pdfFileName: "Webinar Automation Case Study.pdf",
    deckPath: "/decks/webinar/deck.json",
    deckFileName: "Webinar Automation Portfolio Deck.pptx",
    tone: "stone",
    sections: [
      {
        heading: "Overview",
        body: "One connected system, from sign-up to follow-up. Role: CRM & Marketing Ops. Type: freelance support. Languages: French / English. Period: Sep 2026.",
      },
      {
        heading: "What I built",
        items: [
          "Webinar platform — WebinarJam for registration, the live session, and attendance",
          "Email automation — Brevo confirmation, reminders, and replay follow-up",
          "Registration page — bilingual landing page on the existing WordPress site",
          "Replay page — protected access after the live session",
          "CRM workflow — registered tag, reminders, attended / no-show split",
        ],
      },
      {
        heading: "My contribution",
        items: [
          "Configured the webinar platform for registration, live delivery, and attendance capture",
          "Built the Brevo automation: confirmation, reminders, and replay follow-up",
          "Designed the CRM logic, including the attended / no-show split",
          "Created the registration page and the protected replay page in WordPress",
        ],
      },
      {
        heading: "Outcome",
        body: "Sign-up, reminders, attendance tracking, and replay follow-up run as one flow. The right message reaches each contact at the right time. Strategy, copy, and creative assets were produced by the wider team and are not shown.",
      },
    ],
  },
  {
    slug: "perqclub",
    title: "PerQClub",
    kind: "Full Stack",
    year: "2025",
    summary:
      "A Django café membership platform with role-based auth, OTP verification, Razorpay, and booking.",
    description:
      "PerQClub is a café membership platform built end-to-end. It supports Admin, Staff, and User roles, OTP-based verification, a three-tier membership model, booking management, reviews, maps, and a dedicated admin layer.",
    features: [
      "Role-based authentication (Admin, Staff, User)",
      "OTP-based verification",
      "Razorpay payment integration",
      "Three-tier membership plans",
      "Booking management and reviews",
      "MySQL data architecture and maps",
      "Responsive UI",
    ],
    stack: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
      "Razorpay",
    ],
    github: "https://github.com/Swayam0604",
    previewPath: "/live/perqclub",
    previewLabel: "perqclub.app",
    tone: "ink",
    sections: [
      {
        heading: "Project overview",
        body: "A membership platform for cafés: plans, bookings, payments, and staff tools in one Django application.",
      },
      {
        heading: "Access & payments",
        items: [
          "Admin, Staff, and User roles",
          "OTP verification",
          "Razorpay for membership checkout",
        ],
      },
    ],
  },
];

export const skills = {
  crm: {
    title: "CRM & Funnel Platforms",
    items: [
      "Shopify",
      "Kajabi",
      "Ivorey",
      "Klaviyo",
      "GoHighLevel",
      "WebinarJam",
      "Brevo",
      "Email campaign setup",
      "Funnel structuring",
      "Landing page optimization",
      "Lead capture & forms",
      "Audience segmentation",
      "Workflow automation",
      "Eventbrite",
    ],
  },
  analytics: {
    title: "Analytics & Tracking",
    items: [
      "Campaign testing & QA",
      "Basic performance review",
      "SEO audit review (foundational)",
    ],
  },
  technical: {
    title: "Technical & Integration",
    items: [
      "DNS handling",
      "Domain configuration",
      "Basic HTML email coding",
      "API integration",
      "Razorpay",
      "Judge.me",
      "MySQL fundamentals",
    ],
  },
  programming: {
    title: "Programming",
    items: [
      "Python",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL",
      "React.js",
      "Django",
      "REST Framework",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Git",
      "REST APIs",
      "PythonAnywhere",
    ],
  },
};

export const education = [
  {
    title: "ITVedant — Python Full Stack Web Development",
    detail: "1-year program · 2025",
  },
  {
    title: "Bachelor of Commerce (B.Com)",
    detail: "R.D. & S.H. National College, Bandra — Mumbai · 2022 – 2025",
  },
];

export const certifications = [
  {
    title: "Master in Full Stack Web Development with Python",
    href: "https://wingz.itvedant.com/site/download-cce-certificate?url=https%3A%2F%2Fmedia.itvedant.com%2Fuploads%2Fcertificates%2Fcce_certificate21513_.jpg",
  },
  {
    title: "SQL — ITVedant",
    href: "https://wingz.itvedant.com/site/download-cce-certificate?url=https%3A%2F%2Fmedia.itvedant.com%2Fuploads%2Fcertificates%2F21513%2Fsql_203_1789502480.jpg",
  },
  {
    title: "Core Python — ITVedant",
    href: "https://wingz.itvedant.com/site/generate-certificate?batch_id=1194&course_id=215&id=21513",
  },
  {
    title: "Django — ITVedant",
    href: "https://wingz.itvedant.com/site/generate-certificate?batch_id=1194&course_id=217&id=21513",
  },
  {
    title: "IBM Web Development Using HTML",
    href: "https://courses.itvedant.skillsnetwork.site/certificates/cebb7458cae341e9843046eed18ab76c",
  },
  {
    title: "IBM SQL and Relational Databases 101",
    href: "https://courses.itvedant.skillsnetwork.site/certificates/f31892ac6c3d411a8bd536cda902560b",
  },
  {
    title: "IBM Python for Web Development",
    href: "https://courses.itvedant.skillsnetwork.site/certificates/a160016b6af446a2936c05f64c581a60",
  },
  {
    title: "AWS Solutions Architecture Job Simulation — Forage",
    href: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_690a4715950ea250db6dc54e_1762378026024_completion_certificate.pdf",
  },
  {
    title: "Deloitte Technology Job Simulation — Forage",
    href: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_690a4715950ea250db6dc54e_1762296730632_completion_certificate.pdf",
  },
];

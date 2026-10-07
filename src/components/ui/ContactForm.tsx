import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio enquiry from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-stone p-8">
        <p className="font-serif text-2xl">Message sent.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks — I’ll get back to you at the email you shared. You can also write directly to{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="grid gap-2 text-sm">
        <span className="tracking-wide">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="min-h-12 border border-line bg-bg px-3 text-fg outline-none focus:border-fg"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="tracking-wide">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-12 border border-line bg-bg px-3 text-fg outline-none focus:border-fg"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="tracking-wide">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-fg"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 w-fit bg-fg px-8 text-sm font-medium tracking-wide text-bg hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-muted">
          If nothing arrived, email me directly at{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

import { useMemo, useState } from "react";

function NavBar({ currentPage, setCurrentPage }) {
  const links = [
    ["home", "Home"],
    ["free", "Free Download"],
    ["premium", "Premium Pack"],
    ["thankyou", "Thank You"],
  ];

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <div className="text-2xl font-black italic tracking-wide">VERVE &amp; VINE</div>
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">March Madness Product System</div>
        </div>
        <nav className="hidden gap-3 md:flex">
          {links.map(([key, label]) => {
            const active = currentPage === key;
            return (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700 hover:-translate-y-0.5"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function SectionShell({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-black/5">
        {eyebrow ? (
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A12]">{eyebrow}</div>
        ) : null}
        <h2 className="mt-3 text-3xl font-black md:text-4xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function HomePage({ setCurrentPage }) {
  const featureCards = [
    {
      title: "Free Bracket Funnel",
      text: "Capture emails with a free bracket pack, then upsell the premium picks system.",
    },
    {
      title: "Premium Product",
      text: "Sell all 5 brackets plus strategy sheets and champion confidence picks.",
    },
    {
      title: "Traffic Hooks",
      text: "Use short-form social content to drive clicks before tip-off.",
    },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1 text-sm font-medium text-[#8A6A12]">
            Multi-page seasonal digital product funnel
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
            5 March Madness Brackets — <span className="italic text-[#8A6A12]">Built to Capture Leads and Sell</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
            This site is structured like a real campaign with separate pages for your offer flow: Home, Free Download, Premium Pack, and Thank You.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentPage("free")}
              className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              Go to Free Download
            </button>
            <button
              onClick={() => setCurrentPage("premium")}
              className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5"
            >
              View Premium Pack
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6A12]">Best overall champion path</div>
            <div className="text-3xl font-black">Bracket 1 — Safe Favorites</div>
            <div className="mt-3 text-neutral-700">Champion pick: <span className="font-bold">UConn</span></div>
            <div className="mt-1 text-neutral-700">Best region to produce champion: <span className="font-bold">East</span></div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="font-semibold">Final Four</div>
                <div className="mt-2 text-neutral-600">UConn, Kansas, Houston, Purdue</div>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="font-semibold">Offer Flow</div>
                <div className="mt-2 text-neutral-600">Free lead magnet → email → premium upsell</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <div key={card.title} className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5">
                <div className="text-lg font-black">{card.title}</div>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Site map" title="Pages included in this build">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Home", "Campaign overview and traffic entry point."],
            ["Free Download", "Lead magnet page for name and email capture."],
            ["Premium Pack", "Core product offer and feature stack."],
            ["Thank You", "Delivery page and next-step upsell path."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-neutral-200 p-5">
              <div className="text-lg font-black">{title}</div>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{text}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function FreeDownloadPage({ formData, setFormData, setCurrentPage }) {
  const freeItems = [
    "Safe Favorites Bracket PDF",
    "Upset Special Bracket PDF",
    "Quick Champion Pick Cheat Sheet",
  ];

  return (
    <SectionShell eyebrow="Lead magnet page" title="Get 2 free brackets instantly">
      <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="max-w-2xl text-neutral-700 leading-8">
            Use this page for your email capture. Replace the button action with your real email platform or popup trigger. The structure is ready for Klaviyo, Mailchimp, ConvertKit, Shopify, or another provider.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {freeItems.map((item) => (
              <div key={item} className="rounded-2xl bg-neutral-50 p-4 text-sm font-medium text-neutral-800">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FCF8F4] p-5 text-sm leading-7 text-neutral-700">
            Suggested automation: deliver the free pack instantly, then send a premium upsell email 15 minutes later with urgency before tip-off.
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-[#FCF8F4] p-6">
          <div className="text-lg font-black">Free Download Form</div>
          <div className="mt-5 space-y-3">
            <input
              value={formData.firstName}
              onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none"
              placeholder="First name"
            />
            <input
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none"
              placeholder="Email address"
            />
            <button
              onClick={() => setCurrentPage("thankyou")}
              className="w-full rounded-2xl bg-neutral-900 px-5 py-3 font-semibold text-white"
            >
              Send Me The Free Brackets
            </button>
          </div>
          <p className="mt-4 text-xs leading-6 text-neutral-500">
            Demo flow: clicking the button routes to the Thank You page. Connect your actual form backend for production.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function PremiumPackPage() {
  const premiumItems = [
    "All 5 completed brackets",
    "Champion probability breakdown",
    "Upset strategy guide",
    "Final Four picks sheet",
    "Office pool quick-start rules",
    "Bonus social caption pack",
  ];

  return (
    <SectionShell eyebrow="Core product page" title="March Madness Winning System 2026">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
          <div className="text-sm uppercase tracking-[0.2em] text-white/70">Premium digital product</div>
          <div className="mt-3 text-5xl font-black">$9.99</div>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Replace the button below with your live Shopify, Gumroad, Stripe, Stan, or other checkout URL.
          </p>
          <button className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-neutral-900">Unlock All 5 Picks</button>
        </div>

        <div className="rounded-[2rem] bg-white p-1">
          <div className="grid gap-3 md:grid-cols-2">
            {premiumItems.map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 p-4">
                <div className="text-sm font-semibold text-neutral-900">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FCF8F4] p-5 text-sm leading-7 text-neutral-700">
            Suggested sales copy: <span className="font-semibold">“Get the complete 5-bracket system, most likely champion analysis, and upset strategy sheet before the tournament starts.”</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ThankYouPage({ formData, setCurrentPage }) {
  const greeting = useMemo(() => {
    return formData.firstName?.trim() ? `Thanks, ${formData.firstName.trim()}!` : "Thanks!";
  }, [formData.firstName]);

  return (
    <SectionShell eyebrow="Confirmation page" title={greeting}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[#FCF8F4] p-6">
          <div className="text-xl font-black">Your free bracket request is in.</div>
          <p className="mt-3 text-sm leading-7 text-neutral-700">
            In a live version, this page would confirm delivery by email and give an optional instant-access download button.
          </p>
          <div className="mt-5 text-sm text-neutral-600">
            Email captured: <span className="font-semibold">{formData.email || "your-email@example.com"}</span>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 p-6">
          <div className="text-xl font-black">Next best step</div>
          <p className="mt-3 text-sm leading-7 text-neutral-700">
            Offer the premium pack here while attention is highest. This is the ideal place for a one-click upgrade.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentPage("premium")}
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white"
            >
              View Premium Offer
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-black italic">VERVE &amp; VINE</div>
          <div className="text-sm text-neutral-500">Multi-page March Madness campaign template</div>
        </div>
        <div className="text-sm text-neutral-600">
          Replace demo buttons with your live checkout, email form, and file delivery links before launch.
        </div>
      </div>
    </footer>
  );
}

export default function VerveVineMarchMadnessPage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [formData, setFormData] = useState({ firstName: "", email: "" });

  return (
    <div className="min-h-screen bg-[#FCF8F4] text-neutral-900">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "free" && (
        <FreeDownloadPage
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "premium" && <PremiumPackPage />}
      {currentPage === "thankyou" && (
        <ThankYouPage formData={formData} setCurrentPage={setCurrentPage} />
      )}

      <Footer />
    </div>
  );
}
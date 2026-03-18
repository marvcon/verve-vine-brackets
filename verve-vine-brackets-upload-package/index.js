import { useMemo, useState } from "react";

const LINKS = {
  freeBracket: "#",
  threeBracketPack: "#",
  fiveBracketPack: "#",
  vipBundle: "#",
  etsyShop: "#",
  espnBracket: "#",
};

function NavBar({ currentPage, setCurrentPage }) {
  const links = [
    ["home", "Home"],
    ["products", "Products"],
    ["free", "Free Download"],
    ["premium", "Premium"],
    ["vip", "VIP"],
    ["thankyou", "Thank You"],
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <div className="text-2xl font-black italic tracking-wide">VERVE &amp; VINE</div>
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">March Madness Product Funnel</div>
        </div>
        <nav className="hidden flex-wrap gap-3 md:flex">
          {links.map(([key, label]) => {
            const active = currentPage === key;
            return (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-neutral-900 text-white" : "bg-white text-neutral-700 hover:-translate-y-0.5"
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

function CTAButton({ href, children, dark = true }) {
  return (
    <a
      href={href}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noreferrer" : undefined}
      className={`inline-flex rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
        dark ? "bg-neutral-900 text-white" : "border border-neutral-300 bg-white text-neutral-900"
      }`}
    >
      {children}
    </a>
  );
}

function NoticeBar() {
  return (
    <div className="border-b border-[#C9A227]/30 bg-[#C9A227]/10 px-6 py-3 text-center text-sm font-semibold text-[#8A6A12]">
      Picks lock at tip-off. Update the product links below, then redeploy and go live.
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1 text-sm font-medium text-[#8A6A12]">
            Updated launch-ready version
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            3 Proven Bracket Strategies — <span className="italic text-[#8A6A12]">One Designed to Win Your Pool</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            This updated site now includes the free bracket funnel, the 3-bracket pack, the 5-bracket premium offer, the VIP bundle, Etsy positioning, and a live ESPN bracket section.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentPage("free")}
              className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              Go to Free Download
            </button>
            <button
              onClick={() => setCurrentPage("products")}
              className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5"
            >
              View Product Stack
            </button>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-white p-4 shadow-sm">Free lead magnet</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">$7.99 to $19.99 value ladder</div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">Authority + urgency built in</div>
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
                <div className="mt-2 text-neutral-600">UConn, Houston, Tennessee, Purdue</div>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="font-semibold">Monetization</div>
                <div className="mt-2 text-neutral-600">Free → 3-pack → 5-pack → VIP</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["3-Bracket Pack", "$7.99 entry offer"],
              ["5-Bracket System", "$12.99 upsell path"],
              ["VIP Bundle", "$19.99 premium offer"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5">
                <div className="text-lg font-black">{title}</div>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Launch checklist" title="What was updated for you">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Added product stack page",
            "Added VIP bundle page",
            "Added Etsy bundle positioning",
            "Added ESPN bracket section",
            "Added clearer urgency messaging",
            "Added one place to drop all your live links",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-neutral-200 p-4 text-sm font-medium text-neutral-800">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function ProductsPage() {
  const products = [
    {
      title: "Free Bracket Lead Magnet",
      price: "Free",
      text: "Use this to collect emails and move visitors into your paid offers.",
      link: LINKS.freeBracket,
      cta: "Open Free Download",
    },
    {
      title: "3-Bracket Strategy Pack",
      price: "$7.99",
      text: "Safe, leverage, and upset brackets designed to cover multiple outcomes.",
      link: LINKS.threeBracketPack,
      cta: "Buy 3-Bracket Pack",
    },
    {
      title: "5-Bracket Winning System",
      price: "$12.99",
      text: "Expanded bracket selection with more strategic diversity and champion paths.",
      link: LINKS.fiveBracketPack,
      cta: "Buy 5-Bracket Pack",
    },
    {
      title: "VIP March Madness Bundle",
      price: "$19.99",
      text: "Your highest-value offer with strategy, champion logic, and last-minute edge notes.",
      link: LINKS.vipBundle,
      cta: "Buy VIP Bundle",
    },
    {
      title: "Etsy Product Bundle",
      price: "Marketplace",
      text: "Use your Etsy listing images and bundle copy to attract search-driven buyers.",
      link: LINKS.etsyShop,
      cta: "Open Etsy Listing",
    },
    {
      title: "Live ESPN Bracket",
      price: "Authority Asset",
      text: "Point visitors to your live bracket to add trust and keep them engaged.",
      link: LINKS.espnBracket,
      cta: "View ESPN Bracket",
    },
  ];

  return (
    <SectionShell eyebrow="Offer stack" title="Everything you are selling from one place">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.title} className="rounded-3xl border border-neutral-200 p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-[#8A6A12]">{product.price}</div>
            <div className="mt-2 text-2xl font-black">{product.title}</div>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{product.text}</p>
            <div className="mt-5">
              <CTAButton href={product.link}>{product.cta}</CTAButton>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function FreeDownloadPage({ formData, setFormData, setCurrentPage }) {
  return (
    <SectionShell eyebrow="Lead magnet page" title="Get 2 free brackets instantly">
      <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="max-w-2xl text-neutral-700 leading-8">
            This page is ready for your email capture flow. Connect your email platform when you are ready, or use the direct free download link for a faster launch.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Safe Favorites Bracket PDF",
              "Upset Special Bracket PDF",
              "Quick Champion Pick Cheat Sheet",
              "Upsell path to paid bundles",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-neutral-50 p-4 text-sm font-medium text-neutral-800">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={LINKS.freeBracket}>Open Free Bracket Link</CTAButton>
            <button
              onClick={() => setCurrentPage("premium")}
              className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
            >
              Skip to Paid Offers
            </button>
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
            Demo flow: this routes to Thank You. Replace with your real email form later if needed.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function PremiumPackPage() {
  return (
    <SectionShell eyebrow="Core product page" title="March Madness Winning System">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
          <div className="text-sm uppercase tracking-[0.2em] text-white/70">Premium digital product</div>
          <div className="mt-3 text-5xl font-black">$12.99</div>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Instant download. Use before tip-off. Replace the link below with your live checkout.
          </p>
          <div className="mt-6">
            <CTAButton href={LINKS.fiveBracketPack} dark={false}>Buy 5-Bracket Pack</CTAButton>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-1">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "All 5 completed brackets",
              "Champion probability breakdown",
              "Upset strategy guide",
              "Final Four picks sheet",
              "Office pool quick-start rules",
              "Bonus caption pack",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 p-4">
                <div className="text-sm font-semibold text-neutral-900">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FCF8F4] p-5 text-sm leading-7 text-neutral-700">
            Available until tip-off. Position this as the main upsell after the free download.
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function VIPPage() {
  return (
    <SectionShell eyebrow="Premium offer" title="VIP March Madness Winning Bundle">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[#C9A227] p-8 text-neutral-900 shadow-xl">
          <div className="text-sm uppercase tracking-[0.2em] text-neutral-800/70">Most popular</div>
          <div className="mt-3 text-5xl font-black">$19.99</div>
          <p className="mt-4 text-sm leading-7 text-neutral-800/80">
            This is the full system — not just picks, but the strategy behind winning.
          </p>
          <div className="mt-6">
            <CTAButton href={LINKS.vipBundle}>Buy VIP Bundle</CTAButton>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-1">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Champion probability breakdown",
              "Final Four blueprint",
              "Upset strategy system",
              "Last-minute edge adjustments",
              "Pro-level bracket mindset",
              "Best for serious bracket players",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 p-4">
                <div className="text-sm font-semibold text-neutral-900">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#FCF8F4] p-5 text-sm leading-7 text-neutral-700">
            Suggested positioning: “Use this if you want the strongest overall bracket strategy before the games begin.”
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
            In the live version, this page confirms delivery and can offer an instant-access button too.
          </p>
          <div className="mt-5 text-sm text-neutral-600">
            Email captured: <span className="font-semibold">{formData.email || "your-email@example.com"}</span>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 p-6">
          <div className="text-xl font-black">Next best step</div>
          <p className="mt-3 text-sm leading-7 text-neutral-700">
            The highest-converting move here is pushing the premium or VIP offer immediately.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentPage("vip")}
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white"
            >
              View VIP Offer
            </button>
            <button
              onClick={() => setCurrentPage("products")}
              className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900"
            >
              View All Products
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
          <div className="text-sm text-neutral-500">Updated March Madness funnel package</div>
        </div>
        <div className="text-sm text-neutral-600">
          Replace the link placeholders at the top of pages/index.js, then redeploy.
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
      <NoticeBar />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "products" && <ProductsPage />}
      {currentPage === "free" && (
        <FreeDownloadPage
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "premium" && <PremiumPackPage />}
      {currentPage === "vip" && <VIPPage />}
      {currentPage === "thankyou" && (
        <ThankYouPage formData={formData} setCurrentPage={setCurrentPage} />
      )}

      <Footer />
    </div>
  );
}
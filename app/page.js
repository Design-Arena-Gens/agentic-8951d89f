import Link from "next/link";

const stores = [
  {
    name: "Flipkart",
    headline: "Deep discounts, wide reach, trusted service",
    description:
      "Flipkart stays aggressive on pricing for smartphones, appliances, and daily essentials while keeping delivery timelines tight across metros and tier-2 cities.",
    highlights: [
      "Frequent BBD and seasonal sale events that beat MRP consistently",
      "Flipkart Assured badge filters deliver vetted sellers and quick replacements",
      "SuperCoins rewards stack with bank offers for extra savings",
    ],
    trustSignals: ["4.5★ average rating", "30-day returns on most categories", "Bank-grade payment security"],
    bestFor: "Electronics, lifestyle goods, daily use items",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon India",
    headline: "Reliable logistics with Prime benefits",
    description:
      "Amazon.in pairs competitive pricing with Prime-exclusive deals, quick delivery, and responsive customer support that resolves claims swiftly.",
    highlights: [
      "Prime Lightning Deals and coupons keep effective prices low",
      "Original product guarantee via Amazon Fulfilled sellers",
      "Excellent post-purchase support and extensive review ecosystem",
    ],
    trustSignals: ["4.6★ average rating", "Hassle-free returns on Prime items", "Transparent seller ratings"],
    bestFor: "Household essentials, books, cross-category shopping",
    url: "https://www.amazon.in/",
  },
  {
    name: "Myntra",
    headline: "Fashion-first platform with authentic brands",
    description:
      "Myntra focuses on fashion with original inventory sourced directly from labels, upfront pricing, and frequent end-of-season deals that undercut retail stores.",
    highlights: [
      "Style-specific filters and fit guides reduce return friction",
      "Myntra Insider loyalty unlocks early access pricing",
      "Managed marketplace ensures genuine branded merchandise",
    ],
    trustSignals: ["4.3★ average rating", "14-day easy return policy", "Quality control with Myntra Try & Buy"],
    bestFor: "Apparel, footwear, accessories",
    url: "https://www.myntra.com/",
  },
];

const compareMetrics = [
  {
    label: "Average Savings vs. MRP",
    flipkart: "12-18%",
    amazon: "10-16%",
    myntra: "15-22% on sale events",
  },
  {
    label: "Delivery Speed (Metros)",
    flipkart: "1-3 days",
    amazon: "1-2 days with Prime",
    myntra: "2-4 days",
  },
  {
    label: "Return Experience",
    flipkart: "Doorstep pickup in 24-48h",
    amazon: "Instant pickup scheduling",
    myntra: "Pickup in 48-72h",
  },
  {
    label: "Buyer Protection",
    flipkart: "Flipkart Pay Later + purchase protection",
    amazon: "A-to-Z guarantee, secure payments",
    myntra: "100% original guarantee, size exchange",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Best Value, Zero Compromise</p>
          <h1>Trusted Online Shopping Picks for India</h1>
          <p className="lede">
            We analysed pricing history, buyer complaints, refund timelines, and product QC to shortlist stores that
            keep prices low without compromising authenticity or customer support.
          </p>
        </div>
        <div className="hero-card">
          <h2>Quick Recommendations</h2>
          <ul>
            <li>
              <span>Overall value leader</span>
              <strong>Flipkart</strong>
            </li>
            <li>
              <span>Fastest resolutions</span>
              <strong>Amazon India</strong>
            </li>
            <li>
              <span>Fashion specialist</span>
              <strong>Myntra</strong>
            </li>
          </ul>
        </div>
      </header>

      <section className="grid">
        {stores.map((store) => (
          <article key={store.name} className="card">
            <header>
              <h2>{store.name}</h2>
              <p className="headline">{store.headline}</p>
            </header>
            <p>{store.description}</p>
            <div className="pill-row" aria-label="Trust signals">
              {store.trustSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <div>
              <h3>Why it stands out</h3>
              <ul>
                {store.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <footer>
              <p className="best-for">
                <strong>Best for:</strong> {store.bestFor}
              </p>
              <Link href={store.url} className="cta" target="_blank" rel="noopener noreferrer">
                Explore {store.name}
              </Link>
            </footer>
          </article>
        ))}
      </section>

      <section className="compare">
        <h2>Side-by-Side Comparison</h2>
        <div className="comparison-table" role="table">
          <div className="comparison-header" role="row">
            <span role="columnheader">Metric</span>
            <span role="columnheader">Flipkart</span>
            <span role="columnheader">Amazon India</span>
            <span role="columnheader">Myntra</span>
          </div>
          {compareMetrics.map((metric) => (
            <div key={metric.label} className="comparison-row" role="row">
              <span role="cell">{metric.label}</span>
              <span role="cell">{metric.flipkart}</span>
              <span role="cell">{metric.amazon}</span>
              <span role="cell">{metric.myntra}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Smart Buying Checklist</h2>
        <div className="faq-grid">
          <article>
            <h3>Verify seller ratings</h3>
            <p>Stick to sellers above 4★ and more than 500 recent reviews to avoid counterfeit or poor packaging.</p>
          </article>
          <article>
            <h3>Use bank and wallet offers</h3>
            <p>Combine platform coupons with card-specific offers during sale events to drop prices 5-10% further.</p>
          </article>
          <article>
            <h3>Inspect return policies</h3>
            <p>Confirm doorstep pickup eligibility and replacement windows before placing high-ticket orders.</p>
          </article>
          <article>
            <h3>Track price history</h3>
            <p>Monitor products with price tracker extensions or wishlist alerts to buy when rates dip to all-time lows.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

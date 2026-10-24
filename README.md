# Ameyaa Industries — Industrial Chemicals & Mineral Reagents Platform

A responsive, enterprise Next.js web application for **Ameyaa Industries** (Ahmedabad, Gujarat, India), leading manufacturer and exporter of Potassium Silicate, Sodium Silicate, Limestone Lumps, Titanium Dioxide, and chemical raw materials.

Built with an enterprise design language inspired by SAP's design specification ([`DESIGN-sap.md`](DESIGN-sap.md)), engineered with clean composition patterns, accessible UI guidelines, and deployable on both **Vercel** and **Cloudflare Pages**.

---

## 🚀 Key Features

- **SAP Enterprise Design Language**:
  - Two-storey application frame: 60px neutral chrome header (`#f5f6f7`) with a secondary product navigation rail (`44px`).
  - Atmospheric navy hero gradient (`#022879` to `#0040b0`).
  - Horizontal banded zoning with white canvas intervals (`#f5f6f7`, `#eaecee`, `#ebf8ff`, `#f7f4ff`).
  - Strict corner scale: `rounded.none` (0px) on zones/chrome, `rounded.md` (8px) on controls/inputs, `rounded.lg` (12px) on media frames.
  - Active indicator in SAP Blue (`#0057d2`).
  - True black headings (`#000000`) and slate body text (`#223548`).

- **Authentic Scraped Content**:
  - Complete catalog of **50 industrial products** across **13 categories** with prices, high-resolution photography, physical state (lump, liquid, powder), and detailed chemical specifications (Baumé gravity, SiO2 %, molar ratios, applications).
  - Verified corporate details: GSTIN (`24ACAFA0567E1ZY`), DGFT IEC Code (`ACAFA0567E`), ISO 9001 tested quality standards, Ahmedabad registered address, and leadership profile (CEO Jaya Nair & Partners).
  - Customer ratings and verified client testimonials (Macpac Industries, Kottayam, Dhaka, Uzbekistan, Morbi).

- **Interactive Commercial Workflows**:
  - **Dynamic Product Filtering**: Instant search by chemical name, formula, category, and physical state (Lumps / Liquid / Powder).
  - **Interactive RFQ Basket / Quotation Modal**: Pre-fills chemical product details, quantity requirements, and packaging preferences with instant reference ID generation.
  - **Deep Chemical Specification Drawers**: Full chemical analysis and testing parameters.
  - **Persistent Floating Contact Affordance**: Quick telephone and quote access.

- **Non-Existent Page Redirection**:
  - Non-existent routes automatically redirect to the Home Page (`/`) seamlessly with client-side router replacement, meta refresh tag, and edge redirect rules.

- **Dual-Deployable Architecture (Vercel & Cloudflare)**:
  - Generates static HTML/JS/CSS bundles in `out/` via `next build` (`output: 'export'`).
  - Zero server cold starts, 100% edge CDN compatibility.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Language**: TypeScript 5
- **Styling**: Vanilla CSS with SAP Design Tokens (`src/styles/globals.css`)
- **Icons**: Lucide React
- **Typography**: Inter Variable with tailored weights (350, 400, 500, 700)

---

## 📂 Project Structure

```
├── public/
│   ├── _redirects              # Cloudflare Pages redirect rules
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO & global providers
│   │   ├── page.tsx            # Home page with 7 SAP banded zones
│   │   ├── not-found.tsx       # Auto-redirection to Home Page
│   │   ├── products/
│   │   │   ├── page.tsx        # All products catalog with search & filter
│   │   │   └── [category]/     # Category detail pages (SSG prerendered)
│   │   ├── profile/            # Company history, leadership, statutory info
│   │   ├── quality/            # QA laboratory testing & COA protocols
│   │   ├── export/             # Maritime port logistics & IEC compliance
│   │   ├── reviews/            # 3.7★ verified feedback & submission form
│   │   └── contact/            # Ahmedabad office, phone, inquiry form
│   ├── components/
│   │   ├── layout/             # Header, SecondaryNav, Footer, FloatingContact
│   │   ├── products/           # ProductCard, ProductSpecsModal
│   │   └── quote/              # QuoteContext, QuoteModal
│   ├── data/
│   │   ├── company.ts          # Authentic corporate profile & credentials
│   │   ├── products.ts         # 50 products across 13 categories
│   │   └── testimonials.ts     # Client feedback & verified ratings
│   └── styles/
│       └── globals.css         # SAP tokens, typography & responsive rules
├── DESIGN-sap.md               # Detailed SAP design specification
├── next.config.mjs             # Next.js export & image config
├── vercel.json                 # Vercel deployment settings
└── tsconfig.json               # TypeScript configuration
```

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel
1. Import this repository into Vercel.
2. Framework Preset: **Next.js**
3. Build Command: `npm run build`
4. Output Directory: `.next` (or automatic detection)
5. Deploy!

### 2. Deploying to Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select repository `ameya`.
3. Set the build settings:
   - **Framework preset**: `None` / `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Deploy site!

### 3. Deploying to Cloudflare Workers
This repository includes native Cloudflare Workers configuration via [`wrangler.jsonc`](wrangler.jsonc) and an edge worker script [`src/worker/index.ts`](src/worker/index.ts) with Cloudflare Workers Static Assets binding (`env.ASSETS`):
```bash
# Test Cloudflare Workers compilation & dry-run validation
npm run build:worker

# Deploy directly to Cloudflare Workers
npx wrangler deploy
```
- Built with `@cloudflare/workers-types` and Wrangler 4.
- Automatically handles edge asset serving, immutable chunk caching, security headers, and guarantees 404 routes redirect to Home (`/`).

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Create production static build
npm run build
```

---

## 📜 Statutory Disclosures
- **Entity**: Ameyaa Industries (Partnership Firm)
- **GSTIN**: `24ACAFA0567E1ZY`
- **DGFT IEC**: `ACAFA0567E`
- **Head Office**: 9, D/901, Ganesh Glory-II, Jagatpur Chenpur Road, Nr. BSNL Office, SG Highway, Ahmedabad - 382470, Gujarat, India.

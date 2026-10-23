'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company';
import { CATEGORIES, FEATURED_PRODUCTS, Product } from '@/data/products';
import { TESTIMONIALS } from '@/data/testimonials';
import ProductCard from '@/components/products/ProductCard';
import ProductSpecsModal from '@/components/products/ProductSpecsModal';
import { useQuote } from '@/components/quote/QuoteContext';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Factory,
  Globe2,
  FlaskConical,
  Award,
  FileCheck,
  Truck,
  Sparkles,
  Phone,
  Layers,
  FileText,
  Star
} from 'lucide-react';

export default function HomePage() {
  const { openQuote } = useQuote();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          ZONE 1: ATMOSPHERIC NAVY HERO (per DESIGN-sap.md hero spec)
          Background: var(--colors-navy) to var(--colors-primary-deep)
          Square corners, full-bleed band
      ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #022879 0%, #0040b0 75%, #0057d2 100%)',
          color: 'var(--colors-on-primary)',
          paddingTop: 'var(--spacing-page)',
          paddingBottom: 'var(--spacing-page)',
          position: 'relative',
          overflow: 'hidden'
        }}
        id="hero-zone"
      >
        {/* Subtle technical grid pattern for enterprise texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.35,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'center'
            }}
            className="hero-grid"
          >
            {/* Left Column: Hero Text */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.14)',
                  padding: '6px 14px',
                  borderRadius: 'var(--rounded-md)',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.25)'
                }}
              >
                <ShieldCheck size={16} color="#6bc0ff" />
                <span style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.2px' }}>
                  IndiaMART TrustSEAL Verified • GSTIN: {COMPANY_DATA.gstin}
                </span>
              </div>

              <h1
                style={{
                  fontSize: '44px',
                  fontWeight: 700,
                  lineHeight: '1.15',
                  letterSpacing: '-0.5px',
                  color: 'var(--colors-on-primary)',
                  marginBottom: '18px'
                }}
                className="hero-main-title"
              >
                Potassium Silicate & Sodium Silicate Manufacturer & Global Exporter
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '28px',
                  maxWidth: '620px'
                }}
              >
                Ameyaa Industries supplies high-purity soluble silicates, mineral reagents, limestone lumps, and chemical intermediates from Ahmedabad, Gujarat to domestic manufacturers and global industries across 5+ countries.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }} className="hero-cta-group">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="btn"
                  style={{
                    backgroundColor: 'var(--colors-canvas)',
                    color: 'var(--colors-primary-deep)',
                    fontWeight: 600,
                    padding: '12px 22px',
                    minHeight: '44px',
                    borderRadius: 'var(--rounded-md)',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  id="hero-request-quote-btn"
                >
                  <FileText size={17} /> Request Direct Factory Quote
                </button>

                <Link
                  href="/products"
                  className="btn"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: 'var(--colors-on-primary)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '12px 20px',
                    minHeight: '44px',
                    borderRadius: 'var(--rounded-md)',
                    textDecoration: 'none'
                  }}
                  id="hero-explore-catalog-btn"
                >
                  Browse 50+ Products <ArrowRight size={16} />
                </Link>
              </div>

              {/* Key Trust Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  paddingTop: '20px'
                }}
                className="hero-stats-grid"
              >
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--colors-on-primary)' }}>50+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>Industrial Products</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--colors-on-primary)' }}>5+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>Export Nations</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--colors-on-primary)' }}>73%</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>Fast Response Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Product Lockup Card (SAP Media Frame Spec) */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  color: 'var(--colors-ink)',
                  borderRadius: 'var(--rounded-lg)',
                  padding: 'var(--spacing-giant)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
                  border: '1px solid var(--colors-border-subtle)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-blue">Manufacturing Snapshot</span>
                  <span style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>Ahmedabad Plant</span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '12px' }}>
                  High-Demand Chemical Reagents
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      backgroundColor: 'var(--colors-chrome)',
                      borderRadius: 'var(--rounded-sm)'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>Soap Potassium Silicate Lumps</div>
                      <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>K2O · xSiO2 | Acid-Proof Lining</div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--colors-primary-deep)', fontSize: '15px' }}>₹ 45 / Kg</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      backgroundColor: 'var(--colors-chrome)',
                      borderRadius: 'var(--rounded-sm)'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>Titanium Dioxide Powder (Rutile)</div>
                      <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>High Opacity Pigment</div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--colors-primary-deep)', fontSize: '15px' }}>₹ 230 / Kg</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      backgroundColor: 'var(--colors-chrome)',
                      borderRadius: 'var(--rounded-sm)'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>White Limestone Lumps (Calcite)</div>
                      <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>High Purity CaCO3 &gt;95%</div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--colors-primary-deep)', fontSize: '15px' }}>₹ 900 / Tonne</div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--colors-band-blue)', padding: '12px', borderRadius: 'var(--rounded-sm)', fontSize: '13px', lineHeight: '1.4', marginBottom: '16px' }}>
                  <strong>Export Logistics:</strong> FCL / LCL shipments directly dispatched via Kandla Port and Mundra Port with full phytosanitary, MSDS, and COA documentation.
                </div>

                <button
                  type="button"
                  onClick={() => openQuote(FEATURED_PRODUCTS[0])}
                  className="btn btn-primary"
                  style={{ width: '100%', minHeight: '44px' }}
                >
                  Request Commercial Pricing Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ZONE 2: CANVAS (WHITE GROUND) - FEATURED CHEMICAL PRODUCTS
          Separated by whitespace, controls strictly flat per SAP spec
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-canvas" id="featured-products-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-giant)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="badge badge-blue" style={{ marginBottom: '8px' }}>
                Prime Catalog
              </div>
              <h2 className="sap-section-title">
                Featured Chemicals & Refined Mineral Ores
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-lead)', maxWidth: '680px', marginTop: '6px' }}>
                Batch-tested formulations manufactured to strict density, Baumé, and purity parameters. Available for immediate factory dispatch and export.
              </p>
            </div>
            <Link href="/products" className="btn btn-outline" id="view-all-products-link">
              View All 50 Products →
            </Link>
          </div>

          <div className="grid-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewSpecs={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ZONE 3: FLAT BAND (CHROME - #f5f6f7)
          Enterprise Manufacturing Capabilities & Plant Specs
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-chrome" id="manufacturing-capabilities">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <div className="badge badge-neutral" style={{ marginBottom: '8px' }}>
              Industrial Infrastructure
            </div>
            <h2 className="sap-section-title">
              Plant Capabilities & Chemical Processing Standards
            </h2>
            <p className="sap-body" style={{ color: 'var(--colors-ink-body)', marginTop: '8px' }}>
              Headquartered in Ahmedabad with dedicated furnace lines, dissolution autoclaves, and pulverization units adhering to ISO and DGFT quality benchmarks.
            </p>
          </div>

          <div className="grid-4">
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: 'var(--colors-band-blue)',
                  color: 'var(--colors-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Factory size={22} />
              </div>
              <h3 className="sap-subhead" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Soluble Silicate Synthesis
              </h3>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                High-temperature glass fusion furnaces and pressure autoclaves producing neutral and alkaline silicates with precision SiO2:Na2O and SiO2:K2O molar ratios.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: 'var(--colors-band-blue)',
                  color: 'var(--colors-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Layers size={22} />
              </div>
              <h3 className="sap-subhead" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Mineral Micronization
              </h3>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Advanced roller and ball mills producing controlled mesh limestone, calcite, dolomite, and feldspar powders from 200 to 500 mesh fineness.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: 'var(--colors-band-blue)',
                  color: 'var(--colors-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <FlaskConical size={22} />
              </div>
              <h3 className="sap-subhead" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Analytical Quality Lab
              </h3>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Every production batch is tested for Baumé gravity, viscosity, alkali content, insolubles, and purity. Certificate of Analysis (COA) issued with every shipment.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--rounded-md)',
                  backgroundColor: 'var(--colors-band-blue)',
                  color: 'var(--colors-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Truck size={22} />
              </div>
              <h3 className="sap-subhead" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Multi-Modal Dispatch
              </h3>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Fast dispatch in HDPE drums, IBC tanks, multiwall palletized bags, or bulk tankers. Proximity to Kandla and Mundra ports enables 48-hour container gating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ZONE 4: CANVAS (WHITE GROUND) - COMPLETE 13 CATEGORY DIRECTORY
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-canvas" id="all-categories-directory">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <div className="badge badge-blue" style={{ marginBottom: '8px' }}>
              Full Chemical Portfolio
            </div>
            <h2 className="sap-section-title">
              13 Comprehensive Industrial Categories
            </h2>
            <p className="sap-body" style={{ color: 'var(--colors-ink-lead)', marginTop: '8px' }}>
              Discover our complete range of liquid and powder chemicals engineered for detergency, metallurgy, construction, paper, and coatings.
            </p>
          </div>

          <div className="grid-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  border: '1px solid var(--colors-border-subtle)',
                  borderRadius: 'var(--rounded-md)',
                  padding: 'var(--spacing-giant)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.15s ease, background-color 0.15s ease'
                }}
                className="category-card-hover"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-neutral" style={{ fontSize: '12px' }}>
                    {cat.products.length} Products
                  </span>
                  <ArrowRight size={16} color="var(--colors-primary)" />
                </div>

                <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                  {cat.name}
                </h3>

                <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5', flex: 1, marginBottom: '14px' }}>
                  {cat.tagline}
                </p>

                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--colors-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Explore {cat.name} specifications →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ZONE 5: FLAT BAND (BAND BLUE - #ebf8ff)
          Global Export Reach, Port Operations & IEC Compliance
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-band-blue" id="global-export-zone">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'center'
            }}
            className="export-grid"
          >
            <div>
              <div className="badge badge-blue" style={{ marginBottom: '8px', backgroundColor: 'var(--colors-canvas)' }}>
                International Trade & Compliance
              </div>
              <h2 className="sap-section-title" style={{ marginBottom: '16px' }}>
                Worldwide Export Logistics & Maritime Gateways
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', marginBottom: '20px' }}>
                With DGFT Import Export Code (<strong>{COMPANY_DATA.iec}</strong>) and prime logistics access to Kandla Port and Mundra Port in Gujarat, Ameyaa Industries delivers bulk chemicals worldwide with flawless export compliance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--colors-primary)" />
                  <span style={{ fontSize: '15px', color: 'var(--colors-ink)' }}>
                    Export documentation: Certificate of Origin, Phytosanitary, COA & MSDS.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--colors-primary)" />
                  <span style={{ fontSize: '15px', color: 'var(--colors-ink)' }}>
                    Containerized FCL (Full Container Load) and LCL consolidated cargo.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--colors-primary)" />
                  <span style={{ fontSize: '15px', color: 'var(--colors-ink)' }}>
                    Payment options via Letter of Credit (LC), RTGS / Wire Transfer, and Escrow.
                  </span>
                </div>
              </div>

              <Link href="/export" className="btn btn-primary">
                View Export Protocols & Lead Times
              </Link>
            </div>

            {/* Export Destination Tags */}
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-lg)',
                border: '1px solid var(--colors-border-subtle)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe2 size={20} color="var(--colors-primary)" /> Active Global Export Countries
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }} className="active-countries-grid">
                {COMPANY_DATA.topExportCountries.map((c) => (
                  <div
                    key={c.country}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--colors-chrome)',
                      borderRadius: 'var(--rounded-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>{c.flag}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--colors-ink)' }}>{c.country}</div>
                      <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>{c.region}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--colors-border-subtle)',
                  paddingTop: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px'
                }}
              >
                <span>Export Turnover Share: <strong>{COMPANY_DATA.exportPercentage}</strong></span>
                <span style={{ color: 'var(--colors-success)', fontWeight: 600 }}>Zero Delay Clearance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ZONE 6: CANVAS (WHITE GROUND) - VERIFIED CLIENT TESTIMONIALS
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-canvas" id="testimonials-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-giant)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="badge badge-blue" style={{ marginBottom: '8px' }}>
                Buyer Feedback
              </div>
              <h2 className="sap-section-title">
                Verified Industrial Buyer Reviews (3.7 / 5★)
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-lead)', maxWidth: '640px', marginTop: '6px' }}>
                Real commercial feedback from domestic and international procurement managers who source bulk chemicals from Ameyaa Industries.
              </p>
            </div>
            <Link href="/reviews" className="btn btn-outline">
              Read All Reviews →
            </Link>
          </div>

          <div className="grid-3">
            {TESTIMONIALS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  border: '1px solid var(--colors-border-subtle)',
                  borderRadius: 'var(--rounded-md)',
                  padding: 'var(--spacing-giant)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--colors-ink)', marginLeft: '6px' }}>
                    {rev.rating}.0 / 5.0
                  </span>
                </div>

                <p className="sap-body" style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--colors-ink-body)', marginBottom: '16px', flex: 1 }}>
                  “{rev.feedback}”
                </p>

                <div style={{ borderTop: '1px solid var(--colors-border-subtle)', paddingTop: '12px' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--colors-ink)' }}>{rev.author}</div>
                  <div style={{ fontSize: '12px', color: 'var(--colors-primary-deep)', fontWeight: 500 }}>{rev.company}</div>
                  <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>{rev.location} • Sourced: {rev.productName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product specifications dialog */}
      <ProductSpecsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, ProductCategory } from '@/data/products';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '@/components/quote/QuoteContext';
import ProductCard from '@/components/products/ProductCard';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Phone,
  Send,
  Truck,
  Building,
  ArrowRight,
  Sparkles,
  Share2,
  Check,
  Package,
  Layers,
  FlaskConical,
  Clock,
  ExternalLink,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  category: ProductCategory;
  relatedProducts: Product[];
}

export default function ProductDetailView({
  product,
  category,
  relatedProducts
}: ProductDetailViewProps) {
  const { openQuote } = useQuote();

  // Quantity estimator state
  const [selectedQty, setSelectedQty] = useState('1000'); // 1000 Kg / 1 Tonne default
  const [selectedPackaging, setSelectedPackaging] = useState('25 Kg HDPE Bags with Poly Liner');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'export' | 'inquiry'>('specs');

  // Inline RFQ form state
  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    message: ''
  });
  const [submittedInline, setSubmittedInline] = useState(false);

  // Parse numeric price for calculator if available
  const priceMatch = product.price.match(/₹\s*(\d+)/);
  const unitPrice = priceMatch ? parseInt(priceMatch[1], 10) : null;
  const isPerTonne = product.price.toLowerCase().includes('tonne');
  
  // Calculate estimated cost
  const numQty = parseFloat(selectedQty) || 0;
  let estimatedTotal: string | null = null;
  if (unitPrice && numQty > 0) {
    if (isPerTonne) {
      estimatedTotal = `₹ ${(unitPrice * (numQty / 1000)).toLocaleString('en-IN')}`;
    } else {
      estimatedTotal = `₹ ${(unitPrice * numQty).toLocaleString('en-IN')}`;
    }
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInline(true);
  };

  // Pre-fill WhatsApp message
  const whatsappUrl = `https://wa.me/919427607773?text=${encodeURIComponent(
    `Hello Ameyaa Industries, I would like to inquire about ${product.name} (${product.price}). Required quantity: ${selectedQty} Kg, Packaging: ${selectedPackaging}. Please provide commercial quote & COA.`
  )}`;

  const specEntries = Object.entries(product.specs);

  return (
    <div style={{ backgroundColor: 'var(--colors-canvas)' }}>
      {/* ─────────────────────────────────────────────────────────────
          1. INTERIOR HERO / BREADCRUMB BAND (SAP Deep Blue)
      ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--colors-primary-deep)',
          color: 'var(--colors-on-primary)',
          paddingTop: 'var(--spacing-hero)',
          paddingBottom: 'var(--spacing-hero)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        id="product-hero-band"
      >
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '14px'
            }}
          >
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
              Home
            </Link>
            <ChevronRight size={13} />
            <Link href="/products" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
              Industrial Products
            </Link>
            <ChevronRight size={13} />
            <Link href={`/products/${category.id}`} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
              {category.name}
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.name}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: 'var(--rounded-sm)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.2px'
              }}
            >
              {product.categoryName}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#6bc0ff', fontWeight: 500 }}>
              <ShieldCheck size={14} /> TrustSEAL Verified
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)' }}>•</span>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)' }}>
              GSTIN: {COMPANY_DATA.gstin}
            </span>
          </div>

          <h1
            style={{
              fontSize: '34px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: 'var(--colors-on-primary)',
              maxWidth: '920px'
            }}
          >
            {product.name}
          </h1>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN PRODUCT OVERVIEW (CANVAS WHITE GROUND)
          Two-column layout: Media & Credentials on left, Commercial & Specs on right
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-canvas" style={{ paddingTop: '36px', paddingBottom: '48px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 480px) 1fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'start'
            }}
            className="product-main-grid"
          >
            {/* Left Column: Visual Media & High-Trust Manufacturing Highlights */}
            <div>
              {/* Product Media Box */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#f8fafc',
                  borderRadius: 'var(--rounded-lg)',
                  border: '1px solid var(--colors-border-subtle)',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '380px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden'
                }}
              >
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '340px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: 'var(--rounded-md)',
                      transition: 'transform 0.25s ease'
                    }}
                    className="product-detail-img"
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--colors-ink-meta)', padding: '40px 0' }}>
                    <FlaskConical size={64} strokeWidth={1.5} color="var(--colors-primary)" />
                    <div style={{ marginTop: '12px', fontWeight: 600, color: 'var(--colors-ink)' }}>
                      {product.name}
                    </div>
                    <div className="sap-caption">Industrial Grade Chemical Formulations</div>
                  </div>
                )}

                {/* Floating Tag */}
                <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                  <span className="badge badge-blue" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={11} /> {product.specs['Grade Standard'] || 'Industrial Grade'}
                  </span>
                </div>

                <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                  <button
                    type="button"
                    onClick={handleShare}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid var(--colors-border-subtle)',
                      borderRadius: 'var(--rounded-md)',
                      padding: '6px 10px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--colors-ink)'
                    }}
                    title="Share this product page"
                  >
                    {copiedLink ? <Check size={14} color="var(--colors-success)" /> : <Share2 size={14} />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* Manufacturing & Logistics Fast Facts */}
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: 'var(--colors-chrome)',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  padding: '18px 20px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--colors-ink-meta)', marginBottom: '12px' }}>
                  Manufacturing & Supply Assurance
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Building size={16} color="var(--colors-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Origin:</strong> Ahmedabad Manufacturing Unit, Gujarat, India
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Truck size={16} color="var(--colors-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Ports of Export:</strong> Kandla Port & Mundra Port (FCL / LCL)
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="var(--colors-success)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Quality Standard:</strong> Strict Batch Testing & Full COA Provided
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Package size={16} color="var(--colors-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Packaging:</strong> Laminated Bags, Sealed Drums, or Bulk Tankers
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Direct Box */}
              <div
                style={{
                  marginTop: '16px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid #bbf7d0',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#166534' }}>
                    Need Instant Availability?
                  </div>
                  <div style={{ fontSize: '12px', color: '#15803d', marginTop: '2px' }}>
                    Chat directly with our chemical sales engineers on WhatsApp.
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#16a34a',
                    color: '#ffffff',
                    padding: '8px 14px',
                    borderRadius: 'var(--rounded-md)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap'
                  }}
                  id="product-whatsapp-inquiry-btn"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Commercial Pricing, Quantity Calculator & Technical Specs */}
            <div>
              {/* Pricing & Commercial Terms Header */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  padding: '20px 24px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)', fontWeight: 600, textTransform: 'uppercase' }}>
                      Commercial Indicative Price
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                      <span
                        style={{
                          fontSize: '32px',
                          fontWeight: 800,
                          color: 'var(--colors-primary-deep)',
                          letterSpacing: '-0.5px'
                        }}
                      >
                        {product.price}
                      </span>
                      <span style={{ fontSize: '13px', color: 'var(--colors-ink-meta)' }}>
                        (Ex-Factory Ahmedabad)
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className="badge badge-success" style={{ fontSize: '12px' }}>
                      ● In Stock & Ready for Dispatch
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--colors-ink-meta)' }}>
                      Taxes & Freight Extra as Applicable
                    </span>
                  </div>
                </div>

                <p style={{ marginTop: '14px', fontSize: '14px', color: 'var(--colors-ink-body)', lineHeight: '1.6' }}>
                  {product.description}
                </p>
              </div>

              {/* Interactive Industrial Quantity & Price Estimator */}
              <div
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  padding: '20px 24px',
                  marginBottom: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                    Industrial Order Calculator & RFQ Customizer
                  </div>
                  <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                    Bulk Discounts Available
                  </span>
                </div>

                {/* Quick Presets */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--colors-ink-meta)', marginBottom: '6px' }}>
                    Select Order Volume:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {[
                      { label: '500 Kg', val: '500' },
                      { label: '1,000 Kg (1 Tonne)', val: '1000' },
                      { label: '5,000 Kg (5 Tonnes)', val: '5000' },
                      { label: '20,000 Kg (1 FCL Container)', val: '20000' }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setSelectedQty(opt.val)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 'var(--rounded-sm)',
                          fontSize: '12.5px',
                          fontWeight: selectedQty === opt.val ? 600 : 450,
                          backgroundColor: selectedQty === opt.val ? 'var(--colors-band-blue)' : 'var(--colors-chrome)',
                          color: selectedQty === opt.val ? 'var(--colors-primary)' : 'var(--colors-ink-body)',
                          border: `1px solid ${selectedQty === opt.val ? 'var(--colors-primary)' : 'var(--colors-border-subtle)'}`,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Quantity & Packaging row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '14px', marginBottom: '18px' }} className="calc-inputs-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--colors-ink-meta)', marginBottom: '4px' }}>
                      Custom Quantity (Kg):
                    </label>
                    <input
                      type="number"
                      value={selectedQty}
                      onChange={(e) => setSelectedQty(e.target.value)}
                      min="50"
                      step="50"
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 'var(--rounded-sm)',
                        border: '1px solid var(--colors-border-subtle)',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--colors-ink-meta)', marginBottom: '4px' }}>
                      Packaging Specification:
                    </label>
                    <select
                      value={selectedPackaging}
                      onChange={(e) => setSelectedPackaging(e.target.value)}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 'var(--rounded-sm)',
                        border: '1px solid var(--colors-border-subtle)',
                        fontSize: '13px'
                      }}
                    >
                      <option value="25 Kg HDPE Bags with Poly Liner">25 Kg HDPE Bags with Poly Liner</option>
                      <option value="50 Kg HDPE Bags">50 Kg HDPE Bags</option>
                      <option value="50 Kg Sealed Plastic Drums">50 Kg Sealed Plastic Drums</option>
                      <option value="200 Kg Heavy-Duty Steel Drums">200 Kg Heavy-Duty Steel Drums</option>
                      <option value="1,000 Ltr Composite IBC Tanks">1,000 Ltr Composite IBC Tanks</option>
                      <option value="Loose Bulk Tanker (Domestic Gujarat/India)">Loose Bulk Tanker (Domestic Gujarat/India)</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Total Display (if calculable) */}
                {estimatedTotal && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'var(--colors-band-blue)',
                      padding: '10px 16px',
                      borderRadius: 'var(--rounded-sm)',
                      marginBottom: '18px'
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--colors-primary-deep)', fontWeight: 600 }}>
                      Estimated Order Subtotal:
                    </span>
                    <span style={{ fontSize: '18px', color: 'var(--colors-primary-deep)', fontWeight: 800 }}>
                      {estimatedTotal}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => openQuote(product)}
                    className="btn btn-primary"
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      minHeight: '46px',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                    id="btn-request-formal-quote"
                  >
                    <Send size={15} />
                    <span>Request Official Quotation</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_DATA.phone}`}
                    className="btn btn-outline"
                    style={{
                      minHeight: '46px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    id="btn-call-sales-desk"
                  >
                    <Phone size={15} color="var(--colors-primary)" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </div>

              {/* Chemical Specifications Data Table */}
              <div
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--colors-chrome)',
                    padding: '12px 18px',
                    borderBottom: '1px solid var(--colors-border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={16} color="var(--colors-primary)" />
                    <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                      Technical Specifications & Parameters
                    </span>
                  </div>
                  <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                    Lab Certified
                  </span>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--colors-border-subtle)', backgroundColor: '#fafbfc' }}>
                      <td style={{ padding: '10px 18px', color: 'var(--colors-ink-meta)', width: '38%', fontWeight: 500 }}>
                        Product Category
                      </td>
                      <td style={{ padding: '10px 18px', color: 'var(--colors-ink)', fontWeight: 600 }}>
                        {product.categoryName}
                      </td>
                    </tr>
                    {specEntries.map(([key, val], idx) => (
                      <tr
                        key={key}
                        style={{
                          borderBottom: idx === specEntries.length - 1 ? 'none' : '1px solid var(--colors-border-subtle)',
                          backgroundColor: idx % 2 === 0 ? 'var(--colors-canvas)' : '#fafbfc'
                        }}
                      >
                        <td style={{ padding: '10px 18px', color: 'var(--colors-ink-meta)', fontWeight: 500 }}>
                          {key}
                        </td>
                        <td style={{ padding: '10px 18px', color: 'var(--colors-ink)', fontWeight: 600 }}>
                          {val}
                        </td>
                      </tr>
                    ))}
                    <tr style={{ backgroundColor: 'var(--colors-canvas)', borderTop: '1px solid var(--colors-border-subtle)' }}>
                      <td style={{ padding: '10px 18px', color: 'var(--colors-ink-meta)', fontWeight: 500 }}>
                        Dispatch Readiness
                      </td>
                      <td style={{ padding: '10px 18px', color: 'var(--colors-success)', fontWeight: 600 }}>
                        Ready Stock • Immediate Factory Load
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. DEEP TECHNICAL TABS & PROCESSING GUIDELINES (CHROME BAND)
      ────────────────────────────────────────────────────────────── */}
      <section className="band-zone bg-chrome" style={{ paddingTop: '40px', paddingBottom: '48px', borderTop: '1px solid var(--colors-border-subtle)' }}>
        <div className="container">
          {/* Section Heading */}
          <div style={{ marginBottom: '24px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
              Industrial Compliance
            </span>
            <h2 className="sap-section-title" style={{ fontSize: '26px' }}>
              Quality Protocol & Industrial Application Insights
            </h2>
          </div>

          {/* Tab Navigation Controls */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              borderBottom: '2px solid var(--colors-border-subtle)',
              marginBottom: '24px',
              overflowX: 'auto'
            }}
          >
            {[
              { id: 'specs', label: 'Quality Assurance & COA Standards' },
              { id: 'applications', label: 'Industrial Applications & Uses' },
              { id: 'export', label: 'Packaging, Storage & Port Export' },
              { id: 'inquiry', label: 'Instant Commercial RFQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '10px 18px',
                  fontSize: '14px',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  color: activeTab === tab.id ? 'var(--colors-primary)' : 'var(--colors-ink-meta)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: `3px solid ${activeTab === tab.id ? 'var(--colors-primary)' : 'transparent'}`,
                  cursor: 'pointer',
                  marginBottom: '-2px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: QA & COA Standards */}
          {activeTab === 'specs' && (
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                padding: 'var(--spacing-giant)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '14px' }}>
                Batch Testing & Laboratory Analytical Benchmarks
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '20px' }}>
                At Ameyaa Industries, each production lot of {product.name} undergoes systematic physicochemical analysis in our Ahmedabad internal QC laboratory. We verify chemical purity, molar balance (SiO2 to alkali oxide ratio), moisture content, and particle sizing prior to dispatch.
              </p>

              <div className="grid-3" style={{ gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-ink)', marginBottom: '6px' }}>
                    1. Density & Ratio Testing
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    Hydrometer testing for liquid Baume density and acid-base titration to guarantee exact SiO2:K2O / SiO2:Na2O proportions.
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-ink)', marginBottom: '6px' }}>
                    2. Insoluble Matter & Clarity
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    Gravimetric assessment to ensure low insoluble matter, guaranteeing uninterrupted spray and mixing in automated production.
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-ink)', marginBottom: '6px' }}>
                    3. Certificate of Analysis (COA)
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    Every batch comes stamped with batch number, manufacturing date, expiry, tested parameters, and authorized chemist sign-off.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Applications */}
          {activeTab === 'applications' && (
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                padding: 'var(--spacing-giant)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '14px' }}>
                Major Industrial Application Domains
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '20px' }}>
                {product.name} is formulated for reliable performance across a broad spectrum of manufacturing sectors in India and overseas export markets:
              </p>

              <div className="grid-3" style={{ gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-primary)', marginBottom: '4px' }}>
                    Welding & Refractory
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    Crucial binder in arc welding flux coatings, refractory mortars, acid-resistant bricks, and heat-resistant masonry cements.
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-primary)', marginBottom: '4px' }}>
                    Detergent & Cleansers
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    Acts as an effective builder, saponification catalyst, and corrosion inhibitor for laundry bars, powders, and industrial degreasers.
                  </div>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-primary)', marginBottom: '4px' }}>
                    Construction & Geopolymers
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                    High-strength activator for eco-friendly geopolymer concrete, chemical soil grouting, and tunnel stabilization slurries.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Export & Packaging */}
          {activeTab === 'export' && (
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                padding: 'var(--spacing-giant)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '14px' }}>
                Packaging Specs, Storage Guidelines & Maritime Logistics
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '20px' }}>
                Ameyaa Industries exports industrial chemicals across 5+ countries including the UAE, Oman, Sri Lanka, Bangladesh, and Central Asian markets via Kandla and Mundra ports.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '20px' }} className="grid-2">
                <div style={{ border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', padding: '16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>Packaging Standards</div>
                  <ul style={{ paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--colors-ink-body)' }}>
                    <li>25 kg & 50 kg multi-ply paper or HDPE bags with LDPE moisture liner.</li>
                    <li>50 kg / 200 kg heavy-gauge UN-certified HDPE and epoxy-lined steel drums.</li>
                    <li>1,000 Litre intermediate bulk containers (IBC) on palletized frames.</li>
                    <li>Full container load (FCL) shrink-wrapped & palletized per ISPM-15 guidelines.</li>
                  </ul>
                </div>

                <div style={{ border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', padding: '16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>Storage & Safety</div>
                  <ul style={{ paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--colors-ink-body)' }}>
                    <li>Store in cool, sheltered, well-ventilated warehouse premises.</li>
                    <li>Keep containers tightly closed to prevent carbonation and crusting.</li>
                    <li>Protect from freezing and direct solar radiation.</li>
                    <li>Full Material Safety Data Sheet (MSDS) provided with every consignment.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Inline RFQ Form */}
          {activeTab === 'inquiry' && (
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                padding: 'var(--spacing-giant)',
                maxWidth: '720px'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                Quick Direct Commercial RFQ for {product.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--colors-ink-body)', marginBottom: '18px' }}>
                Submit your commercial requirement directly to Ameyaa Industries sales management. We respond within 4 business hours.
              </p>

              {submittedInline ? (
                <div style={{ padding: '24px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--rounded-md)', textAlign: 'center' }}>
                  <CheckCircle2 size={36} color="#16a34a" style={{ margin: '0 auto 12px auto' }} />
                  <div style={{ fontWeight: 700, fontSize: '16px', color: '#166534' }}>
                    Inquiry Transmitted Successfully!
                  </div>
                  <p style={{ fontSize: '13px', color: '#15803d', marginTop: '6px' }}>
                    Thank you. Reference ID: <strong>RFQ-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our commercial desk will contact you shortly with the formal proforma invoice.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="form-input"
                        style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', fontSize: '13px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="form-input"
                        style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', fontSize: '13px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Business Email *</label>
                      <input
                        type="email"
                        required
                        value={inlineForm.email}
                        onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="form-input"
                        style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', fontSize: '13px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Company Name</label>
                      <input
                        type="text"
                        value={inlineForm.company}
                        onChange={(e) => setInlineForm({ ...inlineForm, company: e.target.value })}
                        placeholder="Enter company name"
                        className="form-input"
                        style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', fontSize: '13px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                      Requirement Details & Destination Port / City
                    </label>
                    <textarea
                      rows={3}
                      value={inlineForm.message}
                      onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                      placeholder={`Need ${selectedQty} Kg of ${product.name} in ${selectedPackaging}. Delivery to Mundra Port / Ahmedabad.`}
                      className="form-input"
                      style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-sm)', fontSize: '13px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', alignSelf: 'flex-start', minHeight: '44px' }}
                  >
                    Submit Formal RFQ
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. RELATED PRODUCTS IN SAME PORTFOLIO (CANVAS)
      ────────────────────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="band-zone bg-canvas" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge badge-neutral" style={{ marginBottom: '6px' }}>
                  Portfolio Exploration
                </span>
                <h2 className="sap-section-title" style={{ fontSize: '24px' }}>
                  Related {category.name} Grades
                </h2>
                <p className="sap-body" style={{ color: 'var(--colors-ink-meta)', fontSize: '14px', marginTop: '4px' }}>
                  Compare alternative specifications, physical states, and formulas within the {category.name} collection.
                </p>
              </div>

              <Link
                href={`/products/${category.id}`}
                className="btn btn-outline"
                style={{ fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>View All in {category.name}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid-4">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

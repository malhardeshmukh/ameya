import React from 'react';
import Link from 'next/link';
import { CATEGORIES, ALL_PRODUCTS } from '@/data/products';
import {
  ChevronRight,
  Layers,
  FileText,
  Building,
  ShieldCheck,
  Globe2,
  Star,
  Phone,
  ArrowRight,
  ExternalLink,
  Package
} from 'lucide-react';

export const metadata = {
  title: 'Sitemap & Chemical Product Directory | Ameyaa Industries',
  description: 'Complete sitemap and product index of Ameyaa Industries. Explore all 13 chemical categories and 50 certified chemical grades, soluble silicates, and mineral reagents.',
  alternates: {
    canonical: '/sitemap'
  }
};

export default function SitemapPage() {
  const mainPages = [
    {
      title: 'Home / Corporate Overview',
      href: '/',
      description: 'Overview of Ameyaa Industries, core chemical manufacturing capabilities, and industrial reagents.',
      icon: Building
    },
    {
      title: 'Industrial Chemicals Catalog',
      href: '/products',
      description: 'Comprehensive 50-grade chemical catalog with interactive physical form and keyword filtering.',
      icon: Package
    },
    {
      title: 'Company Profile & Leadership',
      href: '/profile',
      description: 'Manufacturing facility details, leadership profile (CEO Jaya Nair & Partners), and GST/IEC credentials.',
      icon: FileText
    },
    {
      title: 'Quality Assurance & QC Laboratory',
      href: '/quality',
      description: 'In-house chemical analysis, Baume density testing, molar ratio titration, and COA documentation.',
      icon: ShieldCheck
    },
    {
      title: 'Global Maritime Export Logistics',
      href: '/export',
      description: 'Export shipping via Kandla and Mundra ports (FCL / LCL), Incoterms 2020, and international freight.',
      icon: Globe2
    },
    {
      title: 'Verified Client Reviews',
      href: '/reviews',
      description: 'Direct commercial feedback and buyer ratings from industrial partners in India and overseas.',
      icon: Star
    },
    {
      title: 'Factory Contact & Sales Desk',
      href: '/contact',
      description: 'Ahmedabad registered office, factory directions, direct telephone desk, and commercial RFQ form.',
      icon: Phone
    }
  ];

  return (
    <>
      {/* Interior Hero Band (SAP Deep Blue) */}
      <section
        style={{
          backgroundColor: 'var(--colors-primary-deep)',
          color: 'var(--colors-on-primary)',
          paddingTop: 'var(--spacing-hero)',
          paddingBottom: 'var(--spacing-hero)'
        }}
        id="sitemap-hero-band"
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Sitemap</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Website Index & Chemical Directory
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Structured overview of all corporate pages, 13 chemical categories, and 50 dedicated product specifications manufactured by Ameyaa Industries.
          </p>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        {/* XML Sitemap quick banner */}
        <div
          style={{
            backgroundColor: 'var(--colors-band-blue)',
            border: '1px solid var(--colors-border-subtle)',
            borderRadius: 'var(--rounded-md)',
            padding: '16px 20px',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--colors-primary-deep)' }}>
              Looking for Search Engine Indexing (XML)?
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--colors-ink-body)', marginTop: '2px' }}>
              We provide a continuously updated machine-readable XML sitemap for automated web crawlers.
            </div>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{
              fontSize: '13px',
              padding: '6px 12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Open sitemap.xml</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* 1. Primary Pages */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Layers size={20} color="var(--colors-primary)" />
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--colors-ink)' }}>
              Corporate & Commercial Sections
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {mainPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  style={{
                    backgroundColor: 'var(--colors-canvas)',
                    border: '1px solid var(--colors-border-subtle)',
                    borderRadius: 'var(--rounded-md)',
                    padding: '18px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.15s ease'
                  }}
                  className="sitemap-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: 'var(--rounded-sm)',
                        backgroundColor: 'var(--colors-band-blue)',
                        color: 'var(--colors-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-primary-deep)' }}>
                      {page.title}
                    </div>
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--colors-ink-body)', lineHeight: '1.4' }}>
                    {page.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2. Chemical Categories & All 50 Dedicated Product Pages */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Package size={20} color="var(--colors-primary)" />
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--colors-ink)' }}>
              Complete Chemical Products Index ({ALL_PRODUCTS.length} Grades across {CATEGORIES.length} Categories)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                style={{
                  backgroundColor: 'var(--colors-chrome)',
                  border: '1px solid var(--colors-border-subtle)',
                  borderRadius: 'var(--rounded-md)',
                  padding: '20px 24px'
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--colors-border-subtle)',
                    marginBottom: '16px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Link
                        href={`/products/${cat.id}`}
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: 'var(--colors-primary-deep)',
                          textDecoration: 'none'
                        }}
                      >
                        {cat.name}
                      </Link>
                      <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                        {cat.products.length} Products
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--colors-ink-meta)', marginTop: '4px', maxWidth: '720px' }}>
                      {cat.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/products/${cat.id}`}
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--colors-primary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>View Category Hub</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Products in this category */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '10px'
                  }}
                >
                  {cat.products.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${cat.id}/${prod.id}`}
                      style={{
                        backgroundColor: 'var(--colors-canvas)',
                        padding: '10px 14px',
                        borderRadius: 'var(--rounded-sm)',
                        border: '1px solid var(--colors-border-subtle)',
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'border-color 0.15s ease'
                      }}
                      className="sitemap-product-link"
                    >
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--colors-ink)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {prod.name}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--colors-ink-meta)' }}>
                          {prod.specs['Form'] || prod.specs['Packaging Size'] || 'Industrial Grade'}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--colors-primary-deep)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        {prod.price}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

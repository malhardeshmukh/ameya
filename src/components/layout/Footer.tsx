'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_DATA, getWhatsAppQuoteUrl } from '@/data/company';
import { CATEGORIES } from '@/data/products';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, Globe, Building } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--colors-band)',
        color: 'var(--colors-ink-nav)',
        borderTop: '1px solid var(--colors-border-subtle)',
        marginTop: 'auto'
      }}
      id="enterprise-footer"
    >
      <div
        className="container"
        style={{
          paddingTop: 'var(--spacing-band)',
          paddingBottom: 'var(--spacing-huge)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'var(--spacing-max)',
            marginBottom: 'var(--spacing-huge)'
          }}
          className="footer-grid"
        >
          {/* Column 1: Company & Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--colors-primary)',
                  borderRadius: 'var(--rounded-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--colors-on-primary)',
                  fontWeight: 700,
                  fontSize: '16px'
                }}
              >
                A
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--colors-ink)' }}>
                {COMPANY_DATA.name}
              </span>
            </div>
            <p className="sap-caption" style={{ lineHeight: '1.6', marginBottom: '16px', color: 'var(--colors-ink-body)' }}>
              Leading manufacturer and global exporter of high-grade soluble silicates, mineral ores, and industrial chemical raw materials based in Ahmedabad, Gujarat, India.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--colors-success)" />
                <span style={{ color: 'var(--colors-ink)' }}><strong>Certified Chemical Exporter</strong></span>
              </div>
              <div><strong>GSTIN:</strong> {COMPANY_DATA.gstin}</div>
              <div><strong>DGFT IEC:</strong> {COMPANY_DATA.iec}</div>
              <div><strong>Legal Firm:</strong> {COMPANY_DATA.legalStatus}</div>
              <div><strong>Established:</strong> {COMPANY_DATA.establishmentYear}</div>
            </div>
          </div>

          {/* Column 2: Core Chemical Products */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Product Portfolios
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              {CATEGORIES.slice(0, 8).map(cat => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.id}`}
                    style={{
                      color: 'var(--colors-ink-body)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colors-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colors-ink-body)')}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  style={{
                    color: 'var(--colors-primary)',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  View All 13 Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Global Trade */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Corporate & Export
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <li>
                <Link href="/profile" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  Company Profile & Management
                </Link>
              </li>
              <li>
                <Link href="/quality" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  Quality Control & Lab Testing
                </Link>
              </li>
              <li>
                <Link href="/export" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  Export Documentation & Ports
                </Link>
              </li>
              <li>
                <Link href="/reviews" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  Verified Client Reviews (3.7 / 5)
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  Factory Locations & Visits
                </Link>
              </li>
              <li>
                <Link href="/sitemap" style={{ color: 'var(--colors-ink-body)', textDecoration: 'none' }}>
                  HTML Sitemap & Directory
                </Link>
              </li>
            </ul>

            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '6px' }}>
                Major Export Destinations:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {COMPANY_DATA.topExportCountries.map(c => (
                  <span key={c.country} className="badge badge-neutral" style={{ fontSize: '12px' }}>
                    {c.flag} {c.country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Factory Hub */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Head Office & Plant
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--colors-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  {COMPANY_DATA.registeredAddress.line1}, {COMPANY_DATA.registeredAddress.line2}, {COMPANY_DATA.registeredAddress.landmark}, {COMPANY_DATA.registeredAddress.highway}, {COMPANY_DATA.registeredAddress.city} - {COMPANY_DATA.registeredAddress.pincode}, Gujarat, India
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--colors-primary)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  style={{ color: 'var(--colors-ink)', textDecoration: 'none', fontWeight: 600 }}
                >
                  {COMPANY_DATA.formattedPhone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <WhatsAppIcon size={18} color="#16a34a" />
                <a
                  href={getWhatsAppQuoteUrl({ intent: 'Footer WhatsApp Commercial Desk' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#166534', textDecoration: 'none', fontWeight: 600 }}
                >
                  WhatsApp Quotation Desk
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--colors-primary)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  style={{ color: 'var(--colors-primary-deep)', textDecoration: 'none' }}
                >
                  {COMPANY_DATA.email}
                </a>
              </div>
              <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)', marginTop: '8px', fontSize: '12px' }}>
                <div><strong>Logistics Gateway:</strong> Kandla / Mundra Sea Ports</div>
                <div><strong>Quality Assurance:</strong> 100% Batch Laboratory Tested</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div
          style={{
            borderTop: '1px solid var(--colors-border-subtle)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            color: 'var(--colors-ink-meta)',
            gap: '12px'
          }}
        >
          <div>
            © {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved. GST Registered in Gujarat, India.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 14px', alignItems: 'center' }}>
            <span>IEC Code: {COMPANY_DATA.iec}</span>
            <span>•</span>
            <span>GSTIN: {COMPANY_DATA.gstin}</span>
            <span>•</span>
            <Link
              href="/sitemap"
              style={{ color: 'var(--colors-ink-meta)', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--colors-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--colors-ink-meta)')}
              id="footer-bottom-sitemap-link"
            >
              Sitemap
            </Link>
            <span>•</span>
            <span>Secure Commercial B2B Settlement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

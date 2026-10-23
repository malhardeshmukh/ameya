'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '../quote/QuoteContext';
import { Search, Phone, Shield, FileText, Globe, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const { openQuote, items } = useQuote();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--colors-chrome)', borderBottom: '1px solid var(--colors-border-subtle)' }}>
      {/* 60px Top-Storey Application Frame */}
      <div
        style={{
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 var(--spacing-giant)',
          gap: 'var(--spacing-wide)'
        }}
      >
        {/* Brand Lockup */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            flexShrink: 0
          }}
          id="brand-logo-link"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: 'var(--colors-primary)',
              borderRadius: 'var(--rounded-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--colors-on-primary)',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.5px'
            }}
          >
            A
          </div>
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--colors-ink)',
                letterSpacing: '-0.2px',
                lineHeight: '1.2'
              }}
            >
              {COMPANY_DATA.name}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--colors-ink-meta)',
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                lineHeight: '1'
              }}
            >
              Chemicals & Minerals • Ahmedabad
            </div>
          </div>
        </Link>

        {/* Global Quick Search */}
        <form
          onSubmit={handleSearch}
          style={{
            flex: '1 1 320px',
            maxWidth: '460px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
          className="header-search-form"
        >
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '12px',
              color: 'var(--colors-ink-meta)'
            }}
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Potassium Silicate, Sodium Silicate, Limestone, TiO2..."
            style={{
              width: '100%',
              height: '38px',
              paddingLeft: '36px',
              paddingRight: '12px',
              borderRadius: 'var(--rounded-md)',
              border: '1px solid var(--colors-border-subtle)',
              backgroundColor: 'var(--colors-canvas)',
              fontSize: '14px',
              color: 'var(--colors-ink-body)'
            }}
            id="global-search-input"
          />
        </form>

        {/* Trust Badges & Direct Hotline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              lineHeight: '1.2'
            }}
            className="header-hotline-box"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="badge badge-success" style={{ fontSize: '11px', padding: '2px 6px' }}>
                <Shield size={10} /> TrustSEAL
              </span>
              <span style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>
                GST: 24ACAFA0567E1ZY
              </span>
            </div>
            <a
              href={`tel:${COMPANY_DATA.phone}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--colors-primary-deep)',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none'
              }}
              id="header-phone-link"
            >
              <Phone size={14} /> {COMPANY_DATA.formattedPhone}
            </a>
          </div>

          {/* Request Quote Button */}
          <button
            onClick={() => openQuote()}
            className="btn btn-primary"
            style={{
              height: '38px',
              padding: '8px 16px',
              fontSize: '14px'
            }}
            id="header-rfq-button"
          >
            <FileText size={15} />
            <span>RFQ Basket</span>
            {items.length > 0 && (
              <span
                style={{
                  backgroundColor: 'var(--colors-on-primary)',
                  color: 'var(--colors-primary)',
                  borderRadius: '10px',
                  padding: '1px 6px',
                  fontSize: '11px',
                  fontWeight: 700
                }}
              >
                {items.length}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--colors-ink)'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

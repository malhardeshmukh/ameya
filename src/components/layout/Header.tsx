'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '../quote/QuoteContext';
import {
  Phone,
  FileText,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Search,
  ArrowRight
} from 'lucide-react';

export default function Header() {
  const { openQuote, items } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Products', href: '/products', badge: '50' },
    { label: 'Profile & Plant', href: '/profile' },
    { label: 'Quality & Lab', href: '/quality' },
    { label: 'Global Exports', href: '/export' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--colors-border-subtle)',
        width: '100%'
      }}
      id="main-enterprise-navbar"
    >
      <div
        className="container"
        style={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--spacing-giant)'
        }}
      >
        {/* Brand Logo & Identification */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            flexShrink: 0
          }}
          id="nav-brand-logo"
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
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--colors-ink)',
                letterSpacing: '0.2px',
                lineHeight: '1.2'
              }}
            >
              AMEYAA INDUSTRIES
            </div>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--colors-ink-meta)',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                lineHeight: '1'
              }}
            >
              Chemicals & Minerals • Ahmedabad
            </div>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          className="desktop-nav-links"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? 'var(--colors-primary)' : 'var(--colors-ink-body)',
                  textDecoration: 'none',
                  borderRadius: 'var(--rounded-sm)',
                  backgroundColor: isActive ? 'var(--colors-band-blue)' : 'transparent',
                  transition: 'background-color 0.15s ease, color 0.15s ease'
                }}
                className="nav-link-item"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      backgroundColor: isActive ? 'var(--colors-primary)' : 'var(--colors-chrome)',
                      color: isActive ? 'var(--colors-on-primary)' : 'var(--colors-ink-meta)',
                      borderRadius: '10px',
                      padding: '1px 6px'
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Direct Phone & Request Quote Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          {/* Direct Sales Hotline */}
          <a
            href={`tel:${COMPANY_DATA.phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--colors-ink)',
              textDecoration: 'none',
              padding: '6px 10px',
              borderRadius: 'var(--rounded-md)',
              border: '1px solid var(--colors-border-subtle)'
            }}
            className="header-phone-btn"
            id="nav-phone-call"
            title="Call Factory Sales"
          >
            <Phone size={15} color="var(--colors-primary)" />
            <span>{COMPANY_DATA.formattedPhone}</span>
          </a>

          {/* Request Quote Button */}
          <button
            type="button"
            onClick={() => openQuote()}
            className="btn btn-primary"
            style={{
              height: '42px',
              padding: '8px 18px',
              fontSize: '14px',
              gap: '8px'
            }}
            id="nav-rfq-button"
          >
            <FileText size={16} />
            <span>Request Quote</span>
            {items.length > 0 && (
              <span
                style={{
                  backgroundColor: 'var(--colors-on-primary)',
                  color: 'var(--colors-primary)',
                  borderRadius: '10px',
                  padding: '1px 7px',
                  fontSize: '11px',
                  fontWeight: 700
                }}
              >
                {items.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--colors-ink)',
              padding: '6px'
            }}
            className="mobile-menu-trigger"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--colors-canvas)',
            borderTop: '1px solid var(--colors-border-subtle)',
            padding: 'var(--spacing-giant)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
          className="mobile-drawer-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? 'var(--colors-primary)' : 'var(--colors-ink)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid var(--colors-chrome)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{link.label}</span>
              {link.badge && <span className="badge badge-neutral">{link.badge}</span>}
            </Link>
          ))}
          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={`tel:${COMPANY_DATA.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--colors-primary)',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} /> Direct Hotline: {COMPANY_DATA.formattedPhone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote();
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '6px' }}
            >
              <FileText size={16} /> Request Commercial Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

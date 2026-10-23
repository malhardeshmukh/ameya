'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_DATA } from '@/data/company';
import { CATEGORIES } from '@/data/products';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Package,
  ArrowRight,
  Layers
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeCatId, setActiveCatId] = useState(CATEGORIES[0]?.id || 'potassium-silicate');
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileExpandedCatId, setMobileExpandedCatId] = useState<string | null>(CATEGORIES[0]?.id || null);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Products', href: '/products', badge: '50' },
    { label: 'Profile & Plant', href: '/profile' },
    { label: 'Quality & Lab', href: '/quality' },
    { label: 'Global Exports', href: '/export' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' }
  ];

  const activeCategory = CATEGORIES.find((c) => c.id === activeCatId) || CATEGORIES[0];

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 220);
  };

  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

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
          gap: 'var(--spacing-giant)',
          position: 'relative'
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
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--colors-ink)',
                letterSpacing: '0.2px',
                lineHeight: '1.2'
              }}
              className="header-brand-title"
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
              className="header-brand-subtitle"
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

            if (link.label === 'Products') {
              return (
                <div
                  key={link.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setDesktopDropdownOpen(false)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      fontSize: '14px',
                      fontWeight: isActive || desktopDropdownOpen ? 600 : 450,
                      color: isActive || desktopDropdownOpen ? 'var(--colors-primary)' : 'var(--colors-ink-body)',
                      textDecoration: 'none',
                      borderRadius: 'var(--rounded-sm)',
                      backgroundColor: isActive || desktopDropdownOpen ? 'var(--colors-band-blue)' : 'transparent',
                      transition: 'background-color 0.15s ease, color 0.15s ease'
                    }}
                    className="nav-link-item"
                    aria-expanded={desktopDropdownOpen}
                    aria-haspopup="true"
                    id="nav-products-dropdown-trigger"
                  >
                    <span>{link.label}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: isActive || desktopDropdownOpen ? 'var(--colors-primary)' : 'var(--colors-chrome)',
                        color: isActive || desktopDropdownOpen ? 'var(--colors-on-primary)' : 'var(--colors-ink-meta)',
                        borderRadius: '10px',
                        padding: '1px 6px'
                      }}
                    >
                      {link.badge}
                    </span>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: desktopDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        color: isActive || desktopDropdownOpen ? 'var(--colors-primary)' : 'var(--colors-ink-meta)'
                      }}
                    />
                  </Link>
                </div>
              );
            }

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

        {/* Right Actions: Direct Phone Hotline & Mobile Menu Hamburger */}
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

        {/* Desktop Products Mega Dropdown */}
        {desktopDropdownOpen && (
          <div
            ref={dropdownRef}
            className="desktop-mega-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'absolute',
              top: '68px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1020px',
              maxWidth: 'calc(100% - 24px)',
              backgroundColor: 'var(--colors-canvas)',
              borderRadius: 'var(--rounded-lg)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid var(--colors-border-subtle)',
              overflow: 'hidden',
              zIndex: 600,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                padding: '12px 20px',
                backgroundColor: 'var(--colors-chrome)',
                borderBottom: '1px solid var(--colors-border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={17} color="var(--colors-primary)" />
                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--colors-ink)' }}>
                  Chemical & Mineral Product Portfolios
                </span>
                <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                  13 Categories • 50 Certified Grades
                </span>
              </div>
              <Link
                href="/products"
                onClick={() => setDesktopDropdownOpen(false)}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--colors-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>View Full 50+ Products Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Split Body: Categories on Left, Products on Right */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '310px 1fr',
                minHeight: '390px',
                maxHeight: '440px',
                backgroundColor: 'var(--colors-canvas)'
              }}
            >
              {/* Left Column: All 13 Categories */}
              <div
                className="mega-dropdown-scroll"
                style={{
                  backgroundColor: '#fafbfc',
                  borderRight: '1px solid var(--colors-border-subtle)',
                  overflowY: 'auto',
                  padding: '8px 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}
              >
                <div style={{ padding: '6px 10px 4px 10px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--colors-ink-meta)' }}>
                  Select Category
                </div>
                {CATEGORIES.map((cat) => {
                  const isSelected = activeCatId === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setActiveCatId(cat.id)}
                      onClick={() => setActiveCatId(cat.id)}
                      className="mega-category-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: 'var(--rounded-sm)',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'var(--colors-band-blue)' : 'transparent',
                        color: isSelected ? 'var(--colors-primary)' : 'var(--colors-ink)',
                        fontWeight: isSelected ? 600 : 450,
                        transition: 'background-color 0.15s ease, color 0.15s ease',
                        fontSize: '13px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: isSelected ? 'var(--colors-primary)' : 'var(--colors-hairline)',
                            flexShrink: 0
                          }}
                        />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {cat.name}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, marginLeft: '8px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            backgroundColor: isSelected ? 'var(--colors-primary)' : 'var(--colors-chrome)',
                            color: isSelected ? 'var(--colors-on-primary)' : 'var(--colors-ink-meta)',
                            borderRadius: '10px',
                            padding: '1px 6px'
                          }}
                        >
                          {cat.products.length}
                        </span>
                        <ChevronRight size={13} color={isSelected ? 'var(--colors-primary)' : 'var(--colors-ink-meta)'} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Products in Active Category */}
              <div
                className="mega-dropdown-scroll"
                style={{
                  padding: '16px 20px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Active Category Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid var(--colors-border-subtle)',
                    gap: '12px'
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--colors-ink)', margin: 0 }}>
                        {activeCategory.name}
                      </h3>
                      <span className="badge badge-blue" style={{ fontSize: '11px' }}>
                        {activeCategory.products.length} Products
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--colors-ink-meta)', margin: '3px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {activeCategory.tagline}
                    </p>
                  </div>
                  <Link
                    href={`/products/${activeCategory.id}`}
                    onClick={() => setDesktopDropdownOpen(false)}
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--colors-primary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      whiteSpace: 'nowrap',
                      padding: '5px 10px',
                      borderRadius: 'var(--rounded-sm)',
                      backgroundColor: 'var(--colors-band-blue)',
                      flexShrink: 0
                    }}
                  >
                    <span>View Category Page</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Products Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '8px'
                  }}
                >
                  {activeCategory.products.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${activeCategory.id}#${p.id}`}
                      onClick={() => setDesktopDropdownOpen(false)}
                      className="mega-product-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 10px',
                        borderRadius: 'var(--rounded-sm)',
                        border: '1px solid var(--colors-border-subtle)',
                        backgroundColor: 'var(--colors-canvas)',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease',
                        minHeight: '52px'
                      }}
                      title={`${p.name} - ${p.price}`}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '4px',
                          backgroundColor: '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          flexShrink: 0
                        }}
                      >
                        {p.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.image}
                            alt={p.name}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            loading="lazy"
                          />
                        ) : (
                          <Package size={16} color="var(--colors-primary)" />
                        )}
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 600,
                            color: 'var(--colors-ink)',
                            lineHeight: '1.25',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {p.name}
                        </div>
                        <div
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: 'var(--colors-primary-deep)',
                            marginTop: '2px'
                          }}
                        >
                          {p.price}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div
              style={{
                padding: '9px 20px',
                backgroundColor: '#f8fafc',
                borderTop: '1px solid var(--colors-border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px',
                color: 'var(--colors-ink-meta)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--colors-success)', fontWeight: 600 }}>● Ready Ex-Factory Stock</span>
                <span>•</span>
                <span>Kandla & Mundra Port Exports</span>
                <span>•</span>
                <span>Tested COA & MSDS Included</span>
              </div>
              <Link
                href="/products"
                onClick={() => setDesktopDropdownOpen(false)}
                style={{ color: 'var(--colors-primary)', fontWeight: 600, textDecoration: 'none' }}
              >
                Open Complete Product Finder →
              </Link>
            </div>
          </div>
        )}
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
            gap: '10px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto'
          }}
          className="mobile-drawer-menu"
        >
          {navLinks.map((link) => {
            if (link.label === 'Products') {
              return (
                <div key={link.href} style={{ borderBottom: '1px solid var(--colors-chrome)' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0'
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontSize: '16px',
                        fontWeight: pathname.startsWith('/products') ? 600 : 400,
                        color: pathname.startsWith('/products') ? 'var(--colors-primary)' : 'var(--colors-ink)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>Products</span>
                      <span className="badge badge-neutral">50</span>
                    </Link>

                    {/* Accordion toggle button */}
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px 8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--colors-primary)',
                        fontSize: '13px',
                        fontWeight: 600
                      }}
                      aria-label="Toggle all categories and products"
                    >
                      <span>Catalog</span>
                      <ChevronDown
                        size={16}
                        style={{
                          transform: mobileProductsOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>
                  </div>

                  {/* Expanded Categories and Products */}
                  {mobileProductsOpen && (
                    <div
                      style={{
                        backgroundColor: 'var(--colors-chrome)',
                        borderRadius: 'var(--rounded-md)',
                        padding: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                      }}
                    >
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          padding: '8px 12px',
                          backgroundColor: 'var(--colors-primary)',
                          color: 'var(--colors-on-primary)',
                          borderRadius: 'var(--rounded-sm)',
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          textAlign: 'center',
                          display: 'block'
                        }}
                      >
                        Browse All 50+ Products Catalog →
                      </Link>

                      {CATEGORIES.map((cat) => {
                        const isCatExpanded = mobileExpandedCatId === cat.id;
                        return (
                          <div
                            key={cat.id}
                            style={{
                              backgroundColor: 'var(--colors-canvas)',
                              borderRadius: 'var(--rounded-sm)',
                              border: '1px solid var(--colors-border-subtle)',
                              overflow: 'hidden'
                            }}
                          >
                            <div
                              onClick={() => setMobileExpandedCatId(isCatExpanded ? null : cat.id)}
                              style={{
                                padding: '10px 12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                backgroundColor: isCatExpanded ? 'var(--colors-band-blue)' : 'var(--colors-canvas)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                                <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--colors-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {cat.name}
                                </span>
                                <span className="badge badge-neutral" style={{ fontSize: '11px', flexShrink: 0 }}>
                                  {cat.products.length}
                                </span>
                              </div>
                              <ChevronDown
                                size={15}
                                style={{
                                  transform: isCatExpanded ? 'rotate(180deg)' : 'none',
                                  transition: 'transform 0.15s ease',
                                  color: 'var(--colors-ink-meta)',
                                  flexShrink: 0
                                }}
                              />
                            </div>

                            {/* Products inside this category on mobile */}
                            {isCatExpanded && (
                              <div
                                style={{
                                  padding: '8px 10px',
                                  borderTop: '1px solid var(--colors-border-subtle)',
                                  backgroundColor: '#fafbfc',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '6px'
                                }}
                              >
                                <Link
                                  href={`/products/${cat.id}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  style={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'var(--colors-primary)',
                                    textDecoration: 'none',
                                    paddingBottom: '4px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                  <span>Open {cat.name} Category Page</span>
                                  <ArrowRight size={12} />
                                </Link>

                                {cat.products.map((p) => (
                                  <Link
                                    key={p.id}
                                    href={`/products/${cat.id}#${p.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      padding: '8px 10px',
                                      borderRadius: '4px',
                                      textDecoration: 'none',
                                      fontSize: '12.5px',
                                      color: 'var(--colors-ink-body)',
                                      backgroundColor: 'var(--colors-canvas)',
                                      border: '1px solid var(--colors-border-subtle)',
                                      gap: '8px'
                                    }}
                                  >
                                    <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                      {p.name}
                                    </span>
                                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--colors-primary-deep)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                      {p.price}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
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
                textDecoration: 'none',
                padding: '8px 0'
              }}
            >
              <Phone size={16} /> Direct Hotline: {COMPANY_DATA.formattedPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

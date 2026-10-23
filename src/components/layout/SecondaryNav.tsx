'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SecondaryNav() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'All Products (50)', href: '/products' },
    { label: 'Potassium Silicate', href: '/products/potassium-silicate' },
    { label: 'Sodium Silicate', href: '/products/sodium-silicate' },
    { label: 'Limestone & Minerals', href: '/products/limestone-lumps-and-powder' },
    { label: 'Company Profile & Plant', href: '/profile' },
    { label: 'Quality & Testing', href: '/quality' },
    { label: 'Global Exports', href: '/export' },
    { label: 'Client Reviews (3.7★)', href: '/reviews' },
    { label: 'Contact & Factory', href: '/contact' }
  ];

  return (
    <nav
      style={{
        backgroundColor: 'var(--colors-canvas)',
        borderBottom: '1px solid var(--colors-border-subtle)',
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        WebkitOverflowScrolling: 'touch'
      }}
      aria-label="Product navigation rail"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 var(--spacing-giant)',
          height: '44px'
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '44px',
                padding: '0 16px',
                fontSize: isActive ? '15px' : '14px',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--colors-primary)' : 'var(--colors-ink-nav)',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid var(--colors-primary)' : '2px solid transparent',
                transition: 'color 0.15s ease, border-color 0.15s ease',
                flexShrink: 0
              }}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

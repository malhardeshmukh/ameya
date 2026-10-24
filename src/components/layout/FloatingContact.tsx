'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/company';
import { PhoneCall } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { useQuote } from '../quote/QuoteContext';

export default function FloatingContact() {
  const { openCart, itemCount, badgePulse } = useQuote();

  return (
    <div className="floating-contact-container">
      <a
        href={`tel:${COMPANY_DATA.phone}`}
        className="btn floating-call-btn"
        title="Direct Factory Call"
      >
        <PhoneCall size={18} color="var(--colors-primary)" />
        <span className="floating-btn-text">Call Plant</span>
      </a>

      <button
        type="button"
        onClick={openCart}
        className="btn-floating floating-quote-btn"
        id="floating-rfq-btn"
        title="Open Consolidated Quote Cart"
        style={{
          textDecoration: 'none',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <WhatsAppIcon size={22} color="#ffffff" />
          {itemCount > 0 && (
            <span
              className={`cart-bubble ${badgePulse ? 'cart-bubble-pulse' : ''}`}
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#ffffff',
                color: '#16a34a',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {itemCount}
            </span>
          )}
        </div>
        <span className="floating-quote-full">
          {itemCount > 0 ? `Quote Cart (${itemCount})` : 'Quote Cart'}
        </span>
        <span className="floating-quote-short">
          {itemCount > 0 ? `Cart (${itemCount})` : 'Cart'}
        </span>
      </button>
    </div>
  );
}

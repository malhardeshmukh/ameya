'use client';

import React from 'react';
import { useQuote } from '../quote/QuoteContext';
import { COMPANY_DATA } from '@/data/company';
import { MessageSquareText, PhoneCall } from 'lucide-react';

export default function FloatingContact() {
  const { openQuote } = useQuote();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <a
        href={`tel:${COMPANY_DATA.phone}`}
        className="btn"
        style={{
          backgroundColor: 'var(--colors-chrome)',
          color: 'var(--colors-ink-body)',
          border: '1px solid var(--colors-hairline)',
          borderRadius: 'var(--rounded-md)',
          padding: '12px 14px',
          height: '58px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}
        title="Direct Factory Call"
      >
        <PhoneCall size={18} color="var(--colors-primary)" />
        <span style={{ fontSize: '14px', fontWeight: 600 }}>Call Plant</span>
      </a>

      <button
        onClick={() => openQuote()}
        className="btn-floating"
        style={{
          position: 'static',
          boxShadow: '0 4px 16px rgba(0, 87, 210, 0.35)'
        }}
        id="floating-rfq-btn"
      >
        <MessageSquareText size={20} />
        <span>Request Instant Quote</span>
      </button>
    </div>
  );
}

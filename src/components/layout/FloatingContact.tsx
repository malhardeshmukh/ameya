'use client';

import React from 'react';
import { useQuote } from '../quote/QuoteContext';
import { COMPANY_DATA } from '@/data/company';
import { MessageSquareText, PhoneCall } from 'lucide-react';

export default function FloatingContact() {
  const { openQuote } = useQuote();

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
        onClick={() => openQuote()}
        className="btn-floating floating-quote-btn"
        id="floating-rfq-btn"
        title="Request Commercial Quote"
      >
        <MessageSquareText size={20} />
        <span className="floating-quote-full">Request Instant Quote</span>
        <span className="floating-quote-short">Quote</span>
      </button>
    </div>
  );
}

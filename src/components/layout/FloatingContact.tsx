'use client';

import React from 'react';
import { COMPANY_DATA, getWhatsAppQuoteUrl } from '@/data/company';
import { PhoneCall } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function FloatingContact() {
  const whatsappUrl = getWhatsAppQuoteUrl({ intent: 'Instant Commercial Quotation & Batch COA' });

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

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-floating floating-quote-btn"
        id="floating-rfq-btn"
        title="Request Commercial Quote on WhatsApp"
        style={{
          textDecoration: 'none',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <WhatsAppIcon size={22} color="#ffffff" />
        <span className="floating-quote-full">WhatsApp Quote</span>
        <span className="floating-quote-short">WhatsApp</span>
      </a>
    </div>
  );
}


'use client';

import React from 'react';
import { useQuote } from './QuoteContext';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export default function QuoteToast() {
  const { toastMessage, hideToast, openCart, itemCount } = useQuote();

  if (!toastMessage) return null;

  return (
    <div
      className="quote-toast"
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 1010,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        padding: '12px 18px',
        borderRadius: 'var(--rounded-md)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
        fontSize: '13.5px',
        maxWidth: 'calc(100vw - 48px)'
      }}
    >
      <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0 }} />
      <span style={{ flex: 1, fontWeight: 500 }}>{toastMessage}</span>
      <button
        type="button"
        onClick={openCart}
        style={{
          backgroundColor: 'var(--colors-primary)',
          color: '#ffffff',
          border: 'none',
          borderRadius: 'var(--rounded-sm)',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          whiteSpace: 'nowrap'
        }}
      >
        <ShoppingBag size={14} />
        <span>View Cart ({itemCount})</span>
      </button>
      <button
        type="button"
        onClick={hideToast}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex'
        }}
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}

'use client';

import React from 'react';
import { Product } from '@/data/products';
import { useQuote } from '../quote/QuoteContext';
import { X, Send, ShieldCheck, Factory, FileSpreadsheet } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';

interface ProductSpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductSpecsModal({ product, onClose }: ProductSpecsModalProps) {
  const { openQuote } = useQuote();

  if (!product) return null;

  const specEntries = Object.entries(product.specs);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(2, 40, 121, 0.6)',
        backdropFilter: 'blur(3px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-dialog-title"
    >
      <div
        style={{
          backgroundColor: 'var(--colors-canvas)',
          borderRadius: 'var(--rounded-lg)',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 16px 36px rgba(0,0,0,0.18)',
          border: '1px solid var(--colors-border-subtle)',
          padding: 'var(--spacing-max)'
        }}
        className="modal-card-box"
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-blue">{product.categoryName}</span>
              <span className="badge badge-success">
                <ShieldCheck size={12} /> Tested COA Available
              </span>
            </div>
            <h2 id="spec-dialog-title" className="sap-subhead" style={{ fontSize: '22px', fontWeight: 600 }}>
              {product.name}
            </h2>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--colors-primary-deep)', marginTop: '4px' }}>
              Price: {product.price}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--colors-ink-meta)',
              padding: '6px'
            }}
            aria-label="Close specifications"
          >
            <X size={22} />
          </button>
        </div>

        {/* Product Photo & Intro */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            backgroundColor: 'var(--colors-chrome)',
            padding: '16px',
            borderRadius: 'var(--rounded-md)',
            marginBottom: '20px'
          }}
        >
          {product.image && (
            <div
              style={{
                width: '110px',
                height: '110px',
                flexShrink: 0,
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="sap-body" style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--colors-ink-body)', marginBottom: '8px' }}>
              {product.description}
            </p>
            <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--colors-ink-meta)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Factory size={13} /> Direct Manufacturer
              </span>
              <span>•</span>
              <span>Exporter: {COMPANY_DATA.name}</span>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileSpreadsheet size={16} color="var(--colors-primary)" />
            Technical & Chemical Specifications
          </h4>

          {specEntries.length > 0 ? (
            <div className="table-responsive" style={{ border: '1px solid var(--colors-border-subtle)', borderRadius: 'var(--rounded-md)', overflowX: 'auto' }}>
              <table className="sap-table">
                <tbody>
                  {specEntries.map(([param, value]) => (
                    <tr key={param}>
                      <td style={{ width: '42%', fontWeight: 500, color: 'var(--colors-ink-lead)', backgroundColor: 'var(--colors-chrome)' }}>
                        {param}
                      </td>
                      <td style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ fontWeight: 500, color: 'var(--colors-ink-lead)', backgroundColor: 'var(--colors-chrome)' }}>
                      Packaging Options
                    </td>
                    <td>250 kg HDPE Drums / 50 kg Bags / IBC Tanks / Bulk</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500, color: 'var(--colors-ink-lead)', backgroundColor: 'var(--colors-chrome)' }}>
                      Dispatch Lead Time
                    </td>
                    <td>1 - 3 Business Days (Ex-Ahmedabad Plant)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ padding: '20px', backgroundColor: 'var(--colors-chrome)', borderRadius: 'var(--rounded-md)', fontSize: '14px' }}>
              Standard industrial grade chemical formulation. Full Certificate of Analysis (COA) and Material Safety Data Sheet (MSDS) provided upon quotation request.
            </div>
          )}
        </div>

        {/* Modal footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid var(--colors-border-subtle)', paddingTop: '16px' }}>
          <button type="button" onClick={onClose} className="btn btn-outline">
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              openQuote(product);
            }}
            className="btn btn-primary"
          >
            <Send size={15} /> Request Formal Price Quote
          </button>
        </div>
      </div>
    </div>
  );
}

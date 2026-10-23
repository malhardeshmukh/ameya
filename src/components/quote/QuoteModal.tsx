'use client';

import React, { useState } from 'react';
import { useQuote } from './QuoteContext';
import { X, CheckCircle2, Building2, Phone, Mail, FileText, Send, ShieldCheck, Trash2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';

export default function QuoteModal() {
  const { isOpen, closeQuote, items, removeItem, clearItems, selectedProduct } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: '',
    packaging: 'Industrial Drums (250 kg)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `RFQ-AMY-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    clearItems();
    closeQuote();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(2, 40, 121, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rfq-dialog-title"
    >
      <div
        style={{
          backgroundColor: 'var(--colors-canvas)',
          borderRadius: 'var(--rounded-lg)',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          border: '1px solid var(--colors-border-subtle)',
          padding: 'var(--spacing-max)'
        }}
        className="modal-card-box"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-blue">Direct Factory RFQ</span>
              <span className="sap-caption" style={{ color: 'var(--colors-success)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} /> TrustSEAL Verified
              </span>
            </div>
            <h2 id="rfq-dialog-title" className="sap-subhead" style={{ fontSize: '24px', fontWeight: 600 }}>
              Request Commercial Quotation & Specifications
            </h2>
            <p className="sap-caption" style={{ marginTop: '2px' }}>
              Direct inquiry to Ameyaa Industries, Ahmedabad. 73% response rate within 2 business hours.
            </p>
          </div>
          <button
            onClick={closeQuote}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--colors-ink-meta)',
              padding: '6px',
              borderRadius: 'var(--rounded-md)'
            }}
            aria-label="Close dialog"
            id="rfq-close-btn"
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#eafaf1',
                color: 'var(--colors-success)',
                marginBottom: '16px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 className="sap-section-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
              Inquiry Dispatched Successfully!
            </h3>
            <p className="sap-body" style={{ color: 'var(--colors-ink-body)', marginBottom: '16px' }}>
              Your inquiry reference number is <strong style={{ color: 'var(--colors-primary)' }}>{rfqNumber}</strong>.
            </p>
            <div
              style={{
                backgroundColor: 'var(--colors-chrome)',
                padding: '16px',
                borderRadius: 'var(--rounded-md)',
                textAlign: 'left',
                marginBottom: '24px',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              <div><strong>Buyer Company:</strong> {formData.company || 'Direct Buyer'}</div>
              <div><strong>Contact Person:</strong> {formData.name}</div>
              <div><strong>Phone / WhatsApp:</strong> {formData.phone}</div>
              <div><strong>Requested Chemicals:</strong> {items.map(i => i.product.name).join(', ') || 'Custom Grade'}</div>
              <div><strong>Dispatch Port / Hub:</strong> Kandla / Mundra Port / Ahmedabad Factory</div>
            </div>
            <p className="sap-caption" style={{ marginBottom: '24px' }}>
              A technical sales specialist from Ameyaa Industries will email the formal Proforma Invoice and Certificate of Analysis (COA) to {formData.email || 'your email'}.
            </p>
            <button className="btn btn-primary" onClick={handleReset} style={{ width: '100%', maxWidth: '280px' }}>
              Done & Return to Catalog
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Products in inquiry */}
            <div style={{ backgroundColor: 'var(--colors-chrome)', padding: '16px', borderRadius: 'var(--rounded-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="sap-button" style={{ fontSize: '14px', color: 'var(--colors-ink)' }}>
                  Selected Chemical Products ({items.length})
                </span>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={clearItems}
                    style={{ background: 'none', border: 'none', color: '#c00', fontSize: '13px', cursor: 'pointer' }}
                  >
                    Clear All
                  </button>
                )}
              </div>

              {items.length === 0 ? (
                <p className="sap-caption">No chemical selected yet. General quote request.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'var(--colors-canvas)',
                        padding: '10px 14px',
                        borderRadius: 'var(--rounded-md)',
                        border: '1px solid var(--colors-border-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--colors-chrome)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                          }}
                        >
                          {item.product.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ) : (
                            <FileText size={18} color="var(--colors-ink-meta)" />
                          )}
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--colors-ink)' }}>
                            {item.product.name}
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--colors-primary-deep)', fontWeight: 500 }}>
                            {item.product.price}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="badge badge-neutral" style={{ fontSize: '12px' }}>
                          Qty: {item.quantity || '1000 Kg'}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          style={{ background: 'none', border: 'none', color: 'var(--colors-ink-meta)', cursor: 'pointer', padding: '4px' }}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Buyer Contact & Requirements */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="quote-form-grid">
              <div>
                <label htmlFor="rfq-name" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Contact Person Name *
                </label>
                <input
                  id="rfq-name"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="rfq-company" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Company / Organization *
                </label>
                <input
                  id="rfq-company"
                  type="text"
                  required
                  placeholder="e.g. Global Chemicals Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="rfq-phone" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="rfq-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="rfq-email" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Business Email *
                </label>
                <input
                  id="rfq-email"
                  type="email"
                  required
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="rfq-destination" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Delivery Destination / Port
                </label>
                <input
                  id="rfq-destination"
                  type="text"
                  placeholder="e.g. Kandla Port / Colombo / Ahmedabad"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="rfq-packaging" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                  Packaging Preference
                </label>
                <select
                  id="rfq-packaging"
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-hairline)',
                    fontSize: '14px',
                    backgroundColor: 'var(--colors-canvas)'
                  }}
                >
                  <option value="Industrial Drums (250 kg)">Industrial HDPE Drums (250 kg)</option>
                  <option value="IBC Intermediate Bulk Container (1000 L)">IBC Container (1000 Liters)</option>
                  <option value="HDPE Woven Bags (50 kg)">HDPE Woven Bags (50 kg)</option>
                  <option value="Jumbo Bulk Bags (1000 kg)">Jumbo Bulk Bags (1 Tonne)</option>
                  <option value="Bulk Liquid Road Tanker">Bulk Liquid Road Tanker</option>
                  <option value="Loose Bulk Mineral Lumps">Loose Bulk Mineral Lumps</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="rfq-notes" className="sap-caption" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                Application or Technical Specifications (Optional)
              </label>
              <textarea
                id="rfq-notes"
                rows={2}
                placeholder="Specify target Baumé, molar ratio, SiO2 purity %, or required testing standards..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-hairline)',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--colors-border-subtle)', paddingTop: '16px' }}>
              <div style={{ fontSize: '13px', color: 'var(--colors-ink-meta)' }}>
                Direct Hotline: <strong style={{ color: 'var(--colors-ink)' }}>{COMPANY_DATA.formattedPhone}</strong>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" onClick={closeQuote} className="btn btn-outline" style={{ minHeight: '44px' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ minHeight: '44px' }} id="rfq-submit-btn">
                  <Send size={16} /> Submit Quotation Request
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

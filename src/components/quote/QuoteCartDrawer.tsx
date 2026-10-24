'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from './QuoteContext';
import { COMPANY_DATA } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Building2,
  Truck,
  FileCheck2,
  CheckCircle2,
  Send,
  HelpCircle
} from 'lucide-react';

const PACKAGING_OPTIONS = [
  '250 kg Heavy-Duty HDPE Drums',
  '25 kg HDPE Bags with LDPE Liner',
  '50 kg Laminated Bags',
  '1,000 Litre IBC Tote Container',
  'Bulk Road Tanker / ISO Tank',
  'Palletized ISPM-15 Stretch Wrapped'
];

const QUANTITY_PRESETS = [
  '500 Kg',
  '1,000 Kg (1 MT)',
  '3,000 Kg (3 MT)',
  '5,000 Kg (5 MT)',
  '10,000 Kg (10 MT)',
  '20,000 Kg (1 FCL)'
];

export default function QuoteCartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    itemCount,
    totalEstimatedKg,
    removeItem,
    updateQuantity,
    updatePackaging,
    updateNotes,
    clearCart,
    buyerInfo,
    setBuyerInfo
  } = useQuote();

  const [expandedSection, setExpandedSection] = useState<'items' | 'buyer'>('items');
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleStepQuantity = (productId: string, currentQty: string, deltaKg: number) => {
    const match = currentQty.match(/([\d.]+)/);
    const num = match ? parseFloat(match[1]) : 1000;
    const isTonne = currentQty.toLowerCase().includes('tonne') || currentQty.toLowerCase().includes('mt');
    const currentKg = isTonne ? num * 1000 : num;
    const newKg = Math.max(25, currentKg + deltaKg);

    if (newKg >= 1000 && newKg % 1000 === 0) {
      updateQuantity(productId, `${(newKg / 1000).toLocaleString('en-IN')} MT (${newKg.toLocaleString('en-IN')} Kg)`);
    } else {
      updateQuantity(productId, `${newKg.toLocaleString('en-IN')} Kg`);
    }
  };

  const handleSendConsolidatedWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; phone?: string } = {};

    if (!buyerInfo.name.trim()) {
      errors.name = 'Please provide your full name';
    }
    if (!buyerInfo.phone.trim()) {
      errors.phone = 'Please provide your phone / WhatsApp number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setExpandedSection('buyer');
      return;
    }

    setFormErrors({});

    const rfqId = `RFQ-AMY-${Math.floor(100000 + Math.random() * 900000)}`;
    const tonnageStr = (totalEstimatedKg / 1000).toFixed(2);

    // Build consolidated message
    let text = `*OFFICIAL CONSOLIDATED RFQ (${rfqId})*\n`;
    text += `To: Ameyaa Industries Sales Desk, Ahmedabad\n`;
    text += `Total Consignment: *${itemCount} Products (~${tonnageStr} MT)*\n\n`;

    text += `*--- CONSOLIDATED CHEMICAL ITEMS ---*\n`;
    items.forEach((item, idx) => {
      text += `\n${idx + 1}. *${item.product.name}*\n`;
      text += `   • Indicative Price: ${item.product.price}\n`;
      text += `   • Quantity Required: *${item.quantity}*\n`;
      text += `   • Packaging: ${item.packaging}\n`;
      if (item.notes && item.notes.trim()) {
        text += `   • Specs/Baumé: ${item.notes.trim()}\n`;
      }
    });

    text += `\n*--- BUYER & LOGISTICS DETAILS ---*\n`;
    text += `• Buyer Name: *${buyerInfo.name.trim()}*\n`;
    text += `• Phone / WhatsApp: *${buyerInfo.phone.trim()}*\n`;
    if (buyerInfo.company.trim()) {
      text += `• Company: ${buyerInfo.company.trim()}\n`;
    }
    if (buyerInfo.email.trim()) {
      text += `• Email: ${buyerInfo.email.trim()}\n`;
    }
    text += `• Delivery Destination: *${buyerInfo.destination || 'Ahmedabad Plant / Port Gateway'}*\n`;
    if (buyerInfo.notes && buyerInfo.notes.trim()) {
      text += `• Special Instructions: ${buyerInfo.notes.trim()}\n`;
    }

    text += `\nPlease provide formal CIF / Ex-Factory proforma invoice with analytical batch Certificate of Analysis (COA) and dispatch timeline.`;

    const targetUrl = `https://wa.me/${COMPANY_DATA.whatsappNumber || '917942784628'}?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const formattedTonnage = (totalEstimatedKg / 1000).toFixed(2);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <aside
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--rounded-md)',
                backgroundColor: 'var(--colors-band-blue)',
                color: 'var(--colors-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShoppingBag size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 id="cart-drawer-title" style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--colors-ink)' }}>
                  Quote Cart
                </h2>
                <span className="cart-bubble" style={{ fontSize: '12px', minWidth: '22px', height: '22px' }}>
                  {itemCount}
                </span>
              </div>
              <p className="sap-caption" style={{ fontSize: '12px', margin: 0 }}>
                Consolidated Factory Price Inquiry
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--colors-ink-meta)',
              padding: '8px',
              borderRadius: 'var(--rounded-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s ease'
            }}
            aria-label="Close quote cart"
            id="cart-drawer-close-btn"
          >
            <X size={22} />
          </button>
        </div>

        {/* Manufacturing & Logistics Assurance Strip */}
        <div
          style={{
            padding: '8px 22px',
            backgroundColor: '#f0fdf4',
            borderBottom: '1px solid #bbf7d0',
            fontSize: '12px',
            color: '#166534',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <ShieldCheck size={14} color="#16a34a" /> ISO 9001 Tested Quality
          </span>
          <span style={{ color: '#15803d' }}>Mundra & Kandla Ports (FCL / LCL)</span>
        </div>

        {/* Drawer Body */}
        <div className="cart-drawer-body">
          {itemCount === 0 ? (
            /* Empty State */
            <div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto 0'
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--colors-chrome)',
                  color: 'var(--colors-ink-meta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <ShoppingBag size={34} />
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                Your Quote Cart is empty
              </h3>
              <p className="sap-caption" style={{ maxWidth: '320px', lineHeight: '1.5', marginBottom: '24px' }}>
                Add soluble silicates, mineral reagents, or industrial chemicals to compile a consolidated commercial quotation with full COA.
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="btn btn-primary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 600
                }}
              >
                <span>Explore 50+ Chemical Products</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              {/* Navigation Tabs between Items & Buyer Details */}
              <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--colors-border-subtle)', paddingBottom: '8px' }}>
                <button
                  type="button"
                  onClick={() => setExpandedSection('items')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: expandedSection === 'items' ? 700 : 500,
                    color: expandedSection === 'items' ? 'var(--colors-primary)' : 'var(--colors-ink-meta)',
                    borderBottom: expandedSection === 'items' ? '2px solid var(--colors-primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>1. Chemical Items</span>
                  <span className="badge badge-blue" style={{ fontSize: '11px', padding: '1px 6px' }}>
                    {itemCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setExpandedSection('buyer')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: expandedSection === 'buyer' ? 700 : 500,
                    color: expandedSection === 'buyer' ? 'var(--colors-primary)' : 'var(--colors-ink-meta)',
                    borderBottom: expandedSection === 'buyer' ? '2px solid var(--colors-primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>2. Buyer & Port Destination</span>
                  {buyerInfo.name && buyerInfo.phone && (
                    <CheckCircle2 size={13} color="var(--colors-success)" />
                  )}
                </button>
              </div>

              {expandedSection === 'items' ? (
                /* Tab 1: Consolidated Chemical Items List */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {items.map((item, index) => (
                    <div key={item.product.id} className="cart-item-card">
                      {/* Product Thumbnail */}
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          borderRadius: 'var(--rounded-sm)',
                          backgroundColor: '#f1f5f9',
                          overflow: 'hidden',
                          flexShrink: 0,
                          position: 'relative',
                          border: '1px solid var(--colors-border-subtle)'
                        }}
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="68px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Product Info & Controls */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                          <Link
                            href={`/products/${item.product.category}/${item.product.id}`}
                            onClick={closeCart}
                            style={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: 'var(--colors-ink)',
                              textDecoration: 'none',
                              lineHeight: '1.3'
                            }}
                          >
                            {item.product.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: '#94a3b8',
                              padding: '2px',
                              display: 'flex'
                            }}
                            title={`Remove ${item.product.name}`}
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        {/* Price Tag */}
                        <div style={{ fontSize: '12px', color: 'var(--colors-primary-deep)', fontWeight: 600, marginTop: '2px' }}>
                          {item.product.price}
                        </div>

                        {/* Quantity Stepper & Preset Dropdown */}
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                          <div className="qty-stepper">
                            <button
                              type="button"
                              className="qty-stepper-btn"
                              onClick={() => handleStepQuantity(item.product.id, item.quantity, -500)}
                              title="Decrease quantity"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.product.id, e.target.value)}
                              className="qty-stepper-input"
                              title="Required quantity"
                            />
                            <button
                              type="button"
                              className="qty-stepper-btn"
                              onClick={() => handleStepQuantity(item.product.id, item.quantity, 500)}
                              title="Increase quantity"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          {/* Packaging Selector */}
                          <select
                            value={item.packaging}
                            onChange={(e) => updatePackaging(item.product.id, e.target.value)}
                            style={{
                              fontSize: '12px',
                              padding: '4px 8px',
                              borderRadius: 'var(--rounded-sm)',
                              border: '1px solid var(--colors-border-subtle)',
                              backgroundColor: 'var(--colors-canvas)',
                              color: 'var(--colors-ink-body)',
                              maxWidth: '180px'
                            }}
                          >
                            {PACKAGING_OPTIONS.map((pkg) => (
                              <option key={pkg} value={pkg}>
                                {pkg}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Technical Note / Baumé field */}
                        <div style={{ marginTop: '6px' }}>
                          <input
                            type="text"
                            placeholder="Target purity, Baumé or specs (optional)..."
                            value={item.notes || ''}
                            onChange={(e) => updateNotes(item.product.id, e.target.value)}
                            style={{
                              width: '100%',
                              fontSize: '11.5px',
                              padding: '4px 8px',
                              borderRadius: 'var(--rounded-sm)',
                              border: '1px dashed var(--colors-hairline)',
                              backgroundColor: 'transparent',
                              color: 'var(--colors-ink)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                    <button
                      type="button"
                      onClick={clearCart}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '12px',
                        color: '#ef4444',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      Clear entire cart
                    </button>

                    <Link
                      href="/products"
                      onClick={closeCart}
                      style={{
                        fontSize: '13px',
                        color: 'var(--colors-primary)',
                        textDecoration: 'none',
                        fontWeight: 600
                      }}
                    >
                      + Add More Chemicals
                    </Link>
                  </div>
                </div>
              ) : (
                /* Tab 2: Buyer & Delivery Destination Form */
                <form id="quote-buyer-form" onSubmit={handleSendConsolidatedWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ backgroundColor: 'var(--colors-chrome)', padding: '12px 14px', borderRadius: 'var(--rounded-sm)', fontSize: '12.5px', color: 'var(--colors-ink-body)' }}>
                    Your commercial contact information will be pre-filled into the consolidated WhatsApp RFQ for immediate quotation drafting.
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                      Contact Person / Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={buyerInfo.name}
                      onChange={(e) => {
                        setBuyerInfo({ ...buyerInfo, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 'var(--rounded-sm)',
                        border: formErrors.name ? '1px solid #ef4444' : '1px solid var(--colors-border-subtle)',
                        fontSize: '13.5px'
                      }}
                    />
                    {formErrors.name && (
                      <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '2px', display: 'block' }}>
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={buyerInfo.phone}
                        onChange={(e) => {
                          setBuyerInfo({ ...buyerInfo, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                        }}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          borderRadius: 'var(--rounded-sm)',
                          border: formErrors.phone ? '1px solid #ef4444' : '1px solid var(--colors-border-subtle)',
                          fontSize: '13.5px'
                        }}
                      />
                      {formErrors.phone && (
                        <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '2px', display: 'block' }}>
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Minerals Ltd"
                        value={buyerInfo.company}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          borderRadius: 'var(--rounded-sm)',
                          border: '1px solid var(--colors-border-subtle)',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                        Business Email
                      </label>
                      <input
                        type="email"
                        placeholder="purchase@company.com"
                        value={buyerInfo.email}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          borderRadius: 'var(--rounded-sm)',
                          border: '1px solid var(--colors-border-subtle)',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                        Destination Port / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kandla Port / Colombo / Mundra"
                        value={buyerInfo.destination}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, destination: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          borderRadius: 'var(--rounded-sm)',
                          border: '1px solid var(--colors-border-subtle)',
                          fontSize: '13.5px'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '4px' }}>
                      Commercial Delivery Notes & IncoTerms
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. CIF Colombo Port, FCL load required with Phytosanitary certificate..."
                      value={buyerInfo.notes}
                      onChange={(e) => setBuyerInfo({ ...buyerInfo, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 'var(--rounded-sm)',
                        border: '1px solid var(--colors-border-subtle)',
                        fontSize: '13px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer with Final Send Action */}
        {itemCount > 0 && (
          <div className="cart-drawer-footer">
            {/* Consolidated Summary */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
                fontSize: '13px'
              }}
            >
              <div>
                <span style={{ color: 'var(--colors-ink-meta)' }}>Consignment Size:</span>{' '}
                <strong style={{ color: 'var(--colors-ink)' }}>
                  {itemCount} {itemCount === 1 ? 'Product' : 'Products'} (~{formattedTonnage} MT)
                </strong>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--colors-success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} /> Batch COA Included
              </div>
            </div>

            {/* Final WhatsApp Action Button */}
            <button
              type="button"
              onClick={handleSendConsolidatedWhatsApp}
              className="btn"
              style={{
                width: '100%',
                backgroundColor: '#16a34a',
                color: '#ffffff',
                minHeight: '48px',
                padding: '12px 16px',
                borderRadius: 'var(--rounded-md)',
                fontSize: '15px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 4px 14px rgba(22, 163, 74, 0.35)',
                border: 'none',
                cursor: 'pointer'
              }}
              id="send-consolidated-whatsapp-btn"
            >
              <WhatsAppIcon size={20} color="#ffffff" />
              <span>Send Consolidated RFQ via WhatsApp</span>
            </button>

            <div
              style={{
                textAlign: 'center',
                fontSize: '11.5px',
                color: 'var(--colors-ink-meta)',
                marginTop: '10px'
              }}
            >
              Direct factory sales desk at Ahmedabad • Proforma invoice & chemical specs returned promptly
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

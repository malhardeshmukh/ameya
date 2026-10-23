'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '@/components/quote/QuoteContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Truck
} from 'lucide-react';

export default function ContactPage() {
  const { openQuote } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: 'Potassium Silicate',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Interior Hero Band */}
      <section
        style={{
          backgroundColor: 'var(--colors-primary-deep)',
          color: 'var(--colors-on-primary)',
          paddingTop: 'var(--spacing-hero)',
          paddingBottom: 'var(--spacing-hero)'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Contact Us</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Contact Ameyaa Industries Factory & Sales
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Connect with our technical sales division in Ahmedabad for spot pricing, sample dispatches, bulk orders, and global export shipping schedules.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="band-zone bg-canvas">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'flex-start'
            }}
            className="contact-layout-grid"
          >
            {/* Left Column: Direct Factory & Registered Info */}
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
                Direct Communication
              </span>
              <h2 className="sap-section-title" style={{ marginBottom: '16px' }}>
                Head Office & Manufacturing Facilities
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '24px' }}>
                Feel free to reach out via phone, email, or schedule an in-person meeting at our registered office along S.G. Highway, Ahmedabad.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: 'var(--colors-band-blue)', color: 'var(--colors-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--colors-ink)', marginBottom: '4px' }}>Registered Office Address</div>
                    <div style={{ fontSize: '14px', color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                      {COMPANY_DATA.registeredAddress.full}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: 'var(--colors-band-blue)', color: 'var(--colors-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--colors-ink)', marginBottom: '4px' }}>Telephone & WhatsApp</div>
                    <a href={`tel:${COMPANY_DATA.phone}`} style={{ fontSize: '16px', color: 'var(--colors-primary-deep)', fontWeight: 600, textDecoration: 'none' }}>
                      {COMPANY_DATA.formattedPhone}
                    </a>
                    <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)', marginTop: '2px' }}>
                      {COMPANY_DATA.responseRate} (73% quick response)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: 'var(--colors-band-blue)', color: 'var(--colors-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--colors-ink)', marginBottom: '4px' }}>Commercial Sales Email</div>
                    <a href={`mailto:${COMPANY_DATA.email}`} style={{ fontSize: '14px', color: 'var(--colors-primary-deep)', textDecoration: 'none' }}>
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--rounded-md)', backgroundColor: 'var(--colors-band-blue)', color: 'var(--colors-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--colors-ink)', marginBottom: '4px' }}>Operating Hours</div>
                    <div style={{ fontSize: '14px', color: 'var(--colors-ink-body)' }}>
                      Monday – Saturday: 9:00 AM – 7:00 PM (IST)<br />
                      Sunday: Plant Operations Only
                    </div>
                  </div>
                </div>
              </div>

              {/* Statutory details box */}
              <div style={{ backgroundColor: 'var(--colors-chrome)', padding: '16px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)', fontSize: '13px' }}>
                <div style={{ fontWeight: 600, marginBottom: '6px' }}>Statutory Disclosures:</div>
                <div>GSTIN: <strong>{COMPANY_DATA.gstin}</strong></div>
                <div>DGFT IEC: <strong>{COMPANY_DATA.iec}</strong></div>
                <div>Lead Banker: {COMPANY_DATA.banker}</div>
              </div>
            </div>

            {/* Right Column: Direct Commercial Inquiry Form */}
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-lg)',
                border: '1px solid var(--colors-border-subtle)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--colors-band-blue)',
                  border: '1px solid rgba(0, 87, 210, 0.2)',
                  borderRadius: 'var(--rounded-md)',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--colors-primary-deep)' }}>
                    Need Chemical Product Quotation?
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--colors-ink-body)' }}>
                    Get formal pricing with COA and spec sheets via our dedicated RFQ system.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="btn btn-primary"
                  style={{ minHeight: '36px', padding: '6px 14px', fontSize: '13px', flexShrink: 0 }}
                >
                  Open RFQ Basket
                </button>
              </div>

              <h3 className="sap-subhead" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '6px' }}>
                Corporate & General Inquiries
              </h3>
              <p className="sap-caption" style={{ marginBottom: '20px' }}>
                For dealership, export inquiries, factory visits, or vendor communication.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <CheckCircle2 size={44} color="var(--colors-success)" style={{ margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                    Message Transmitted Successfully
                  </h4>
                  <p className="sap-caption" style={{ marginBottom: '20px' }}>
                    Thank you {inquiry.name}. A representative from Ameyaa Industries will respond shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                    <div>
                      <label htmlFor="contact-name" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={inquiry.name}
                        onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Company / Organization *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        placeholder="e.g. Gujarat Foundry Chemicals Ltd"
                        value={inquiry.company}
                        onChange={(e) => setInquiry({ ...inquiry, company: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                    <div>
                      <label htmlFor="contact-phone" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Mobile / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={inquiry.phone}
                        onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Corporate Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={inquiry.email}
                        onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={inquiry.product}
                      onChange={(e) => setInquiry({ ...inquiry, product: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px', backgroundColor: 'var(--colors-canvas)' }}
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Export Operations">Export Partnership & Port Schedule</option>
                      <option value="Plant Visit">Factory / Plant Visit Request</option>
                      <option value="Vendor Registration">Vendor / Supplier Registration</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-msg"
                      required
                      rows={3}
                      placeholder="Please enter your inquiry details..."
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', minHeight: '44px' }}>
                    <Send size={16} /> Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

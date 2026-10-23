'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '@/components/quote/QuoteContext';
import {
  Building2,
  Users,
  ShieldCheck,
  FileCheck2,
  Calendar,
  Wallet,
  Landmark,
  CreditCard,
  Truck,
  Globe2,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ProfilePage() {
  const { openQuote } = useQuote();

  return (
    <>
      {/* Interior Hero Band (SAP Deep Blue) */}
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
            <span>Company Profile</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            About Ameyaa Industries
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Partnership manufacturing and global trading firm specializing in industrial silicates, chemical intermediates, and refined mineral ores in Ahmedabad, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="band-zone bg-canvas">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'flex-start'
            }}
            className="profile-grid"
          >
            <div>
              <div className="badge badge-blue" style={{ marginBottom: '8px' }}>
                Corporate Overview
              </div>
              <h2 className="sap-section-title" style={{ marginBottom: '16px' }}>
                Committed to Industrial Chemical Purity & Global Trade Integrity
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '16px' }}>
                Established in 2023 in Ahmedabad, Gujarat, <strong>Ameyaa Industries</strong> has rapidly grown into a prominent manufacturer, exporter, and supplier of soluble silicates, mineral reagents, and detergent raw materials.
              </p>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '24px' }}>
                Operating with state-of-the-art dissolution autoclaves and mineral pulverization systems, the firm produces chemical grades tailored to the rigorous demands of foundry binding, welding electrode flux, water treatment, paper manufacturing, and ceramic vitrification.
              </p>

              {/* Leadership & Partners */}
              <div
                style={{
                  backgroundColor: 'var(--colors-chrome)',
                  padding: 'var(--spacing-giant)',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  marginBottom: '24px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={20} color="var(--colors-primary)" /> Leadership & Partners
                </h3>
                <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--colors-ink-body)' }}>
                  <div><strong>Company CEO:</strong> {COMPANY_DATA.ceo}</div>
                  <div style={{ marginTop: '8px' }}><strong>Designated Partners:</strong></div>
                  <ul style={{ paddingLeft: '20px', marginTop: '4px' }}>
                    {COMPANY_DATA.partners.map((partner) => (
                      <li key={partner} style={{ marginBottom: '4px' }}>{partner}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--colors-ink-meta)' }}>
                    Total Team Size: {COMPANY_DATA.totalEmployees}
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="grid-2">
                <div style={{ border: '1px solid var(--colors-border-subtle)', padding: '16px', borderRadius: 'var(--rounded-md)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '6px' }}>
                    Quality Assurance
                  </h4>
                  <p className="sap-caption" style={{ color: 'var(--colors-ink-body)' }}>
                    Strict adherence to physical and chemical parameters (Baumé, molar ratio, % purity) with certified testing before dispatch.
                  </p>
                </div>
                <div style={{ border: '1px solid var(--colors-border-subtle)', padding: '16px', borderRadius: 'var(--rounded-md)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '6px' }}>
                    Global Supply Reliability
                  </h4>
                  <p className="sap-caption" style={{ color: 'var(--colors-ink-body)' }}>
                    Strategic maritime access via Kandla and Mundra ports ensuring timely FCL/LCL ocean freight schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Statutory & Financial Facts */}
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                padding: 'var(--spacing-giant)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <ShieldCheck size={20} color="var(--colors-success)" />
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)' }}>
                  Statutory & Compliance Profile
                </h3>
              </div>

              <div className="table-responsive">
                <table className="sap-table" style={{ fontSize: '13px' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 600, width: '45%' }}>Legal Firm Name</td>
                      <td>{COMPANY_DATA.name}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Nature of Business</td>
                      <td>Manufacturer, Exporter & Wholesaler</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Legal Entity Status</td>
                      <td>{COMPANY_DATA.legalStatus}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>GSTIN Registration</td>
                      <td><strong style={{ color: 'var(--colors-primary)' }}>{COMPANY_DATA.gstin}</strong></td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>DGFT IEC Code</td>
                      <td><strong>{COMPANY_DATA.iec}</strong></td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Year of Establishment</td>
                      <td>{COMPANY_DATA.establishmentYear}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Annual Turnover</td>
                      <td>{COMPANY_DATA.annualTurnover}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Lead Banking Partner</td>
                      <td>{COMPANY_DATA.banker}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>IndiaMART Status</td>
                      <td><span className="badge badge-success">TrustSEAL Verified</span></td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Customer Satisfaction</td>
                      <td>73% Quick Response Rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button
                  onClick={() => openQuote()}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Contact Management for Bulk Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Logistics & Banking Band */}
      <section className="band-zone bg-chrome">
        <div className="container">
          <div className="grid-3">
            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '24px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <CreditCard size={22} color="var(--colors-primary)" />
                <h3 style={{ fontSize: '17px', fontWeight: 600 }}>Accepted Payment Terms</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--colors-ink-body)' }}>
                {COMPANY_DATA.paymentModes.map(mode => (
                  <li key={mode}>✓ {mode}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '24px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Truck size={22} color="var(--colors-primary)" />
                <h3 style={{ fontSize: '17px', fontWeight: 600 }}>Shipment & Cargo Options</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--colors-ink-body)' }}>
                {COMPANY_DATA.shipmentModes.map(mode => (
                  <li key={mode}>✓ {mode}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '24px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Globe2 size={22} color="var(--colors-primary)" />
                <h3 style={{ fontSize: '17px', fontWeight: 600 }}>Overseas Markets</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
                {COMPANY_DATA.topExportCountries.map(c => (
                  <span key={c.country} className="badge badge-neutral">
                    {c.flag} {c.country}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--colors-ink-meta)' }}>
                Export accounts for {COMPANY_DATA.exportPercentage} of annual manufacturing volume.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

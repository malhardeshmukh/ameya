'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '@/components/quote/QuoteContext';
import {
  Globe2,
  Ship,
  FileCheck,
  ShieldCheck,
  Package,
  CheckCircle2,
  ChevronRight,
  Anchor,
  Clock,
  FileText
} from 'lucide-react';

export default function ExportPage() {
  const { openQuote } = useQuote();

  const exportSteps = [
    {
      step: '01',
      title: 'Commercial Inquiry & Formal Proforma',
      description: 'Quotation provided under Incoterms 2020 (FOB Kandla / Mundra, CIF / CFR destination port) with clear delivery timelines.'
    },
    {
      step: '02',
      title: 'Payment & Contract Finalization',
      description: 'Secured transactions via Irrevocable Letter of Credit (LC) at sight or international TT wire transfer.'
    },
    {
      step: '03',
      title: 'Production, Inspection & Packaging',
      description: 'Batch synthesis followed by analytical lab testing. Packed in UN-rated export drums, IBC totes, or palletized bags.'
    },
    {
      step: '04',
      title: 'Customs Clearance & Port Gating',
      description: 'Expedited road transport from Ahmedabad to Mundra/Kandla port. Customs shipping bill filing under IEC ACAFA0567E.'
    },
    {
      step: '05',
      title: 'Bill of Lading & Document Dispatch',
      description: 'Issuance of original Clean on Board Ocean Bill of Lading, Certificate of Origin, Phytosanitary, Packing List & COA.'
    }
  ];

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
            <span>Global Exports</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Global Export & Maritime Logistics
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Supplying industrial grade chemicals, soluble silicates, and mineral reagents across South Asia, Africa, the Middle East, and Central Asia.
          </p>
        </div>
      </section>

      {/* Overview & Credentials */}
      <section className="band-zone bg-canvas">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--spacing-huge)',
              alignItems: 'flex-start',
              marginBottom: 'var(--spacing-huge)'
            }}
            className="export-layout-grid"
          >
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
                International Trade Framework
              </span>
              <h2 className="sap-section-title" style={{ marginBottom: '16px' }}>
                Strategic Proximity to India&apos;s Leading Chemical Export Terminals
              </h2>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '16px' }}>
                Located in Ahmedabad, Gujarat, <strong>Ameyaa Industries</strong> benefits from immediate connectivity to <strong>Kandla Port</strong> and <strong>Mundra Port</strong> — India&apos;s largest commercial maritime gateways.
              </p>
              <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '24px' }}>
                Our dedicated export operations handle Full Container Loads (FCL 20ft / 40ft) and Less than Container Load (LCL) consolidated shipments, complete with international packaging standards, palletization, and DGFT-compliant paperwork.
              </p>

              {/* Destination Countries Grid */}
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '12px' }}>
                Established Export Trade Routes:
              </h3>
              <div className="grid-2">
                {COMPANY_DATA.topExportCountries.map((c) => (
                  <div
                    key={c.country}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--colors-chrome)',
                      borderRadius: 'var(--rounded-md)',
                      border: '1px solid var(--colors-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span style={{ fontSize: '26px' }}>{c.flag}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--colors-ink)' }}>{c.country}</div>
                      <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>{c.region} Port Delivery</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Export Details Card */}
            <div
              style={{
                backgroundColor: 'var(--colors-canvas)',
                padding: 'var(--spacing-giant)',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-border-subtle)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <ShieldCheck size={20} color="var(--colors-primary)" />
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Export Regulatory Dossier</h3>
              </div>

              <div className="table-responsive">
                <table className="sap-table" style={{ fontSize: '13px' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 600, width: '45%' }}>DGFT IEC Code</td>
                      <td><strong style={{ color: 'var(--colors-primary)' }}>{COMPANY_DATA.iec}</strong></td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>GSTIN Registration</td>
                      <td>{COMPANY_DATA.gstin}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Primary Gateway Ports</td>
                      <td>Kandla Port, Mundra Port (Gujarat)</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Incoterms Offered</td>
                      <td>FOB, CIF, CFR, Ex-Works</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Export Share</td>
                      <td>{COMPANY_DATA.exportPercentage}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Payment Security</td>
                      <td>Irrevocable LC at Sight, Wire Transfer</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600 }}>Container Load</td>
                      <td>20ft FCL (~24-26 MT) & LCL</td>
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
                  Request CIF / FOB Export Quotation
                </button>
              </div>
            </div>
          </div>

          {/* Export Step by Step Process */}
          <div style={{ borderTop: '1px solid var(--colors-border-subtle)', paddingTop: 'var(--spacing-giant)' }}>
            <h3 className="sap-section-title" style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
              International Procurement & Dispatch Flow
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }} className="export-steps-grid">
              {exportSteps.map((s) => (
                <div
                  key={s.step}
                  style={{
                    backgroundColor: 'var(--colors-chrome)',
                    padding: '16px',
                    borderRadius: 'var(--rounded-md)',
                    border: '1px solid var(--colors-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--colors-primary)', marginBottom: '8px' }}>
                    {s.step}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px', lineHeight: '1.3' }}>
                    {s.title}
                  </h4>
                  <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.4' }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Specifications Band */}
      <section className="band-zone bg-chrome">
        <div className="container">
          <h2 className="sap-section-title" style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            International Maritime Export Packaging
          </h2>

          <div className="grid-3">
            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '20px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                Heavy-Duty HDPE Drums (250 kg)
              </div>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Food/industrial grade blow-molded high-density polyethylene drums with leak-tight bung seals, suited for high-density liquid silicates and siliconates.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '20px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                Intermediate Bulk Containers (IBC - 1000 L)
              </div>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Tubular galvanized steel frame with bottom discharge valve. Optimum container packing efficiency for bulk chemical consumers.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '20px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                Moisture-Proof Palletized Bags (50 kg / 1 MT)
              </div>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5' }}>
                Multiwall woven polypropylene bags with inner polyethylene moisture liner, stacked on heat-treated ISPM-15 export pallets with stretch wrap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

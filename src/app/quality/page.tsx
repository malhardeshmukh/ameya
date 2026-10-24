'use client';

import React from 'react';
import Link from 'next/link';
import { useQuote } from '@/components/quote/QuoteContext';
import {
  ShieldCheck,
  FlaskConical,
  FileCheck2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Microscope,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { COMPANY_DATA, getWhatsAppQuoteUrl } from '@/data/company';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function QualityPage() {
  const { openQuote } = useQuote();

  const testingProtocols = [
    {
      title: 'Baumé Gravity & Specific Density',
      description: 'Hydrometric and pycnometric testing measuring liquid silicate concentration and density to ±0.01 precision.',
      standard: 'IS 1422 / ASTM D1475'
    },
    {
      title: 'Molar Ratio Analysis (SiO2 : M2O)',
      description: 'Potentiometric acid-base titration determining the precise weight and molar proportion of alkali to silica.',
      standard: 'Standard Titrimetric Method'
    },
    {
      title: 'Viscosity & Flow Behavior',
      description: 'Rotational viscometry at controlled temperatures (20°C / 25°C) to ensure pumpability and binder performance.',
      standard: 'Brookfield Viscometer'
    },
    {
      title: 'Insoluble Matter & Clarity',
      description: 'Quantitative filtration verifying total dissolved purity with insoluble residue strictly under 0.05%.',
      standard: 'Gravimetric Filtration'
    },
    {
      title: 'Loss on Ignition (LOI) & Carbonates',
      description: 'Furnace thermal analysis for limestone, dolomite, and calcite powders verifying total CaCO3 and MgCO3 assay.',
      standard: 'ASTM C25'
    },
    {
      title: 'Particle Size & Mesh Distribution',
      description: 'Dry and wet ultrasonic sieve analysis certifying mesh grading from 200 mesh to 500 mesh fineness.',
      standard: 'IS 460 Sieve Test'
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
            <span>Quality Assurance</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Quality Assurance & Laboratory Protocols
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Rigorous multi-stage chemical testing ensuring batch-to-batch consistency, certified Certificate of Analysis (COA), and global regulatory compliance.
          </p>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="band-zone bg-canvas">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: 'var(--spacing-huge)' }}>
            <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
              Analytical Standards
            </span>
            <h2 className="sap-section-title" style={{ marginBottom: '16px' }}>
              Zero-Tolerance Quality Governance
            </h2>
            <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6' }}>
              At Ameyaa Industries, industrial chemicals and mineral powders are manufactured to rigorous specifications. Because our silicates and minerals serve as critical binders in welding electrodes, acid-resistant mortars, and industrial detergents, even minor deviations in Baumé or SiO2 content are unacceptable. Every dispatch is accompanied by an authenticated Certificate of Analysis (COA).
            </p>
          </div>

          {/* 6 Analytical Testing Modules */}
          <div className="grid-3" style={{ marginBottom: 'var(--spacing-huge)' }}>
            {testingProtocols.map((protocol) => (
              <div
                key={protocol.title}
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  border: '1px solid var(--colors-border-subtle)',
                  borderRadius: 'var(--rounded-md)',
                  padding: 'var(--spacing-giant)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <FlaskConical size={18} color="var(--colors-primary)" />
                  <span className="badge badge-neutral" style={{ fontSize: '11px' }}>{protocol.standard}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '8px' }}>
                  {protocol.title}
                </h3>
                <p className="sap-caption" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.5', flex: 1 }}>
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4-Stage Quality Gate Workflow */}
          <div
            style={{
              backgroundColor: 'var(--colors-chrome)',
              padding: 'var(--spacing-giant)',
              borderRadius: 'var(--rounded-lg)',
              border: '1px solid var(--colors-border-subtle)'
            }}
          >
            <h3 className="sap-section-title" style={{ fontSize: '22px', marginBottom: '24px', textAlign: 'center' }}>
              The 4-Stage Chemical Inspection Workflow
            </h3>

            <div className="grid-4">
              <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '16px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--colors-primary)', marginBottom: '6px' }}>STAGE 01</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>Feedstock Assay</h4>
                <p className="sap-caption">Testing incoming quartz sand, caustic lye, soda ash, and raw limestone ore for impurities before furnace entry.</p>
              </div>

              <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '16px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--colors-primary)', marginBottom: '6px' }}>STAGE 02</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>In-Process Control</h4>
                <p className="sap-caption">Continuous monitoring of dissolution temperature, pressure, Baumé concentration, and alkaline balance during reactor run.</p>
              </div>

              <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '16px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--colors-primary)', marginBottom: '6px' }}>STAGE 03</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>Laboratory Verification</h4>
                <p className="sap-caption">Final batch testing for total solids, active SiO2, alkali percentage, visual clarity, and particle mesh fineness.</p>
              </div>

              <div style={{ backgroundColor: 'var(--colors-canvas)', padding: '16px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-border-subtle)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--colors-primary)', marginBottom: '6px' }}>STAGE 04</div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>COA & Dispatch</h4>
                <p className="sap-caption">Issuance of batch-stamped Certificate of Analysis, tamper-evident drum/bag sealing, and retention sample archiving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COA Request Band */}
      <section className="band-zone bg-band-blue">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 className="sap-section-title" style={{ fontSize: '28px', marginBottom: '12px' }}>
            Require a Customized Certificate of Analysis or MSDS?
          </h2>
          <p className="sap-body" style={{ color: 'var(--colors-ink-body)', marginBottom: '24px' }}>
            We provide full technical data sheets, Material Safety Data Sheets (MSDS), and batch inspection reports tailored to your plant&apos;s procurement standards.
          </p>
          <a
            href={getWhatsAppQuoteUrl({ intent: 'Batch COA & Technical Data Sheet Request' })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ minHeight: '44px', padding: '10px 24px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <WhatsAppIcon size={18} color="#ffffff" />
            <span>Request Batch COA via WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  );
}

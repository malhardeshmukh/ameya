import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, ALL_PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight, FileText, CheckCircle2, ShieldCheck, ArrowRight, Building } from 'lucide-react';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) return { title: 'Product Category | Ameyaa Industries' };

  return {
    title: `${cat.name} Manufacturer & Exporter | Ameyaa Industries Ahmedabad`,
    description: `High purity ${cat.name} supplied by Ameyaa Industries. ${cat.tagline}. Full COA and MSDS available.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const currentCategory = CATEGORIES.find((c) => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const otherCategories = CATEGORIES.filter((c) => c.id !== category).slice(0, 4);

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
            <Link href="/products" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Products</Link>
            <ChevronRight size={14} />
            <span>{currentCategory.name}</span>
          </div>

          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            {currentCategory.name}
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            {currentCategory.tagline}
          </p>
        </div>
      </section>

      {/* Category Overview & Technical Details */}
      <section className="band-zone bg-chrome" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--colors-canvas)',
              borderRadius: 'var(--rounded-md)',
              border: '1px solid var(--colors-border-subtle)',
              padding: 'var(--spacing-giant)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                  Product Portfolio Overview
                </span>
                <h2 className="sap-subhead" style={{ fontSize: '22px', fontWeight: 600 }}>
                  Technical Capabilities: {currentCategory.name}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span className="badge badge-success">
                  <ShieldCheck size={13} /> ISO Tested Grades
                </span>
                <span className="badge badge-neutral">
                  Available in Drums, Bags & Bulk
                </span>
              </div>
            </div>

            <p className="sap-body" style={{ color: 'var(--colors-ink-body)', lineHeight: '1.6', marginBottom: '20px' }}>
              {currentCategory.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                borderTop: '1px solid var(--colors-border-subtle)',
                paddingTop: '16px',
                fontSize: '13px'
              }}
              className="cat-specs-summary"
            >
              <div>
                <strong style={{ color: 'var(--colors-ink)' }}>Manufacturing Origin:</strong>
                <div style={{ color: 'var(--colors-ink-meta)' }}>Ahmedabad Plant, Gujarat, India</div>
              </div>
              <div>
                <strong style={{ color: 'var(--colors-ink)' }}>Export Packaging:</strong>
                <div style={{ color: 'var(--colors-ink-meta)' }}>250 kg HDPE Drums / 50 kg Bags / IBC</div>
              </div>
              <div>
                <strong style={{ color: 'var(--colors-ink)' }}>Quality Assurance:</strong>
                <div style={{ color: 'var(--colors-ink-meta)' }}>COA & MSDS Included with Each Batch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List in Category */}
      <section className="band-zone bg-canvas">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-giant)' }}>
            <div>
              <h2 className="sap-section-title" style={{ fontSize: '26px' }}>
                Available Grades & Specifications ({currentCategory.products.length})
              </h2>
              <p className="sap-caption" style={{ color: 'var(--colors-ink-lead)', marginTop: '4px' }}>
                Click &quot;Request Quote&quot; on any item to initiate a direct factory WhatsApp inquiry.
              </p>
            </div>
          </div>

          <div className="grid-4">
            {currentCategory.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Related Portfolios */}
      <section className="band-zone bg-band-blue">
        <div className="container">
          <h3 className="sap-section-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
            Related Chemical & Mineral Portfolios
          </h3>
          <div className="grid-4">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                href={`/products/${c.id}`}
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  padding: '16px',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-border-subtle)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)' }}>{c.name}</span>
                  <ArrowRight size={14} color="var(--colors-primary)" />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>{c.products.length} Products Available</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ALL_PRODUCTS, CATEGORIES, Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import ProductSpecsModal from '@/components/products/ProductSpecsModal';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, ChevronRight } from 'lucide-react';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [search, setSearch] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedForm, setSelectedForm] = useState('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Physical form filter (Lumps, Liquid, Powder)
      if (selectedForm !== 'all') {
        const specsText = JSON.stringify(product.specs).toLowerCase();
        const nameText = product.name.toLowerCase();
        if (selectedForm === 'lumps' && !nameText.includes('lump') && !specsText.includes('lump')) {
          return false;
        }
        if (selectedForm === 'liquid' && !nameText.includes('liquid') && !specsText.includes('liquid')) {
          return false;
        }
        if (selectedForm === 'powder' && !nameText.includes('powder') && !specsText.includes('powder')) {
          return false;
        }
      }

      // Search term filter
      if (search.trim()) {
        const query = search.toLowerCase();
        const inName = product.name.toLowerCase().includes(query);
        const inCat = product.categoryName.toLowerCase().includes(query);
        const inDesc = product.description.toLowerCase().includes(query);
        const inSpecs = JSON.stringify(product.specs).toLowerCase().includes(query);
        if (!inName && !inCat && !inDesc && !inSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [search, selectedCategory, selectedForm]);

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
        id="products-hero-band"
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span>Industrial Products</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Industrial Chemicals & Mineral Reagents Catalog
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '720px' }}>
            Explore 50 certified chemical grades, soluble silicates, calcite minerals, and detergent intermediates manufactured by Ameyaa Industries.
          </p>
        </div>
      </section>

      {/* Main Catalog View */}
      <div className="container" style={{ paddingTop: 'var(--spacing-giant)', paddingBottom: 'var(--spacing-page)' }}>
        {/* Filter & Search Bar */}
        <div
          style={{
            backgroundColor: 'var(--colors-chrome)',
            padding: 'var(--spacing-wide)',
            borderRadius: 'var(--rounded-md)',
            border: '1px solid var(--colors-border-subtle)',
            marginBottom: 'var(--spacing-giant)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Keyword Search */}
          <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '420px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--colors-ink-meta)' }} />
            <input
              type="search"
              placeholder="Filter by chemical name, formula, or grade..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                paddingLeft: '36px',
                paddingRight: '12px',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-hairline)',
                fontSize: '14px',
                backgroundColor: 'var(--colors-canvas)'
              }}
              id="catalog-filter-search"
            />
          </div>

          {/* Category Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <label htmlFor="filter-cat-select" className="sap-caption" style={{ fontWeight: 600, color: 'var(--colors-ink)' }}>
              Category:
            </label>
            <select
              id="filter-cat-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                height: '40px',
                padding: '0 12px',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-hairline)',
                fontSize: '14px',
                backgroundColor: 'var(--colors-canvas)'
              }}
            >
              <option value="all">All Categories ({ALL_PRODUCTS.length})</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.products.length})
                </option>
              ))}
            </select>

            {/* Physical Form Filter */}
            <label htmlFor="filter-form-select" className="sap-caption" style={{ fontWeight: 600, color: 'var(--colors-ink)', marginLeft: '8px' }}>
              Form:
            </label>
            <select
              id="filter-form-select"
              value={selectedForm}
              onChange={(e) => setSelectedForm(e.target.value)}
              style={{
                height: '40px',
                padding: '0 12px',
                borderRadius: 'var(--rounded-md)',
                border: '1px solid var(--colors-hairline)',
                fontSize: '14px',
                backgroundColor: 'var(--colors-canvas)'
              }}
            >
              <option value="all">All Forms</option>
              <option value="liquid">Liquid Solutions</option>
              <option value="lumps">Solid Lumps</option>
              <option value="powder">Micronized Powder</option>
            </select>
          </div>
        </div>

        {/* Results summary header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ fontSize: '15px', color: 'var(--colors-ink-body)' }}>
            Showing <strong>{filteredProducts.length}</strong> products matching criteria
          </div>
          {(selectedCategory !== 'all' || selectedForm !== 'all' || search) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedForm('all');
                setSearch('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--colors-primary)',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewSpecs={(p) => setActiveProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: 'var(--colors-chrome)',
              borderRadius: 'var(--rounded-lg)',
              padding: 'var(--spacing-huge)',
              textAlign: 'center',
              border: '1px solid var(--colors-border-subtle)'
            }}
          >
            <h3 className="sap-subhead" style={{ marginBottom: '8px' }}>
              No products found matching your filter
            </h3>
            <p className="sap-body" style={{ color: 'var(--colors-ink-body)', marginBottom: '16px' }}>
              Try searching for &quot;Silicate&quot;, &quot;Limestone&quot;, &quot;Lumps&quot;, or reset your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedForm('all');
                setSearch('');
              }}
              className="btn btn-primary"
            >
              View Full Catalog
            </button>
          </div>
        )}
      </div>

      <ProductSpecsModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '40px' }}>Loading chemical catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}

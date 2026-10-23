'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useQuote } from '../quote/QuoteContext';
import { FileText, Send, Check, Info, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewSpecs?: (product: Product) => void;
}

export default function ProductCard({ product, onViewSpecs }: ProductCardProps) {
  const { openQuote, addItem, items } = useQuote();
  const isAdded = items.some(i => i.product.id === product.id);

  // Extract key specs to display
  const keySpecs = Object.entries(product.specs).slice(0, 3);

  return (
    <article
      style={{
        backgroundColor: 'var(--colors-canvas)',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid var(--colors-border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 0.15s ease'
      }}
      className="product-card"
    >
      {/* Product Image Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid var(--colors-border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px'
        }}
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: 'var(--rounded-sm)'
            }}
            loading="lazy"
          />
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--colors-ink-meta)' }}>
            <FileText size={40} strokeWidth={1.5} />
            <div className="sap-caption" style={{ marginTop: '6px' }}>Industrial Grade</div>
          </div>
        )}

        {/* Category tag */}
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <span className="badge badge-neutral" style={{ fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.92)' }}>
            {product.categoryName}
          </span>
        </div>

        {product.featured && (
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <span className="badge badge-blue" style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Sparkles size={11} /> Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: 'var(--spacing-wide)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 600,
            color: 'var(--colors-ink)',
            lineHeight: '1.3',
            marginBottom: '8px',
            minHeight: '44px'
          }}
        >
          {product.name}
        </h3>

        {/* Price tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            marginBottom: '12px'
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: product.price.includes('₹') ? 'var(--colors-primary-deep)' : 'var(--colors-ink-lead)'
            }}
          >
            {product.price}
          </span>
          {product.price.includes('₹') && (
            <span className="sap-caption" style={{ fontSize: '12px', color: 'var(--colors-ink-meta)' }}>
              (Ex-Factory)
            </span>
          )}
        </div>

        {/* Specifications list (if available) */}
        {keySpecs.length > 0 ? (
          <div
            style={{
              backgroundColor: 'var(--colors-chrome)',
              borderRadius: 'var(--rounded-sm)',
              padding: '8px 10px',
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              fontSize: '12px'
            }}
          >
            {keySpecs.map(([key, val]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--colors-ink-body)' }}>
                <span style={{ color: 'var(--colors-ink-meta)' }}>{key}:</span>
                <span style={{ fontWeight: 500, textAlign: 'right' }}>{val}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="sap-caption" style={{ marginBottom: '16px', flex: 1, fontSize: '13px', lineHeight: '1.4' }}>
            {product.description.slice(0, 85)}...
          </p>
        )}

        {/* Card Actions */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: 'auto'
          }}
        >
          <button
            type="button"
            onClick={() => openQuote(product)}
            className="btn btn-primary"
            style={{
              flex: 1,
              padding: '8px 12px',
              fontSize: '13px',
              minHeight: '40px'
            }}
            id={`btn-quote-${product.id}`}
          >
            <Send size={13} />
            <span>Get Best Quote</span>
          </button>

          {onViewSpecs && (
            <button
              type="button"
              onClick={() => onViewSpecs(product)}
              className="btn btn-outline"
              style={{
                padding: '8px 10px',
                minHeight: '40px'
              }}
              title="View full specs"
              aria-label={`View specifications for ${product.name}`}
            >
              <Info size={16} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/data/testimonials';
import { COMPANY_DATA } from '@/data/company';
import { useQuote } from '@/components/quote/QuoteContext';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ChevronRight, Send, ThumbsUp } from 'lucide-react';

export default function ReviewsPage() {
  const { openQuote } = useQuote();
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [filterRating, setFilterRating] = useState('all');
  const [submittedReview, setSubmittedReview] = useState(false);

  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    location: '',
    product: 'Potassium Silicate',
    rating: 5,
    feedback: ''
  });

  const filteredReviews = filterRating === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.rating === parseInt(filterRating, 10));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `rev-${Date.now()}`,
      author: newReview.name,
      company: newReview.company || 'Industrial Buyer',
      location: newReview.location || 'India',
      country: 'India',
      rating: newReview.rating,
      date: 'Just now',
      productName: newReview.product,
      feedback: newReview.feedback,
      verified: true
    };
    setReviewsList([created, ...reviewsList]);
    setSubmittedReview(true);
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
            <span>Customer Reviews</span>
          </div>
          <h1 className="sap-hero-title" style={{ fontSize: '36px', fontWeight: 600, marginBottom: '8px' }}>
            Verified Client Reviews & Rating Breakdown
          </h1>
          <p className="sap-body" style={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: '720px' }}>
            Direct commercial buyer satisfaction feedback verified through our client purchase orders and international trade transactions.
          </p>
        </div>
      </section>

      {/* Main Reviews Section */}
      <section className="band-zone bg-canvas">
        <div className="container">
          {/* Top Rating Summary Card */}
          <div
            style={{
              backgroundColor: 'var(--colors-chrome)',
              padding: 'var(--spacing-giant)',
              borderRadius: 'var(--rounded-lg)',
              border: '1px solid var(--colors-border-subtle)',
              marginBottom: 'var(--spacing-huge)',
              display: 'grid',
              gridTemplateColumns: '260px 1fr 280px',
              gap: 'var(--spacing-giant)',
              alignItems: 'center'
            }}
            className="rating-summary-grid"
          >
            {/* Score box */}
            <div style={{ textAlign: 'center', borderRight: '1px solid var(--colors-border-subtle)', paddingRight: '20px' }}>
              <div style={{ fontSize: '54px', fontWeight: 800, color: 'var(--colors-ink)', lineHeight: '1' }}>
                {COMPANY_DATA.rating.score}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '8px 0' }}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
                <Star size={18} fill="none" color="#f59e0b" />
              </div>
              <div className="sap-caption" style={{ color: 'var(--colors-ink-body)' }}>
                Overall Score based on <strong>{COMPANY_DATA.rating.totalReviews} Verified Buyer Ratings</strong>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
                <ShieldCheck size={14} color="var(--colors-success)" />
                <span style={{ fontSize: '12px', color: 'var(--colors-success)', fontWeight: 600 }}>Verified Trade Clients</span>
              </div>
            </div>

            {/* Breakdown bars */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px' }}>Rating Distribution</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '40px' }}>5 Star</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--colors-canvas)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '67%', height: '100%', backgroundColor: 'var(--colors-primary)' }} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', fontWeight: 600 }}>6 reviews</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '40px' }}>4 Star</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--colors-canvas)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '0%', height: '100%', backgroundColor: 'var(--colors-primary)' }} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', color: 'var(--colors-ink-meta)' }}>0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '40px' }}>3 Star</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--colors-canvas)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '0%', height: '100%', backgroundColor: 'var(--colors-primary)' }} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', color: 'var(--colors-ink-meta)' }}>0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '40px' }}>2 Star</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--colors-canvas)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '0%', height: '100%', backgroundColor: 'var(--colors-primary)' }} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', color: 'var(--colors-ink-meta)' }}>0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '40px' }}>1 Star</span>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--colors-canvas)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '33%', height: '100%', backgroundColor: '#ef4444' }} />
                  </div>
                  <span style={{ width: '50px', textAlign: 'right', fontWeight: 600 }}>3 reviews</span>
                </div>
              </div>
            </div>

            {/* Quick action box */}
            <div style={{ borderLeft: '1px solid var(--colors-border-subtle)', paddingLeft: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--colors-ink)', marginBottom: '6px' }}>
                Have you sourced from Ameyaa?
              </div>
              <p className="sap-caption" style={{ marginBottom: '14px' }}>
                Share your procurement feedback on chemical purity and logistics.
              </p>
              <a
                href="#leave-review-section"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '13px', textDecoration: 'none' }}
              >
                Write Buyer Review
              </a>
            </div>
          </div>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="sap-section-title" style={{ fontSize: '24px' }}>
              Customer Testimonials ({filteredReviews.length})
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="sap-caption" style={{ fontWeight: 600 }}>Filter:</span>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--colors-hairline)',
                  fontSize: '13px',
                  backgroundColor: 'var(--colors-canvas)'
                }}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Star Reviews Only</option>
                <option value="1">1 Star Reviews Only</option>
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid-2" style={{ marginBottom: 'var(--spacing-huge)' }}>
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  backgroundColor: 'var(--colors-canvas)',
                  border: '1px solid var(--colors-border-subtle)',
                  borderRadius: 'var(--rounded-md)',
                  padding: 'var(--spacing-giant)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--colors-ink)', marginLeft: '4px' }}>
                        {rev.rating}.0 / 5
                      </span>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--colors-ink)', marginTop: '4px' }}>
                      {rev.author}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--colors-primary-deep)', fontWeight: 500 }}>
                      {rev.company} • {rev.location}
                    </div>
                  </div>
                  <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                    {rev.date}
                  </span>
                </div>

                <p className="sap-body" style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--colors-ink-body)', marginBottom: '16px', flex: 1 }}>
                  &ldquo;{rev.feedback}&rdquo;
                </p>

                <div
                  style={{
                    borderTop: '1px solid var(--colors-border-subtle)',
                    paddingTop: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: 'var(--colors-ink-meta)'
                  }}
                >
                  <span>Sourced: <strong>{rev.productName}</strong></span>
                  <span style={{ color: 'var(--colors-success)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <ShieldCheck size={13} /> Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Review Form */}
          <div
            id="leave-review-section"
            style={{
              backgroundColor: 'var(--colors-chrome)',
              padding: 'var(--spacing-giant)',
              borderRadius: 'var(--rounded-lg)',
              border: '1px solid var(--colors-border-subtle)',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            <h3 className="sap-section-title" style={{ fontSize: '22px', marginBottom: '8px', textAlign: 'center' }}>
              Submit Commercial Feedback
            </h3>
            <p className="sap-caption" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Your feedback is audited and published to help domestic and international procurement teams.
            </p>

            {submittedReview ? (
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <CheckCircle2 size={42} color="var(--colors-success)" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Thank you for your review!</h4>
                <p className="sap-caption">Your review has been added to our live testimonials log.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }} className="review-form-row-2">
                  <div>
                    <label htmlFor="rev-author" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Your Name / Designation *
                    </label>
                    <input
                      id="rev-author"
                      required
                      type="text"
                      placeholder="e.g. Anand Sharma, Head of Purchasing"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="rev-company" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Company Name *
                    </label>
                    <input
                      id="rev-company"
                      required
                      type="text"
                      placeholder="e.g. Apex Ceramic Tiles"
                      value={newReview.company}
                      onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="review-form-row-3">
                  <div>
                    <label htmlFor="rev-location" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      City / Country *
                    </label>
                    <input
                      id="rev-location"
                      required
                      type="text"
                      placeholder="e.g. Surat / Colombo"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="rev-product" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Product Sourced
                    </label>
                    <select
                      id="rev-product"
                      value={newReview.product}
                      onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px', backgroundColor: 'var(--colors-canvas)' }}
                    >
                      <option value="Potassium Silicate">Potassium Silicate</option>
                      <option value="Sodium Silicate">Sodium Silicate</option>
                      <option value="Limestone Lumps & Powder">Limestone Lumps & Powder</option>
                      <option value="Sodium Metasilicate">Sodium Metasilicate</option>
                      <option value="Titanium Dioxide">Titanium Dioxide</option>
                      <option value="Other Mineral / Chemical">Other Mineral / Chemical</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rev-rating" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                      Rating
                    </label>
                    <select
                      id="rev-rating"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px', backgroundColor: 'var(--colors-canvas)' }}
                    >
                      <option value="5">★★★★★ (5 Stars)</option>
                      <option value="4">★★★★☆ (4 Stars)</option>
                      <option value="3">★★★☆☆ (3 Stars)</option>
                      <option value="2">★★☆☆☆ (2 Stars)</option>
                      <option value="1">★☆☆☆☆ (1 Star)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="rev-feedback" className="sap-caption" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                    Commercial & Technical Review *
                  </label>
                  <textarea
                    id="rev-feedback"
                    required
                    rows={3}
                    placeholder="Share your experience regarding chemical specification compliance, dispatch speed, packaging quality, and communication..."
                    value={newReview.feedback}
                    onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 'var(--rounded-md)', border: '1px solid var(--colors-hairline)', fontSize: '14px', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', minHeight: '44px' }}>
                  <Send size={15} /> Publish Verified Commercial Review
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

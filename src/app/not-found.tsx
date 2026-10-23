'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect non-existent page to Home Page immediately
    const timer = setTimeout(() => {
      router.replace('/');
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--colors-chrome)',
        padding: 'var(--spacing-max)'
      }}
    >
      {/* Fallback meta refresh for non-JS environments */}
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/" />
      </noscript>

      <div
        style={{
          maxWidth: '520px',
          backgroundColor: 'var(--colors-canvas)',
          borderRadius: 'var(--rounded-lg)',
          border: '1px solid var(--colors-border-subtle)',
          padding: 'var(--spacing-giant)',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: 'var(--colors-band-blue)',
            color: 'var(--colors-primary)',
            marginBottom: '16px'
          }}
        >
          <RefreshCw size={26} className="animate-spin" />
        </div>

        <h1 className="sap-subhead" style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>
          Redirecting to Home Page
        </h1>
        <p className="sap-body" style={{ fontSize: '15px', color: 'var(--colors-ink-body)', marginBottom: '24px' }}>
          The requested page does not exist. You are being redirected to the Ameyaa Industries Home Page and chemical catalog...
        </p>

        <Link
          href="/"
          className="btn btn-primary"
          style={{
            width: '100%',
            textDecoration: 'none'
          }}
          id="redirect-home-button"
        >
          <ArrowLeft size={16} /> Return to Home Page Now
        </Link>
      </div>
    </div>
  );
}

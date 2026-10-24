'use client';

import React from 'react';
import QuoteCartDrawer from './QuoteCartDrawer';
import QuoteToast from './QuoteToast';

export default function QuoteModal() {
  return (
    <>
      <QuoteCartDrawer />
      <QuoteToast />
    </>
  );
}

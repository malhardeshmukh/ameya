'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';
import { getWhatsAppQuoteUrl } from '@/data/company';

export interface QuoteItem {
  product: Product;
  quantity?: string;
  notes?: string;
}

interface QuoteContextType {
  isOpen: boolean;
  selectedProduct: Product | null;
  items: QuoteItem[];
  openQuote: (product?: Product, customMessage?: string) => void;
  closeQuote: () => void;
  addItem: (product: Product, quantity?: string) => void;
  removeItem: (productId: string) => void;
  clearItems: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [items, setItems] = useState<QuoteItem[]>([]);

  const openQuote = (product?: Product, customMessage?: string) => {
    if (product) {
      setSelectedProduct(product);
      // Also add to items if not already present
      if (!items.some(item => item.product.id === product.id)) {
        setItems(prev => [...prev, { product, quantity: '1000 Kg' }]);
      }
    }

    const whatsappUrl = getWhatsAppQuoteUrl({ product, customMessage });
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  const addItem = (product: Product, quantity: string = '1000 Kg') => {
    if (!items.some(item => item.product.id === product.id)) {
      setItems(prev => [...prev, { product, quantity }]);
    }
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
    if (selectedProduct?.id === productId) {
      setSelectedProduct(null);
    }
  };

  const clearItems = () => {
    setItems([]);
    setSelectedProduct(null);
  };

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        selectedProduct,
        items,
        openQuote,
        closeQuote,
        addItem,
        removeItem,
        clearItems
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product } from '@/data/products';
import { COMPANY_DATA } from '@/data/company';

export interface QuoteItem {
  product: Product;
  quantity: string;
  packaging: string;
  notes?: string;
}

export interface BuyerInfo {
  name: string;
  phone: string;
  email: string;
  company: string;
  destination: string;
  notes: string;
}

interface QuoteContextType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  items: QuoteItem[];
  itemCount: number;
  totalEstimatedKg: number;
  addItem: (product: Product, quantity?: string, packaging?: string, notes?: string, autoOpen?: boolean) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: string) => void;
  updatePackaging: (productId: string, packaging: string) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  buyerInfo: BuyerInfo;
  setBuyerInfo: React.Dispatch<React.SetStateAction<BuyerInfo>>;
  toastMessage: string | null;
  hideToast: () => void;
  badgePulse: boolean;
  // Backward compatibility
  selectedProduct: Product | null;
  openQuote: (product?: Product, customMessage?: string) => void;
  closeQuote: () => void;
}

const STORAGE_CART_KEY = 'ameyaa_quote_cart_v2';
const STORAGE_BUYER_KEY = 'ameyaa_quote_buyer_v2';

const DEFAULT_BUYER: BuyerInfo = {
  name: '',
  phone: '',
  email: '',
  company: '',
  destination: 'Ahmedabad Plant / Mundra Port',
  notes: ''
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [buyerInfo, setBuyerInfo] = useState<BuyerInfo>(DEFAULT_BUYER);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [badgePulse, setBadgePulse] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load persisted state on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_CART_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
      const savedBuyer = localStorage.getItem(STORAGE_BUYER_KEY);
      if (savedBuyer) {
        const parsed = JSON.parse(savedBuyer);
        if (parsed && typeof parsed === 'object') {
          setBuyerInfo(prev => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {
      console.warn('Failed to restore quote cart from localStorage', e);
    }
    setIsHydrated(true);
  }, []);

  // Save changes to localStorage after hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save quote cart', e);
    }
  }, [items, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_BUYER_KEY, JSON.stringify(buyerInfo));
    } catch (e) {
      console.warn('Failed to save buyer info', e);
    }
  }, [buyerInfo, isHydrated]);

  const triggerBadgePulse = useCallback(() => {
    setBadgePulse(true);
    setTimeout(() => setBadgePulse(false), 500);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  }, []);

  const hideToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const addItem = useCallback((
    product: Product,
    quantity = '1000 Kg',
    packaging = '250 kg HDPE Drums',
    notes = '',
    autoOpen = true
  ) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        // Already in cart - update quantity if specified
        return prev.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: quantity || i.quantity, packaging: packaging || i.packaging }
            : i
        );
      }
      return [...prev, { product, quantity, packaging, notes }];
    });

    triggerBadgePulse();
    showToast(`Added "${product.name}" to your Quote Cart!`);

    if (autoOpen) {
      setIsOpen(true);
    }
  }, [triggerBadgePulse, showToast]);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
    triggerBadgePulse();
  }, [triggerBadgePulse]);

  const updateQuantity = useCallback((productId: string, quantity: string) => {
    setItems(prev =>
      prev.map(i => (i.product.id === productId ? { ...i, quantity } : i))
    );
  }, []);

  const updatePackaging = useCallback((productId: string, packaging: string) => {
    setItems(prev =>
      prev.map(i => (i.product.id === productId ? { ...i, packaging } : i))
    );
  }, []);

  const updateNotes = useCallback((productId: string, notes: string) => {
    setItems(prev =>
      prev.map(i => (i.product.id === productId ? { ...i, notes } : i))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    triggerBadgePulse();
  }, [triggerBadgePulse]);

  const isInCart = useCallback((productId: string) => {
    return items.some(i => i.product.id === productId);
  }, [items]);

  // Backward-compatibility handlers
  const openQuote = useCallback((product?: Product, customMessage?: string) => {
    if (product) {
      addItem(product, '1000 Kg', '250 kg HDPE Drums', customMessage, true);
    } else {
      openCart();
    }
  }, [addItem, openCart]);

  const closeQuote = useCallback(() => {
    closeCart();
  }, [closeCart]);

  const selectedProduct = items[0]?.product || null;

  // Calculate estimated weight in kg
  const totalEstimatedKg = items.reduce((acc, item) => {
    const text = item.quantity.toLowerCase();
    const match = text.match(/([\d.]+)/);
    if (!match) return acc + 1000;
    const val = parseFloat(match[1]);
    if (isNaN(val)) return acc + 1000;
    if (text.includes('tonne') || text.includes('ton') || text.includes('mt')) {
      return acc + val * 1000;
    }
    return acc + val;
  }, 0);

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        items,
        itemCount: items.length,
        totalEstimatedKg,
        addItem,
        removeItem,
        updateQuantity,
        updatePackaging,
        updateNotes,
        clearCart,
        isInCart,
        buyerInfo,
        setBuyerInfo,
        toastMessage,
        hideToast,
        badgePulse,
        selectedProduct,
        openQuote,
        closeQuote
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

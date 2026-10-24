import React from 'react';
import { notFound } from 'next/navigation';
import { ALL_PRODUCTS, getProductById, getCategoryById, getRelatedProducts } from '@/data/products';
import ProductDetailView from '@/components/products/ProductDetailView';

interface Props {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    category: product.category,
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category, id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: 'Product Not Found | Ameyaa Industries',
      description: 'The requested chemical reagent or mineral product could not be located.'
    };
  }

  const title = `${product.name} Manufacturer & Global Exporter (${product.price}) | Ameyaa Industries`;
  const description = `High purity ${product.name} (${product.categoryName}) manufactured and exported from Ahmedabad, Gujarat by Ameyaa Industries. ${product.description} Full batch COA, ISO certified quality, bulk dispatch.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.categoryName,
      'Ameyaa Industries',
      'Ahmedabad chemical manufacturer',
      'industrial chemicals exporter India',
      product.specs['Grade Standard'] || 'Industrial Grade',
      product.specs['Form'] || 'Chemical Reagent',
      'potassium silicate supplier',
      'sodium silicate factory'
    ],
    openGraph: {
      title,
      description,
      url: `https://ameyaaindustries.com/products/${product.category}/${product.id}`,
      siteName: 'Ameyaa Industries',
      images: product.image
        ? [
            {
              url: product.image,
              width: 600,
              height: 600,
              alt: product.name
            }
          ]
        : []
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const currentCategory = getCategoryById(product.category) || getCategoryById(category);
  if (!currentCategory) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  return (
    <ProductDetailView
      product={product}
      category={currentCategory}
      relatedProducts={relatedProducts}
    />
  );
}

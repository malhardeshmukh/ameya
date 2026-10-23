import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import SecondaryNav from '@/components/layout/SecondaryNav';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import QuoteModal from '@/components/quote/QuoteModal';
import { QuoteProvider } from '@/components/quote/QuoteContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Ameyaa Industries | Potassium Silicate & Sodium Silicate Exporter & Manufacturer Ahmedabad',
  description: 'Ameyaa Industries - Leading Exporter & Manufacturer of Potassium Silicate, Sodium Silicate, Limestone Lumps & Powder, Sodium Metasilicate, Titanium Dioxide from Ahmedabad, Gujarat, India.',
  keywords: 'Potassium Silicate, Sodium Silicate, Limestone Lumps and Powder, Sodium Metasilicate, Chloride, Titanium Dioxide, Detergent Raw Material, Ameyaa Industries, Ahmedabad, chemical manufacturer India',
  authors: [{ name: 'Ameyaa Industries' }],
  metadataBase: new URL('https://www.ameyaaindustries.co.in'),
  openGraph: {
    title: 'Ameyaa Industries | Potassium Silicate & Sodium Silicate Manufacturer & Exporter',
    description: 'Premier manufacturer and global exporter of industrial silicates, mineral reagents, and chemicals based in Ahmedabad, Gujarat, India.',
    url: 'https://www.ameyaaindustries.co.in',
    siteName: 'Ameyaa Industries',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <QuoteProvider>
          <Header />
          <SecondaryNav />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
          <FloatingContact />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}

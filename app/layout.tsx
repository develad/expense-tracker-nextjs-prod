import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Footer from '@/components/Footer';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses and create a budget',
  openGraph: {
    images: 'image_02.png',
  },
  icons: {
    icon: 'favicon-32x32.png',
    apple: 'apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          <main
            className="container"
            style={{ flex: '1' }}
          >
            {children}
          </main>
          <Footer />
          <ToastContainer
            toastStyle={{
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}

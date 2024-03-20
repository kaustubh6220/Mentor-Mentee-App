import '../globals.css';
import { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Mentor Mentee App',
  description: 'MIT ADT University Mentor Mentee App',
};

export default async function RootLayout({ children }: RootLayoutProps) {
  


  return (
    <div className="flex h-screen flex-col">
      <Header/>
      <main className="flex-1 m-4">{children}</main>
      <Footer />
    </div>
  );
}


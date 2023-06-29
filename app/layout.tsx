import React from 'react';
import '@/styles/global.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import { Session } from 'next-auth';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

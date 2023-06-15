import React from 'react';
import '@/styles/global.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import { Session } from 'next-auth';

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
  console.log(session);
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | undefined;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;

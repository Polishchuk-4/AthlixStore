import { ReactNode, Suspense } from 'react';

import AppBar from '../common/AppBar/AppBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

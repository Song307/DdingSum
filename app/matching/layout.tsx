import { ReactNode } from 'react';

interface MatchingLayoutProps {
  children: ReactNode;
}

export default function MatchingLayout({ children }: MatchingLayoutProps) {
  return <div className="matching-layout">{children}</div>;
}

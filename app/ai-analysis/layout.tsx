import { ReactNode } from 'react';

interface AIAnalysisLayoutProps {
  children: ReactNode;
}

export default function AIAnalysisLayout({ children }: AIAnalysisLayoutProps) {
  return <div className="ai-analysis-layout">{children}</div>;
}

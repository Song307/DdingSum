import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: '띵썸 - 캠퍼스 소개팅 앱',
  description: '명지대학교 재학생 전용 신뢰 기반 소개팅 플랫폼',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://0117-dot.vercel.app'),
  title: {
    default: '새, 나뭇잎, 고양이, 그리고 강 - 2026.1.17 수원 DOT',
    template: '%s | 새, 나뭇잎, 고양이, 그리고 강',
  },
  description: '2026년 1월 17일, 수원 DOT에서 펼쳐지는 특별한 옴니버스 콘서트. 남수, 여울, 하루살이 프로젝트, 강가히말라야가 선사하는 네 가지 감각의 여정',
  keywords: ['새 나뭇잎 고양이 강', '수원 DOT', '인디 공연', '남수', '여울', '하루살이 프로젝트', '강가히말라야', '살롱 콘서트', '옴니버스 콘서트'],
  authors: [{ name: '새, 나뭇잎, 고양이, 그리고 강' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '새, 나뭇잎, 고양이, 그리고 강',
    title: '새, 나뭇잎, 고양이, 그리고 강',
    description: '네 가지 감각이 흐르는 지하의 밤 - 2026.1.17 수원 DOT',
    images: [
      {
        url: '/images/og-image.png',
        width: 1280,
        height: 854,
        alt: '새, 나뭇잎, 고양이, 그리고 강 공연 포스터',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '새, 나뭇잎, 고양이, 그리고 강',
    description: '네 가지 감각이 흐르는 지하의 밤 - 2026.1.17 수원 DOT',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

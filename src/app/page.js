import HeroSection from '@/components/home/HeroSection';
import ThemeShowcase from '@/components/home/ThemeShowcase';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ThemeShowcase />
    </>
  );
}

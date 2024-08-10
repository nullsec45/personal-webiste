import { ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '@/providers/ThemeProviders';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import LoadingBar from 'react-top-loading-bar';

type RootLayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function RootLayout({ children, title }: RootLayoutProps) {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    setProgress(100);
    scrollTo({
      top: 0,
    });
    AOS.init({
      duration: 500,
      delay: 50,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Helmet>
        <title>Muhammad Dariaz Zidane | {title}</title>
        <meta name="application-name" content="Muhammad Dariaz Zidane" />
        <meta name="email" content="dariazzidane@gmail.com" />
      </Helmet>
      <LoadingBar color="#4f46e5" progress={progress} loaderSpeed={10} onLoaderFinished={() => setProgress(0)} />
      <Navbar />
      <main className="max-w-6xl w-full mx-auto px-5 ">
        {children}
        <Toaster />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

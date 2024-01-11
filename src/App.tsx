import AppSkeleton from '@/components/common/skeleton/AppSkeleton';
import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/errors/NotFound';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Project = lazy(() => import('@/pages/Project'));
const Contact = lazy(() => import('@/pages/Contact'));
const Education = lazy(() => import('@/pages/Education'));
const Experience = lazy(() => import('@/pages/Experience'));
const Certification = lazy(() => import('@/pages/Certification'));

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Project />
          </Suspense>
        }
      />
      <Route
        path="/certifications"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Certification />
          </Suspense>
        }
      />
      <Route
        path="/experience/:id"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Experience />
          </Suspense>
        }
      />
      <Route
        path="/education/:id"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Education />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<AppSkeleton />}>
            <About />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

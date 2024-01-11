import { ThemeProvider } from '@/providers/ThemeProviders';
import { CircleEllipsis } from 'lucide-react';

export default function AppSkeleton() {
  return (
    <ThemeProvider defaultTheme="system">
      <CircleEllipsis
        size={30}
        className="animate-pulse absolute inset-0 scale-[.1] w-full h-full"
      />
    </ThemeProvider>
  );
}

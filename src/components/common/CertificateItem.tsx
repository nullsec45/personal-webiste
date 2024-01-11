import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CertificateType } from '@/types/CertificateType';
import { motion } from 'framer-motion';

export default function CertificateItem({ item }: { item: CertificateType }) {
  return (
    <Dialog>
      <DialogTrigger>
        <motion.div layout className="h-full max-w-36 md:max-w-48">
          <LazyLoadImage
            className="w-full h-full object-cover shadow"
            src={item.value}
            alt={item.value}
            loading="lazy"
            effect="blur"
          />
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <img
          className="w-full h-full object-cover shadow "
          src={item.value}
          alt={item.value}
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CertificateType } from '@/types/CertificateType';
import { motion } from 'framer-motion';

export default function CertificateItem({ item }: { item: CertificateType }) {
  return (
    <Dialog>
      <DialogTrigger>
        <motion.div layout className="h-full max-w-36 md:max-w-48  max-h-52">
          <LazyLoadImage
            className="w-full max-h-48 h-full bg-gray-900 p-3 rounded-md shadow "
            src={item.value}
            alt={item.value}
            loading="lazy"
            effect="blur"
          />
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <LazyLoadImage
          className="w-full h-full "
          src={item.value}
          alt={item.value}
          loading="lazy"
          effect="opacity"
        />
      </DialogContent>
    </Dialog>
  );
}

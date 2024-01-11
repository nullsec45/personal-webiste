import CertificateNotFound from '@/components/common/messages/CertificateNotFound';
import CertificateItem from '@/components/common/CertificateItem';
import ButtonFilter from '@/components/common/ButtonFilter';
import certifications from '@/data/certificate.json';
import RootLayout from '@/layouts/RootLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certification() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredCertifications =
    filter === 'All'
      ? certifications
      : certifications.filter((item) => item.category == filter);

  return (
    <RootLayout title="Certifications">
      <div className="max-w-5xl mt-8 mx-auto" data-aos="fade-up">
        <ButtonFilter
          filter={filter}
          setFilter={setFilter}
          handleFilterChange={handleFilterChange}
        />
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 my-8"
        >
          {filteredCertifications.length !== 0 ? (
            filteredCertifications.map((item) => (
              <CertificateItem item={item} key={item.id} />
            ))
          ) : (
            <CertificateNotFound />
          )}
        </motion.div>
      </div>
    </RootLayout>
  );
}

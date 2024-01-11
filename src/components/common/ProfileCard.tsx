import { LazyLoadImage } from 'react-lazy-load-image-component';
import Social from '@/components/common/Social';
import { MapPin } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="max-h-52 max-w-56 mx-auto mb-40 md:sticky top-12 p-6 rounded-xl ">
      <div className="mx-auto h-full w-full rounded-xl bg-gradient-to-b from-indigo-400 to-sky-700 overflow-hidden">
        <LazyLoadImage
          src="/img/foto.png"
          alt="foto.png"
          effect="blur"
          width={175}
          height={175}
        />
      </div>
      <h1 className="text-center text-base lg:text-lg md:text-lg sm:text-lg mt-5">
        Muhammad Dariaz Zidane
      </h1>
      <h2 className="text-sm text-center my-3 whitespace-nowrap">
        Front-end Web Developer
      </h2>
      <h3 className="text-sm my-3 whitespace-nowrap flex items-center gap-1">
        <MapPin color="lightgreen" />
        Karawang, indonesia
      </h3>
      <div className="flex justify-center gap-3 my-5">
        <Social />
      </div>
    </div>
  );
}

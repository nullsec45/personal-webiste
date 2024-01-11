import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function TimelineItemImage({ image }: { image: string }) {
  return (
    <div className="max-w-12 max-h-12">
      <LazyLoadImage
        src={image}
        alt={image}
        className={`w-full h-full object-cover rounded-sm shadow ${
          image == '/img/bangkit.webp' && 'bg-white'
        }`}
        effect="blur"
      />
    </div>
  );
}

import { DetailPropsType } from '@/types/DetailPropsType';
import { CarouselItem } from '@/components/ui/carousel';
import TimelineItemImage from '@/components/common/TimelineItemImage';
import TimelineItemDescription from './TimelineItemDescription';

export default function TimelineItem({ data }: { data: DetailPropsType }) {


  return (
    <CarouselItem
      className="md:basis-1/2 my-1 hover:scale-95 transition-transform duration-500 cursor-pointer "

    >
      <div className="flex gap-2 p-3 shadow rounded-md ">
        <TimelineItemImage image={data.image} />
        <TimelineItemDescription
          period={data.period}
          company={data.company}
          study={data.study}
          title={data.title}
          university={data.university}
        />
      </div>
    </CarouselItem>
  );
}

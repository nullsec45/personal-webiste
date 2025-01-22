import { Carousel, CarouselContent } from '@/components/ui/carousel';
import TimelineHeader from '@/components/common/TimelineHeader';
import { TimelineCardProps } from '@/types/TimelineCardProps';
import TimelineItem from '@/components/common/TimelineItem';
import { DetailPropsType } from '@/types/DetailPropsType';

export default function TimelineCard(props: TimelineCardProps) {
  const { title, icon, subtitle, datas } = props;

  return (
    <div className="my-4 w-full">
      <TimelineHeader title={title} icon={icon} subtitle={subtitle} />
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full my-2 mx-auto"
      >
        <CarouselContent className="px-0.5">
          {datas?.map((data: DetailPropsType) => (
              <TimelineItem data={data} key={data.id} />
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

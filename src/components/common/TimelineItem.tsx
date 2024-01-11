import { DetailPropsType } from '@/types/DetailPropsType';
import { useNavigate } from 'react-router-dom';
import { CarouselItem } from '@/components/ui/carousel';
import TimelineItemImage from '@/components/common/TimelineItemImage';
import TimelineItemDescription from './TimelineItemDescription';

export default function TimelineItem({ data }: { data: DetailPropsType }) {
  const navigate = useNavigate();

  const handleNavigate = (data: DetailPropsType) => {
    if (data.company) navigate(`/experience/${data.id}`);
    else navigate(`/education/${data.id}`);
  };

  return (
    <CarouselItem
      className="md:basis-1/2 my-1 hover:scale-95 transition-transform duration-500 cursor-pointer "
      onClick={() => handleNavigate(data)}
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

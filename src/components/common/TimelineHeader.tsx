import { TimelineCardProps } from '@/types/TimelineCardProps';
import ButtonDownloadCV from '@/components/common/ButtonDownloadCV';

export default function TimelineHeader(props: TimelineCardProps) {
  const { title, icon, subtitle } = props;

  return (
    <div className="flex justify-between flex-wrap items-start lg:flex-nowrap gap-3">
      <div>
        <div className="flex items-center gap-2">
          {icon}
          <h1 className="font-semibold md:text-lg">{title}</h1>
        </div>
        <h1 className="font-normal md:text-base mt-2 ">{subtitle}</h1>
      </div>
      {title == 'Carrer' && <ButtonDownloadCV />}
    </div>
  );
}

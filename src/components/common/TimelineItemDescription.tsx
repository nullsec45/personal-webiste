import { TimelineItemDescriptionPropsType } from '@/types/TimelineItemDescriptionPropsType';

export default function TimelineItemDescription(
  props: TimelineItemDescriptionPropsType
) {
  const { title, university, company, study, period } = props;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-medium leading-relaxed">
        {title ? title : university}
      </h1>
      <h2 className="text-sm opacity-80 leading-relaxed">
        {company ? company : study}
      </h2>
      <h3 className="text-xs leading-relaxed opacity-80">{period}</h3>
    </div>
  );
}

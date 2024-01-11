import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Socials } from '@/components/common/constant/Socials';
import { Link } from 'react-router-dom';

export default function Social() {
  return (
    <TooltipProvider>
      {Socials?.map((item, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Link to={item.href} target="_blank" aria-label={item.label}>
              {item.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}

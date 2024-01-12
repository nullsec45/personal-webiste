import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import TechItem from './TechItem';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { ProjectItemType } from '@/types/ProjectItemType';

export default function ProjectItemContent(props: ProjectItemType) {
  const { image, title, description, tech, repo, demo } = props;

  return (
    <DialogContent>
      <img
        className="w-full h-full rounded-md"
        src={image}
        alt={image}
        loading="lazy"
      />
      <DialogHeader>
        <DialogTitle className="text-left">{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>{description}</DialogDescription>
      <div className="flex justify-between gap-6 sm:items-center items-end">
        <ul className="flex items-center flex-wrap gap-3" role="list">
          {tech?.map((item) => (
            <TechItem key={item.id} value={item.value} />
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={repo} target="_blank">
            <SiGithub size={20} />
          </a>
          <a href={demo} target="_blank">
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </DialogContent>
  );
}

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import ProjectItemContent from '@/components/common/ProjectItemContent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ProjectItemType } from '@/types/ProjectItemType';
import TechItem from '@/components/common/TechItem';

export default function ProjectItem({ project, index }: { project: ProjectItemType; index: number }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="shadow-md border-0" data-aos="fade-up" data-aos-delay={`${index + 1}00`}>
          <CardHeader>
            <LazyLoadImage src={project.image} className="rounded-md" effect="blur" alt="/" />
          </CardHeader>
          <CardContent className="text-left">
            <h1 className="my-2 md:text-lg font-medium">{project.title}</h1>
            <CardDescription className="line-clamp-2 mb-4">{project.description}</CardDescription>
            <ul className="flex items-center gap-2" role="list">
              {project.tech?.slice(0, 4).map((item) => (
                <TechItem key={item.id} value={item.value} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </DialogTrigger>
      <ProjectItemContent demo={project.demo} description={project.description} image={project.image} title={project.title} repo={project.repo} tech={project.tech} />
    </Dialog>
  );
}

import { projects } from '@/components/common/constant/Projects';
import ProjectItem from '@/components/common/ProjectItem';
import { Separator } from '@/components/ui/separator';
import RootLayout from '@/layouts/RootLayout';

export default function Project() {
  return (
    <RootLayout title="Projects">
      <div className="py-10 max-w-5xl mx-auto px-4">
        <h1 className="md:text-2xl text-lg font-medium" data-aos="zoom-in">Projects</h1>
        <h2 className="opacity-80 my-2" data-aos="zoom-in">My projects that I have worked on.</h2>
          <Separator />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-5 place-items-start">
          {projects?.sort((a, b) => b.id - a.id).map((project, index: number) => (
            <ProjectItem  key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

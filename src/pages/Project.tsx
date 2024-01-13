import { projects } from '@/components/common/constant/Projects';
import ProjectItem from '@/components/common/ProjectItem';
import RootLayout from '@/layouts/RootLayout';

export default function Project() {
  return (
    <RootLayout title="Projects">
      <div
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-10"
        data-aos="fade-up"
      >
        {projects?.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </RootLayout>
  );
}

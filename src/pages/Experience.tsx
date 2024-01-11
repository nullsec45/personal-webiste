import RootLayout from '@/layouts/RootLayout';
import NotFound from './errors/NotFound';
import { useParams } from 'react-router-dom';
import Detail from '@/components/common/Detail';
import experiences from '@/data/experience.json';

export default function Experience() {
  const { id } = useParams();
  const experience = experiences.find(
    (experience) => experience.id == Number(id)
  );

  if (!experience) return <NotFound title="Experience" />;

  return (
    <RootLayout title={experience.title}>
      <Detail
        backgroundImage={experience.backgroundImage}
        image={experience.image}
        certificates={experience.certificates}
        skills={experience.skills}
        description={experience.description}
        company={experience.company}
        period={experience.period}
        title={experience.title}
      />
    </RootLayout>
  );
}

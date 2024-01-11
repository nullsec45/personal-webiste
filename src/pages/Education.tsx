import RootLayout from '@/layouts/RootLayout';
import NotFound from '@/pages/errors/NotFound';
import { useParams } from 'react-router-dom';
import educations from '@/data/education.json';
import Detail from '@/components/common/Detail';

export default function Education() {
  const { id } = useParams();
  const education = educations.find((education) => education.id == Number(id));

  if (!education) return <NotFound title="Education" />;

  return (
    <RootLayout title={education.university}>
      <Detail
        backgroundImage={education.backgroundImage}
        image={education.image}
        certificates={education.certificates}
        skills={education.skills}
        description={education.description}
        university={education.university}
        period={education.period}
        study={education.study}
      />
    </RootLayout>
  );
}

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DetailPropsType } from '@/types/DetailPropsType';
import CertificateItem from '@/components/common/CertificateItem';
import SkillsItem from '@/components/common/SkillsItem';

export default function Detail(props: DetailPropsType) {
  const {
    backgroundImage,
    image,
    title,
    period,
    company,
    university,
    study,
    description,
    skills,
    certificates,
  } = props;

  return (
    <div className="w-full h-full mt-10 relative min-h-screen mb-44">
      <LazyLoadImage
        className="w-full h-full object-cover rounded-md"
        src={backgroundImage}
        alt={backgroundImage}
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: '.2s' },
        }}
      />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
        <div className="md:max-w-[10rem] max-w-20 h-fit md:ml-10 -mt-12 md:-mt-14 md:sticky md:top-16">
          <LazyLoadImage
            className={`w-full h-full object-contain rounded-md shadow-md ${
              image == '/img/bangkit.webp' && 'bg-white'
            }`}
            src={image}
            alt={image}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: '.2s' },
            }}
          />
        </div>
        <div className="col-span-5 ">
          <div className="flex items-center justify-between flex-wrap">
            <h1 className="md:text-2xl text-base font-medium mt-3 ">
              {title ? title : university}
            </h1>
            <p className="text-sm opacity-80 my-2">{period}</p>
          </div>
          <h2 className="mt-1 text-sm md:text-base opacity-90">
            {company ? company : study}
          </h2>
          <p className="mt-4 text-sm leading-6 md:text-base">{description}</p>
          <ul
            className="mt-2 marker:text-indigo-500 list-disc list-inside"
            role="list"
          >
            {skills?.map((skill) => (
              <SkillsItem key={skill.id} name={skill.name} />
            ))}
          </ul>
          <div className="mt-4">
            {certificates?.length !== 0 && (
              <>
                <h1 className="font-medium text-base">Certifications :</h1>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-2">
                  {certificates
                    ?.sort((a, b) => b.id - a.id)
                    .map((item) => (
                      <CertificateItem item={item} key={item.id} />
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

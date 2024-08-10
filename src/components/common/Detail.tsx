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
    <div className="w-full h-full mt-10 relative min-h-screen mb-44" data-aos="fade-down">
      <LazyLoadImage
        className="w-full h-full object-cover rounded-md"
        src={backgroundImage}
        alt={backgroundImage}
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: '.2s' },
        }}
      />
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-4 gap-2">
        <div className="md:max-w-[7rem] sm:max-w-20  max-w-12 h-fit md:ml-10 ml-2 -mt-7 sm:-mt-10 md:-mt-14 md:sticky md:top-[5rem]">
          <LazyLoadImage
            className={`w-full h-full object-contain sm:block hidden rounded-md shadow-md ${
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
        <div className="col-span-5">
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
            className="mt-2 marker:text-indigo-500 list-disc list-inside text-sm md:text-base"
            role="list"
          >
            {skills?.map((skill) => (
              <SkillsItem key={skill.id} name={skill.name} />
            ))}
          </ul>
          <div className="mt-4">
            {certificates?.length !== 0 && (
              <>
                <h1 className="font-medium text-sm md:text-base">
                  Certifications:
                </h1>
                <div className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
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

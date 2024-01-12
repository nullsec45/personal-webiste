import { Stacks } from '@/components/common/constant/Stacks';
import TimelineCard from '@/components/common/TimelineCard';
import { ButtonIcon } from '@/components/common/ButtonIcon';
import ProfileCard from '@/components/common/ProfileCard';
import { FaCode, FaBriefcase } from 'react-icons/fa6';
import { Separator } from '@/components/ui/separator';
import experiences from '@/data/experience.json';
import educations from '@/data/education.json';
import RootLayout from '@/layouts/RootLayout';

export default function Home() {
  return (
    <RootLayout title="Home">
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <ProfileCard />
        <div className="w-full col-span-2 py-4 lg:px-10 md:px-8 sm:px-6">
          <div>
            <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
              <p className="leading-relaxed">
                I am a student in the Diploma 3 (D3) program currently pursuing
                my degree at Bina Sarana Informatika University in Karawang,
                West Java. I have a strong background in web development, with
                expertise in using platforms such as Laravel, CodeIgniter, and
                ReactJS to create versatile and user-friendly web applications.
              </p>
            </div>
          </div>
          <Separator />

          <TimelineCard
            datas={experiences}
            icon={<FaBriefcase size={18} />}
            title={'Carrer'}
            subtitle={'My professional career journey.'}
          />
          <Separator />
          <TimelineCard
            datas={educations}
            icon={<FaBriefcase size={18} />}
            title={'Education'}
            subtitle={'My education journey.'}
          />
          <Separator />

          <div className="my-4">
            <div className="flex items-center gap-2">
              <FaCode size={20} />
              <h1 className="font-semibold md:text-lg">Skills</h1>
            </div>
            <h1 className="font-normal md:text-base md:mt-2">
              My programming skills.
            </h1>
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 mt-5 gap-y-4 ">
              {Stacks?.map((item, index) => (
                <ButtonIcon key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

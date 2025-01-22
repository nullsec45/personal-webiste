import { Separator } from '@/components/ui/separator';
import RootLayout from '@/layouts/RootLayout';

export default function About() {
  return (
    <RootLayout title="About">
      <div className="py-10 max-w-5xl mx-auto px-4" data-aos="fade-up">
        <h1 className="md:text-2xl text-lg font-medium" data-aos="zoom-in">About</h1>
        <h2 className="opacity-80 my-2" data-aos="zoom-in">A short story of me</h2>
        <Separator />
        <div>
          <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
            <p className="leading-relaxed">
           I have 2 years of experience in web development. My skills: PHP with Laravel and Codeigniter frameworks, Typescript with NestJS Framework, Linux, Nginx, Docker, MySQL, Cron Job, and Bash. I am
passionate about web development, devops, cybersecurity, and other related
fields
            </p>
            <p className="leading-relaxed">
             I am committed to continue learning every day whether from blogs, YouTube, courses, or books. By making to do lists and recording learning history in Notion.
            </p>
          </div>
        </div>
     
      
      </div>
    </RootLayout>
  );
}

import { Separator } from '@/components/ui/separator';
import RootLayout from '@/layouts/RootLayout';
import { FaTiktok } from 'react-icons/fa6';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <RootLayout title="About">
      <div className="py-10 max-w-5xl mx-auto px-4" data-aos="fade-up">
        <h1 className="md:text-2xl text-lg font-medium" data-aos="zoom-in">About</h1>
        <h2 className="opacity-80 my-2" data-aos="zoom-in">A short story of me</h2>
        <Separator />
        <div>
          <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
            <p className="leading-relaxed">
              I am a student in the Diploma 3 (D3) program currently pursuing my
              degree at Bina Sarana Informatika University in Karawang, West
              Java. I have a strong background in web development, with
              expertise in using platforms such as Laravel, CodeIgniter, and
              ReactJS to create versatile and user-friendly web applications.
            </p>
            <p className="leading-relaxed">
              With a high level of enthusiasm for learning, I continually seek
              challenging and inspirational projects to enhance my skills in web
              development. I stay updated with industry advancements and
              continuously deepen my knowledge through online learning platforms
              and sources like YouTube.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-end py-3">
          <div>
            <div className="flex gap-2 items-center">
              <FaTiktok size={25} className="md:scale-100 scale-75" />
              <h1 className="md:text-lg font-semibold text-base">Tiktok</h1>
            </div>
            <p className="opacity-80 mt-2 lg:text-base md:text-base text-sm">
              Find me on tiktok
            </p>
          </div>
          <p className="opacity-80 lg:text-base md:text-base text-sm">
            @zidane_dev
          </p>
        </div>

        <blockquote
          className="tiktok-embed mt-2 rounded-lg"
          cite="https://www.tiktok.com/@zidane_dev"
          data-unique-id="zidane_dev"
          data-embed-type="creator"
          style={{ maxWidth: '720px', minWidth: '2rem' }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@zidane_dev?refer=creator_embed"
            >
              @zidane_dev
            </a>
          </section>
        </blockquote>
      </div>
    </RootLayout>
  );
}

import ContactForm from '@/components/common/ContactForm';
import ContactInfo from '@/components/common/ContactInfo';
import Social from '@/components/common/Social';
import RootLayout from '@/layouts/RootLayout';

export default function Contact() {
  return (
    <RootLayout title="Contact">
      <div
        className="flex md:my-12 my-7 max-w-5xl flex-wrap mx-auto"
        data-aos="fade-up"
      >
        <div className="lg:w-[35%] p-3 w-full ">
          <h1 className="mb-5">Contact Info</h1>
          <ContactInfo />
          <h1 className="mb-5 mt-6">Social Info</h1>
          <div className="flex gap-5 ">
            <Social />
          </div>
        </div>
        <div className="lg:w-[65%] mt-8 lg:mt-0 md:mt-0 sm:mt-0 w-full">
          <div className="p-4 rounded-md min-h-[6rem] bg-white shadow dark:bg-slate-900 w-full">
            <h1 className="lg:text-2xl text-base">
              Let's work <span className="text-indigo-500">together</span>
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

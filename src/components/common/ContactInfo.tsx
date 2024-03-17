import { Button } from '@/components/ui/button';
import { Contacts } from './constant/Contacts';

export default function ContactInfo() {
  return (
    <div className="flex flex-col mb-2 space-y-8">
      {Contacts?.map((item, index) => (
        <div className="flex items-center mt-2 gap-2" key={index}>
          <Button size="icon" className="rounded-lg">
            {item.icon}
          </Button>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm opacity-80">{item.label}</h1>
            <p className="text-sm">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

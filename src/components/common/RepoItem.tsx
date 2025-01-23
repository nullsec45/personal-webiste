import { ReactNode } from 'react';
import { SiGithub } from 'react-icons/si';


export default function TechItem({ value }: { value: ReactNode }) {
  return (
     <a href={`${value}`} target="_blank">
                  <SiGithub size={20} />
     </a>
  );
}

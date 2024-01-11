import { ReactNode } from 'react';

export default function TechItem({ value }: { value: ReactNode }) {
  return <li className="cursor-default">{value}</li>;
}

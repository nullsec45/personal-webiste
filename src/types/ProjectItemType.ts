import { TechItemType } from '@/types/TechItemType';

export type ProjectItemType = {
  id?: number;
  title: string;
  description: string;
  image: string;
  demo: string;
  repo: string;
  tech: TechItemType[];
};

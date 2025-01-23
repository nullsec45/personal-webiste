import { TechItemType } from '@/types/TechItemType';
import { RepoItemType } from './RepoItemType';

export type ProjectItemType = {
  id?: number;
  title: string;
  description: string;
  image: string;
  demo: string;
  repo: RepoItemType[];
  tech: TechItemType[];
};

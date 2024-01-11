import { ReactNode } from 'react';
import { DetailPropsType } from '@/types/DetailPropsType';

export type TimelineCardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  datas?: DetailPropsType[];
};

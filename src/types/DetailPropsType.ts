import { CertificateType } from '@/types/CertificateType';
import { SkillType } from '@/types/SkillType';

export type DetailPropsType = {
  id?: number;
  backgroundImage: string;
  image: string;
  title?: string;
  company?: string;
  university?: string;
  study?: string;
  period?: string;
  description: string;
  skills: SkillType[];
  certificates: CertificateType[];
};

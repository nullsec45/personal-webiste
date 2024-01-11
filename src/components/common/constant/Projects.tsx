import {
  SiBootstrap,
  SiCodeigniter,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const projects = [
  {
    id: 1,
    title: 'Ezrent',
    description:
      'Ezrent is an innovative rental platform for individual and business users. Easy rental experience with a variety of goods and services.',
    image: '/img/ezrent.png',
    demo: 'https://ezrent.my.id',
    repo: 'https://github.com/muhammaddariazzidane/Front-end-Capstone',
    tech: [
      {
        id: 1,
        value: <SiNextdotjs size={20} />,
      },
      {
        id: 2,
        value: <SiNestjs size={20} className="text-red-600" />,
      },
      {
        id: 3,
        value: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-[1.1rem] w-[1.1rem] rounded-sm text-white"
          >
            <rect width="256" height="256" fill="black"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        ),
      },
      {
        id: 4,
        value: <SiPrisma size={20} className="text-emerald-400" />,
      },
      {
        id: 5,
        value: <SiMysql size={20} className="text-blue-500" />,
      },
      {
        id: 6,
        value: <SiReacthookform size={20} className="text-pink-500" />,
      },
      {
        id: 7,
        value: (
          <img
            src="/img/zustand.png"
            alt="zustand.png"
            className="w-6 h-6"
            loading="lazy"
          />
        ),
      },
      {
        id: 8,
        value: <SiTailwindcss size={20} className="text-teal-500" />,
      },
      {
        id: 9,
        value: <SiTypescript size={20} className="text-blue-600" />,
      },
    ],
  },
  {
    id: 2,
    title: 'Website BLT Management',
    description:
      'The Profile Website of Tambaksari Village serves as an informative platform that showcases the rich history, cultural heritage, and ongoing development initiatives of the village. In addition, Tambaksari Village actively manages the Direct Cash Assistance (BLT) program, a government initiative that provides financial support to eligible individuals and families. With a systematic data management system in place, the village administration ensures accurate beneficiary registration, verification processes, and efficient monitoring of the programs effectiveness. By combining the websites informative features and effective data management.    ',
    image: '/img/tambaksari.png',
    demo: 'https://desa-tambaksari.000webhostapp.com/',
    repo: '',
    tech: [
      {
        id: 1,
        value: <SiCodeigniter size={20} className="text-orange-600" />,
      },
      {
        id: 2,
        value: <SiBootstrap size={20} className="text-indigo-600" />,
      },
      {
        id: 3,
        value: <SiMysql size={20} className="text-blue-500" />,
      },
    ],
  },
];

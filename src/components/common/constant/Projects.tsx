import {
  SiBootstrap,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiJsonwebtokens,
  SiPwa,
  SiLaravel,
  SiNginx,
  SiVuedotjs,
  SiReact,
  SiLeaflet
} from 'react-icons/si';

export const projects = [
  {
    id: 1,
    title: 'Check Rekening',
    description:
      'website to check account number or e-wallet number',
    image: '/img/check-rekening.png',
    demo: 'https://check-rekening.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/nullsec45/check-rekening-next'
      },
      {
        id:2,
        value:'https://github.com/nullsec45/check-rekening-react'
      }
    ],
    tech: [
      {
        id: 1,
        value: <SiNextdotjs size={20} className="text-black-600" title='NextJS'/>,
      },
      {
        id: 2,
        value: <SiBootstrap size={20} className="text-indigo-600" title='Bootstrap'/>,
      },
      {
        id: 3,
        value: <SiMysql size={20} className="text-orange-500" title='MySQL'/>,
      },
    ],
  },
  {
    id: 2,
    title: 'Ezrent',
    description: 'Ezrent is an innovative rental platform for individual and business users. Easy rental experience with a variety of goods and services.',
    image: '/img/ezrent.png',
    demo: 'https://ezrent.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/nullsec45/Back-end-Capstone'
      },
      {
        id:2,
        value:'https://github.com/muhammaddariazzidane/Front-end-Capstone'
      }
    ],
    
    tech: [
      {
        id: 1,
        value: <SiNextdotjs size={20} className='text-black-600' title='MySQL'/>,
      },
      {
        id: 2,
        value: <SiNestjs size={20} className="text-red-600" title='NestJS'/>,
      },
      {
        id: 3,
        value: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-[1.1rem] w-[1.1rem] rounded-sm text-white">
            <rect width="256" height="256" fill="black"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
          </svg>
        ),
      },
      {
        id: 4,
        value: <SiPrisma size={20} className="text-emerald-400" title='PrismaORM JS' />,
      },
      {
        id: 5,
        value: <SiMysql size={20} className="text-orange-500" title='MySQL'/>,
      },

      {
        id: 7,
        value: <img src="/img/zustand.png" alt="zustand.png" className="w-6 h-6" loading="lazy" title='Zustand' />,
      },
      {
        id: 8,
        value: <SiTailwindcss size={20} className="text-teal-500" title='Tailwind'/>,
      },
      {
        id: 9,
        value: <SiTypescript size={20} className="text-blue-600" title='TypeScript'/>,
      },
      {
        id: 10,
        value: <SiPostman size={20} className="text-orange-500" title='Postman'/>,
      },
      {
        id: 11,
        value: <SiJsonwebtokens size={20} className="text-pink-500" title='JWT'/>,
      },
      {
        id: 12,
        value: <SiPwa size={35} className="text-red-500" title='PWA'/>,
      },
    ],
  },
  {
    id: 3,
    title: 'Online Shop',
    description: 'Online Shop is a website platform for buying and selling goods, like a marketplace.',
    image: '/img/online-shop.png',
    demo: 'https://online-shop.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/nullsec45/laravel-online-shop'
      },
    ],
    
    tech: [
      {
        id: 1,
        value: <SiLaravel size={20} className="text-red-500" title='Laravel'/>,
      },
      {
        id: 2,
        value: <SiMysql size={20} className="text-blue-500" title='MySQL'/>,
      },
      {
        id: 3,
        value: <SiBootstrap size={20} className="text-blue-500" title='Bootstrap'/>,
      },
      {
        id: 3,
        value: <SiVuedotjs size={20} className="text-green-500" title='VueJS'/>,
      },
      {
        id: 4,
        value: <SiNginx size={20} className="text-blue-500" title='Nginx'/>,
      },
      
    ],
  },
  {
    id: 4,
    title: 'Luxspace',
    description: 'Website platform for buying and selling home furniture items',
    image: '/img/luxspace.png',
    demo: 'https://luxspace.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/nullsec45/luxspace'
      },
    ],
    
    tech: [
      {
        id: 1,
        value: <SiLaravel size={20} className="text-red-500" title='Laravel'/>,
      },
      {
        id: 2,
        value: <SiMysql size={20} className="text-orange-500" title='MySQL'/>,
      },
      {
        id: 3,
        value: <SiTailwindcss size={20} className="text-blue-500" title='TailwindCSS'/>,
      },
      {
     
        id: 3,
        value: <SiNginx size={20} className="text-green-500" title='Nginx'/>,
      },
      
    ],
  },
  {
    id: 5,
    title: 'Animes',
    description: 'Website platform for searching anime',
    image: '/img/animes.png',
    demo: 'https://animes.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/nullsec45/nexjs-anime-list'
      },
    ],
    
    tech: [
      {
        id: 1,
        value: <SiNextdotjs size={20} className='text-black-600' title='NextJS'/>,
      },
      {
        id: 2,
        value: <SiTailwindcss size={20} className="text-blue-500" title='TailwindCSS'/>,
      },
      {
     
        id: 3,
        value: <SiNginx size={20} className="text-green-500" title='Nginx'/>,
      },
      
    ],
  },
  {
    id: 6,
    title: 'SIG',
    description: 'website to display spatial data of all provinces and cities/regencies in Indonesia. Then display non-spatial data of Bali province in the form of a geographic information system',
    image: '/img/sig-home.png',
    demo: 'https://sig.ramafajar.com',
    repo: [
      {
        id:1,
        value:'https://github.com/SIG-STT-NF/frontend'
      },
      {
        id:2,
        value:'https://github.com/SIG-STT-NF/api-laravel'
      },
    ],
    
    tech: [
      {
        id: 1,
        value: <SiReact size={20} className='text-blue-500' title='ReactJS'/>,
      },
      {
        id: 2,
        value: <SiTailwindcss size={20} className="text-blue-500" title='TailwindCSS'/>,
      },
      {
     
        id: 3,
        value: <SiNginx size={20} className="text-green-500" title='Nginx'/>,
      },
      {
     
        id: 4,
        value: <SiLaravel size={20} className="text-red-500" title='Laravel'/>,
      },
      {
     
        id: 5,
        value: <SiMysql size={20} className="text-orange-500" title='MySQL'/>,
      },
      {
     
        id: 6,
        value: <SiLeaflet size={20} className="text-green-500" title='Leaflet'/>,
      },
    ],
  },
];

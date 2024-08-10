import {
  SiBootstrap,
  SiCodeigniter,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTensorflow,
  SiGooglecloud,
  SiPostman,
  SiJsonwebtokens,
  SiPwa,
  SiFirebase,
  SiKotlin,
  SiGooglegemini,
  SiVuedotjs,
  SiLaravel,
} from 'react-icons/si';

export const projects = [
  {
    id: 1,
    title: 'Website BLT Management',
    description:
      'The Profile Website of Tambaksari Village serves as an informative platform that showcases the rich history, cultural heritage, and ongoing development initiatives of the village. In addition, Tambaksari Village actively manages the Direct Cash Assistance (BLT) program, a government initiative that provides financial support to eligible individuals and families. With a systematic data management system in place, the village administration ensures accurate beneficiary registration, verification processes, and efficient monitoring of the programs effectiveness. By combining the websites informative features and effective data management.    ',
    image: '/img/tambaksari.png',
    demo: 'https://desa-tambaksari.000webhostapp.com/',
    repo: 'https://github.com/muhammaddariazzidane/project-semester-4',
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
  {
    id: 2,
    title: 'Ezrent',
    description: 'Ezrent is an innovative rental platform for individual and business users. Easy rental experience with a variety of goods and services.',
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-[1.1rem] w-[1.1rem] rounded-sm text-white">
            <rect width="256" height="256" fill="black"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
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
        id: 7,
        value: <img src="/img/zustand.png" alt="zustand.png" className="w-6 h-6" loading="lazy" />,
      },
      {
        id: 8,
        value: <SiTailwindcss size={20} className="text-teal-500" />,
      },
      {
        id: 9,
        value: <SiTypescript size={20} className="text-blue-600" />,
      },
      {
        id: 10,
        value: <SiPostman size={20} className="text-orange-500" />,
      },
      {
        id: 11,
        value: <SiJsonwebtokens size={20} className="text-pink-500" />,
      },
      {
        id: 12,
        value: <SiPwa size={35} className="text-red-500" />,
      },
    ],
  },

  {
    id: 3,
    title: 'Teran App',
    description: 'Stress Detection and Management Application for Students using Machine Learning',
    image: '/img/teran.png',
    demo: 'https://drive.google.com/drive/folders/10SLurz9HxJ8ifH351hhwfr4c8QuCaOVe',
    repo: 'https://github.com/Teran-Capstone-Project',
    tech: [
      {
        id: 1,
        value: <SiKotlin size={20} className="text-violet-500" />,
      },
      {
        id: 2,
        value: <SiTensorflow size={20} className="text-orange-500" />,
      },
      {
        id: 3,
        value: <SiExpress size={20} className="dark:text-white" />,
      },
      {
        id: 4,
        value: <SiGooglecloud size={20} className="text-blue-500" />,
      },
      {
        id: 5,
        value: <SiPostman size={20} className="text-orange-500" />,
      },
      {
        id: 6,
        value: <SiJsonwebtokens size={20} className="text-pink-500" />,
      },
    ],
  },
  {
    id: 4,
    title: 'DZ-AI',
    description:
      'DZ-AI utilizes the latest technology in artificial intelligence (AI), specifically using the AI ​​model from Gemini. Discover innovative applications and intelligent AI-based solutions at DZ-AI, giving you access to industry-leading technology.',
    image: '/img/dzai.png',
    demo: 'https://dzai.vercel.app',
    repo: 'https://github.com/muhammaddariazzidane/dzai',
    tech: [
      {
        id: 1,
        value: <SiNextdotjs size={20} />,
      },
      {
        id: 2,
        value: <SiFirebase size={20} className="text-orange-500" />,
      },
      {
        id: 3,
        value: <SiGooglegemini size={20} className="text-sky-500" />,
      },
      {
        id: 4,
        value: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-[1.1rem] w-[1.1rem] rounded-sm text-white">
            <rect width="256" height="256" fill="black"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
          </svg>
        ),
      },
      {
        id: 5,
        value: <SiPwa size={35} className="text-red-500" />,
      },
    ],
  },
  {
    id: 5,
    title: 'DZ E-Library',
    description:
      'DZ E-Library is an online library platform that provides a wide range of digital books and resources for users to read and explore. The platform is designed to be user-friendly and accessible to all users, allowing them to easily search for and access the books they need. With a diverse collection of books and resources available, DZ E-Library aims to promote reading and learning among users of all ages.',
    image: '/img/elibrary.png',
    demo: 'https://perpus-zidane.vercel.app',
    repo: '',
    tech: [
      {
        id: 1,
        value: <SiVuedotjs size={20} className="text-emerald-600" />,
      },
      {
        id: 2,
        value: <SiLaravel size={20} className="text-red-500" />,
      },
      {
        id: 3,
        value: (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 331">
            <defs>
              <linearGradient id="logosPinia0" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%">
                <stop offset="0%" stopColor="#52ce63"></stop>
                <stop offset="100%" stopColor="#51a256"></stop>
              </linearGradient>
              <linearGradient id="logosPinia1" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%">
                <stop offset="0%" stopColor="#52ce63"></stop>
                <stop offset="100%" stopColor="#51a256"></stop>
              </linearGradient>
              <linearGradient id="logosPinia2" x1="50%" x2="50%" y1="0%" y2="58.811%">
                <stop offset="0%" stopColor="#8ae99c"></stop>
                <stop offset="100%" stopColor="#52ce63"></stop>
              </linearGradient>
              <linearGradient id="logosPinia3" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%">
                <stop offset="0%" stopColor="#ffe56c"></stop>
                <stop offset="100%" stopColor="#ffc63a"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#logosPinia0)"
              d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799s-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125"
              transform="rotate(-38 72.877 106.136)"
            ></path>
            <path
              fill="url(#logosPinia1)"
              d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415s-35.989 32.542-32.334 69.717s15.201 61.92 45.567 64.905"
              transform="rotate(52 178.34 119.085)"
            ></path>
            <path
              fill="url(#logosPinia2)"
              d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013S138.531 3.745 129.232 3.745S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013"
              transform="rotate(7 128.858 77.673)"
            ></path>
            <path
              fill="url(#logosPinia3)"
              d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482s-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462s46.105 91.482 103.002 91.482"
            ></path>
            <ellipse cx={165.427} cy={216.677} fill="#eaadcc" rx={14.717} ry={6.845}></ellipse>
            <ellipse cx={57.273} cy={212.57} fill="#eaadcc" rx={14.717} ry={6.845} transform="rotate(7 57.273 212.57)"></ellipse>
            <path d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.818 178.63a14.67 14.67 0 0 1 10.551 3.945a14.67 14.67 0 0 1 4.672 10.25a14.67 14.67 0 0 1-3.945 10.55a14.67 14.67 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.551-3.945a14.67 14.67 0 0 1-4.67-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.249-4.672"></path>
            <path fill="#fff" d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336a4.792 4.792 0 0 0 9.579-.336"></path>
            <path d="M154.99 182.366a14.67 14.67 0 0 1 10.552 3.944a14.67 14.67 0 0 1 4.67 10.25a14.67 14.67 0 0 1-3.944 10.551a14.67 14.67 0 0 1-10.25 4.671a14.67 14.67 0 0 1-10.55-3.945a14.67 14.67 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.67 14.67 0 0 1 10.25-4.671"></path>
            <path
              fill="#fff"
              d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165s-7.342 18.065-17.166 18.408s-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224s11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165s-7.342 18.065-17.165 18.408s-18.065-7.342-18.408-17.165s7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223s-11.448 5.613-11.223 12.036s5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037"
            ></path>
            <path fill="#fff" d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335"></path>
            <path
              fill="#ecb732"
              d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z"
            ></path>
            <path
              fill="#ffc73b"
              d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0"
            ></path>
          </svg>
        ),
      },
      {
        id: 4,
        value: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-[1.1rem] w-[1.1rem] rounded-sm text-white">
            <rect width="256" height="256" fill="black"></rect>
            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
          </svg>
        ),
      },
      {
        id: 5,
        value: <SiJsonwebtokens size={20} className="text-pink-500" />,
      },
      {
        id: 6,
        value: <SiPostman size={20} className="text-orange-500" />,
      },
      {
        id: 7,
        value: <SiMysql size={20} className="text-blue-500" />,
      },
    ],
  },
];

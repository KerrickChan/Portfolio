import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Eric Chan',
  title: "Hello There, I'm Eric Chan",
  description:
    "I'm Software Engineer who is passionate about building scalable software, creating effective solutions, and learning new technologies.",
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/1d8fd4e4796c4bc77d5c6af5b5c5b72eb2a9a9c792d2bba18f75e3ca19f25d59c83ec485e33222/',
  github: 'https://github.com/kerrickchan',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Focus on JavaScript Ecosystem Technologies Developer',
  data: [
    {
      title: 'Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'Tailwind CSS',
          fontAwesomeClassName: 'logos:tailwindcss-icon',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'React Native',
          fontAwesomeClassName: 'tabler:brand-react-native',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:nestjs',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend',
    progressPercentage: '80',
  },
  {
    Stack: 'Backend',
    progressPercentage: '50',
  },
  {
    Stack: 'Cloud',
    progressPercentage: '30',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
  {
    Stack: 'Documentation',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Middlesex University',
    subHeader: 'BSc(Hons) Information Technology and Business Information Systems',
    duration: 'January 2022 - January 2023',
    desc: 'Part Time Top Up Degree Study in The Hong Kong Management Association',
    grade: 'Second Upper Class Honours',
    descBullets: [
    ],
  },
  {
    schoolName: 'Staffordshire University',
    subHeader: 'BSc (Hons) Computing Science',
    duration: 'September 2013 - April 2015',
    desc: 'Part Time Top Up Degree Study in the CityU SCOPE',
    grade: 'Pass',
    descBullets: [
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Software Engineer',
    company: 'YOOV Internet Technology Limited',
    companyLogo: '/img/icons/company/yoov.jpeg',
    date: 'Aug 2022 - Present',
    desc: '',
  },
  {
    role: 'Analysis Programmer',
    company: 'Soepay Limited',
    companyLogo: '/img/icons/company/soepay.jpeg',
    date: 'Nov 2021 - May 2022',
    desc: '',
  },
  {
    role: 'Information Technology Programmer',
    company: 'Hospital Authority',
    companyLogo: '/img/icons/company/ha.webp',
    date: 'Nov 2020 - Nov 2021',
    desc: '',
  },
  {
    role: 'Programmer',
    company: 'Taste of Asia Group Limited',
    companyLogo: '/img/icons/company/toa.jpeg',
    date: 'Aug-2019 - Nov 2020',
    desc: '',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Kerrick Chan - Software Engineer',
  description:
    'A passionate Software Engineer in ReactJS and NodeJS.',
  keywords: [
    'Kerrick Chan Portfolio',
  ],
};

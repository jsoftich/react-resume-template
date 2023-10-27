import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import CalculateDiff from "../components/age-calculator";
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import introImage from '../images/Glacier.jpg';
import profilepic from '../images/JohnSoftich.jpg';
import portfolioImage from '../images/WhitefishLake.jpg';
import {
  About,
  ContactSection,
  ContactType,
  HomepageMeta,
  Intro,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';


export const myAge = CalculateDiff([
  +1976,
  +6,
  +19,
]);


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'John Softich resume',
  description: "My React resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Intro: 'intro',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const introData: Intro = {
  imageSrc: introImage,
  name: `I'm John Softich.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Montana based <strong className="text-stone-100">Software Engineering leader</strong>, currently working
        at <strong className="text-stone-100">National Flood Services</strong> leading all aspects of software development of a modern policy and claim systems for NFIP Flood Insurance.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Fly Fishing</strong>,
        creating man glitter in my <strong className="text-stone-100">garage</strong>, or travelling with my wife to college football and all the {' '}
        <strong className="text-stone-100">MLB stadiums</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'http://www.johnsoftich.com/assets/JohnSoftich-Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * Portfolio section
 */
export const portfolioData: PortfolioItem = {
  imageSrc: portfolioImage,
  name: `I'm John Softich.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Montana based <strong className="text-stone-100">Software Engineering leader</strong>, currently working
        at <strong className="text-stone-100">National Flood Services</strong> leading all aspects of software development of a modern policy and claim systems for NFIP Flood Insurance.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Fly Fishing</strong>, 
        creating man glitter in my <strong className="text-stone-100">garage</strong>, or travelling for college football and to all {' '}
        <strong className="text-stone-100">MLB stadiums</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a highly skilled and adaptable professional with a strong technical background in .NET/C#, SQL Server, React/JavaScript, and AWS. Exceptional in agile project and product management methodologies.  I have substantial experience driving successful software development initiatives, leading high-performing engineering teams, delivering cutting-edge solutions, managing product development lifecycle, and aligning technology strategies with business objectives. I have skills in strategic planning, goal setting, process development, budgeting, and creating opportunities for professional development within technology teams. `,
  aboutItems: [
    {label: 'Location', text: 'Kalispell, MT', Icon: MapIcon},
    {label: 'Age', text: myAge.years, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian / Scottish / Slavic', Icon: FlagIcon},
    {label: 'Interests', text: 'Fly Fishing, Woodworking, Sports', Icon: SparklesIcon},
    {label: 'College', text: 'Montana State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'National Flood Services - Peak6', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7.5,
      },
      {
        name: 'TypeScript',
        level: 6,
      },      
      {
        name: 'ASP.NET Core Blazor',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 5,
      },
      {
        name: 'Angular',
        level: 7,
      },   
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C#(.NET/CORE)',
        level: 9,
      },
      {
        name: 'Java',
        level: 6.5,
      },      
      {
        name: 'GoLang',
        level: 3,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Perl',
        level: 6,
      },      
    ],
  },  
  {
    name: 'Database development',
    skills: [
      {
        name: 'SQL Server 2008+',
        level: 9.5,
      },
      {
        name: 'PostgreSQL',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Oracle',
        level: 6,
      },     
      {
        name: 'DB2 for i',
        level: 8,
      },           
    ],
  },  
  {
    name: 'Scripting',
    skills: [
      {
        name: 'PowerShell',
        level: 8.5,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'Bash',
        level: 7.5,
      },
      {
        name: 'C shell',
        level: 5,
      },      
      {
        name: 'PHP',
        level: 8,
      },
    ],
  },
  {
    name: 'Agile',
    skills: [
      {
        name: 'Scrum',
        level: 10,
      },
      {
        name: 'Kanban',
        level: 9.5,
      },      
      {
        name: 'Sprint Planning',
        level: 9.5,
      },
      {
        name: 'Backlog Refinement',
        level: 9.5,
      },
      {
        name: 'User Stories',
        level: 8,
      },      
    ],
  },
  {
    name: 'Version Control',
    skills: [
      {
        name: 'Team Foundation Server',
        level: 9,
      },
      {
        name: 'Azure DevOps',
        level: 6.5,
      },      
      {
        name: 'Git',
        level: 8.5,
      },
      {
        name: 'GitHub',
        level: 8,
      },
      {
        name: 'BitBucket',
        level: 8.5,
      },      
    ],
  },    
];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2000',
    location: 'Montana State University',
    title: 'BS Mathematics - Minor Computer Science',
    content: <p></p>,
  },
  {
    date: 'October 2017',
    location: 'Harvard Business School',
    title: 'Executive Education - Advanced Management Program, Organization Leadership',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2011 - Present',
    location: 'National Flood Services - Peak6',
    title: 'Director of Software Engineering',
    content: (
      <p>
       Orchestrate end-to-end project management, including software development, rigorous testing, release, and configuration management, across a spectrum of technologies encompassing Microsoft, IBM, and AWS platforms. Develop high-performing development teams by establishing clear expectations, managing objectives, providing coaching, steering career development, and executing targeted recruitment efforts. Function as product owner for all legacy platforms and serve as a pivotal Subject Matter Expert (SME) for the new platform, driving strategic initiatives.      
      </p>
    ),
  },
  {
    date: 'September 2003 - August 2011',
    location: 'Merlin Information Services',
    title: 'Director of IT',
    content: (
      <p>
        Headed information technology encompassing software development, IT operations/networking, IT security, data processing/warehouse, and helpdesk/sustainment services. Supervised a proficient team of twelve professionals while managing a substantial $3M budget. Led software and system architecture, instilling rigorous development processes and standards across the organization. Delivered a custom site on schedule for the company's largest client without disrupting ongoing operations. Established a new internal data center and managed multiple colocation facility migrations and consolidation efforts.
      </p>
    ),
  },
  {
    date: 'October 1999 - September 2003',
    location: 'Frontline Processing',
    title: 'IT Manager/Senior Web Developer',
    content: (
      <p>
        I oversaw the Information Technology and Customer Service operations for a $100 million Information Services Company. My responsibilities included managing various aspects such as software development, quality assurance (QA), infrastructure, security, project management, helpdesk, and customer service.
      </p>
    ),
  },  
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact Info',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@johnsoftich.com',
      href: 'mailto:contact@johnsoftich.com',
    },
    {
      type: ContactType.Location,
      text: 'Kalispell, MT',
      href: 'https://www.google.com/maps/place/Kalispell,+MT+59901/@48.2247291,-114.3173031,12.75z/data=!4m6!3m5!1s0x536650959ceac247:0xaf1fbdda1d5abb62!8m2!3d48.1919889!4d-114.316813!16zL20vMHgxdnQ?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@jsoftich',
      href: 'https://www.instagram.com/jsoftich/',
    },
    {
      type: ContactType.Github,
      text: 'jsoftich',
      href: 'https://github.com/jsoftich',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jsoftich'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/1325267/ninghad'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jsoftich/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jsoftich/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/johnsoftich'},
];

import { ICON } from './icon'

export const META = {
  title: 'Gear - Chalermkried Sudjanakobkul',
  desc: 'A Front-End Engineer who likes, create, and optimize websites, problem-solving, helping people, and appreciate arts.',
  image: 'https://chalermkried.github.io/assets/cover.jpg',
  url: 'https://chalermkried.github.io',
}

export const CONTENT_ABOUT = {
  title: 'Chalermkried Sudjanakobkul',
  subtitle: 'Software Engineer',
  desc: `Hi, I'm Gear!

  I'm a Software Engineer who likes to turn ideas into reality.

  Software, applications, services, whatever you want to call them, should be easy to use, fast, snappy, and fun. Just like everything in life that people want to use repeatedly, they should provide an enjoyable experience!

  I put my effort and take pride in making the statements above true for my work.

  I have experience in the entire software development life cycle, in roles such as Frontend Engineer, Backend Engineer, Assistant Product Manager, and DevOps/Platform Engineer.

  However, my main background is as a Frontend Engineer who enjoys optimizing the entire development flow. This includes Code Quality gates (both on local machines and server automations), git branching strategy and flow, CI/CD (covering both deployment and delivery), the final product itself (deployment infrastructure/architecture, caching/network latency), and, last but not least, handling failures (rollback and graceful fallback for users)

  Coding Preferences
  - Typescript
  - No semi-colons
  - Spaces
  - Infrastructure as code
  - Automate everything!

  Life Preferences
  - Music
  - Football
  - Philosophy
  - Awesome people!
  `,
  github: 'https://github.com/chalermkried/',
  linkedin: 'https://www.linkedin.com/in/gear-chalermkried/',
}

export const CONTENT_EXP = {
  title: 'Experience',
  data: [
    {
      desc: `Due to changes in the global economy, the team was restructured, and the workload for the frontend part decreased.
      
      I adapted myself to work in multiple roles within the tech team, returning as a Full-Stack Engineer. Additionally, I had the opportunity to dive deep into CI/CD and the infrastructure of all services as a DevOps Engineer.
      
      The main focus of the work shifted from feature delivery to maintenance and migrations.
      
      Milestones:
      - Set up a new production AWS VPC/EKS using terragrunt
      - Migrate all applications/services from the old EKS cluster to the new one
      - Migrate CI/CD from Circle CI to GitHub Actions`,
      icon: ICON.terminal,
      skills: [
        'Github Actions',
        'ArgoCD',
        'Helm',
        'Kustomize',
        'Kubernetes',
        'AWS',
        'Terraform',
        'Terragrunt',
        'Docker',
        'Python',
        'Go',
      ],
      subtitle: 'CREA',
      title: 'Senior Fullstack/DevOps Engineer',
      titleCaption: 'Oct 2022 - Present',
    },
    {
      desc: `I returned to a leaner working environment and resumed a more frontend-focused role. As a senior member of the team, my work scope expanded to more than just coding and delivering features.
      
      The applications I worked on are more logic-heavy and involved many connected parts. Effective state management and data manipulation were crucial. Our team's work also involved the process of migrating an older codebase to a newer stack, which required regular collaboration and communication between engineers.
      
      Software paradigms, concepts, and architectural design played a vital role in helping the company, the team, and application scaling.
      
      Milestones:
      - Integrate of Auth0
      - Integrate of Semantic Release
      - Migrate CRA project to Vite
      - Migrate Redux to Zustand
      - Mentor a team member`,
      icon: ICON.terminal,
      skills: [
        'CircleCI',
        'Semantic Release',
        'React Query',
        'Clean Architecture',
        'Python',
        'Django',
      ],
      subtitle: 'CREA',
      title: 'Senior Frontend Engineer',
      titleCaption: 'Dec 2021 - Oct 2022',
    },
    {
      desc: `I worked in a financial-related corporate firm for the first time, where I had the opportunity to work on various projects, including both customer-facing and internal products. The works involved different stacks such as Front-end, BFF, Gateway, APIs, and Back-end.
      
      Within the technology team, I learned to use several new tools and worked with different service providers. I gained more hands-on experience in building products and applications from the ground up.

      The scope of work in this role was quite broad. I had more opportunities to be involved in the DevOps part of the product cycle compared to my previous experiences. My daily tasks as a developer focused less on the Front-end and spread across various stacks, with a greater emphasis on understanding the overall applications.
      
      Additionally, being in a financial firm, the applications required a strong focus on security, legal/consent, and data integrity.
      
      Milestones:
      - Migratie projects on Bamboo to Jenkins
      - Load test the Azure-hosted services
      - Create campaign microsites on both frontend and backend
      - Design and build a webhook service that the customer connects`,
      icon: ICON.terminal,
      skills: [
        'Backends for Frontends',
        'Zod',
        'APIs',
        'Gateway',
        'Oauth2 & JWT',
        'Sequelize',
        'Kubernetes',
        'Helm',
        'Docker',
        'Azure',
        'Groovy',
        'DevSecOps',
      ],
      subtitle: 'Prudential Life Assurance (Thailand) PCL',
      title: 'Full-Stack Developer',
      titleCaption: 'Nov 2020 - Dec 2021',
    },
    {
      desc: `With the new role, I carried over most of the tasks from my previous position. However, as a Senior, I had the opportunity to provide assistance and mentorship to other team members. Additionally, I had increased responsibility in making decisions during meetings with other teams.

      After a few months, circumstances led to me being promoted to the position of web team lead within the company. This promotion came with additional responsibilities, including tasks at higher levels such as team management, web monitoring, infrastructure monitoring, release management, documentation, and overseeing a team of outsourced developers.

      Milestones:
      - Spearhead the team on frontend rebrand/redesign with a design system
      - Lead the web team with 4 members (internal and outsource)
      - Migration of Bitbucket to Github (including the CI/CD)
      - Stress test and optimize the web for handling heavy campaign traffic`,
      icon: ICON.terminal,
      skills: [
        'Github',
        'Github Action',
        'CI/CD',
        'Nginx',
        'A/B Testing',
        'Segment',
        'Sentry',
        'Datadog',
        'Team Management',
        'Task Delegation',
        'AWS',
        'CDN',
        'Stress Testing',
      ],
      subtitle: 'Pomelofashion',
      title: 'Senior Front-End Engineer',
      titleCaption: 'Feb 2020 - Nov 2020',
    },
    {
      desc: `I worked as part of the Front-End web team, responsible for maintaining, implementing new features, and supporting campaigns with the newly released Pomelo website.

      The Pomelo web was the primary product of focus. I collaborated closely with the UI/UX team to implement and enhance the website based on the provided mockups and priorities set by the Product team. I also worked closely with the QA team to address issues and bugs. Additionally, I took on the role of lead developer for other web projects such as Pomelo Screens and Internal Dashboards during the later part of this period.
      
      During this time, I had the opportunity to participate in the LEAD program, an internal employee development program. Through this program, I learned how to work as an assistant product manager for the Pomelo Partner project.

      Milestones:
      - Manage the Pomelo Screen and Internal Dashboard projects
      - Create season campaign landing pages
      - Take the role of Assistance Product Manager for 6 months
      - Implement A/B testings as part of the growth tribe`,
      icon: ICON.terminal,
      skills: [
        'React',
        'React Hook',
        'SEO',
        'Next.js',
        'Server Side Rendering',
        'Jenkins',
        'Redux',
        'Segment',
        'Session Monitoring',
        'GTM & GA',
        'Product Management',
      ],
      subtitle: 'Pomelofashion',
      title: 'Front-End Engineer',
      titleCaption: 'Aug 2018 - Jan 2020',
    },
    {
      desc: `I worked as a member of the Front-End web development team in a multicultural software house company, which had a full team dedicated to product/software development consisting of Designers (UI/UX), Product Managers (PM/PO), Testers (QA), and Backend Developers.

      During my time here, I had the opportunity to work on various projects. The first project provided me with valuable learning experiences, allowing me to explore the latest web technologies and gain a better understanding of the software development process. One notable project was a large-scale endeavor with a tight deadline, transitioning into the MVP (Minimum Viable Product) development phase. Additionally, we provided ongoing support after the project was launched.`,
      icon: ICON.terminal,
      skills: [
        'TypeScript',
        'Git',
        'Bitbucket',
        'JIRA',
        'Scrum',
        'Agile',
        'REST',
        'Angular',
        'RxJS',
        'NgRx',
      ],
      subtitle: '7 Peaks Software',
      title: 'Junior Front-End Developer',
      titleCaption: 'Jun 2017 -  Aug 2018',
    },
    {
      desc: `I studied Computer Science, focusing on subjects such as Data Structures, Algorithms, Mathematics, Statistics, and various topics related to the fundamentals of programming and problem-solving.

      Throughout my academic journey, I completed numerous full-stack web projects and gained experience in various programming languages and product development. This includes languages such as C, C#, Swift, and Visual Basic, as well as exploring mobile development, game development using Unity, and product development with system analysis.`,
      icon: ICON.library,
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHP',
        'MySQL',
        'Oracle',
        'Apache',
        'Monolithic',
      ],
      subtitle: 'Srinakharinwirot University',
      title: 'Student',
      titleCaption: '2014 - 2017',
    },
  ],
}

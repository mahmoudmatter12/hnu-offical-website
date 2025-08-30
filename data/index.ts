export const heroSection = {
  title: {
    en: 'Welcome to HNU Official Website',
    ar: ' مرحبًا بكم في الموقع الرسمي لجامعة حلوان الاهلية',
  },
  description: {
    en: 'Discover excellence in education, innovation, and community. Join us in shaping the future through knowledge, research, and transformative learning experiences.',
    ar: 'اكتشف التميز في التعليم والابتكار والمجتمع. انضم إلينا في تشكيل المستقبل من خلال المعرفة والبحث والتجارب التعليمية التحويلية.',
  },
  image: '/home.jpeg',
  video: '/home.mp4',
  logo: '/logo.png',
  noBgLogo: '/logo2.png',
};

export const aboutSection = {
  title: {
    en: 'About Us',
    ar: 'ماذا عنا',
  },
  subtitle: {
    en: 'Excellence in education, research, and community impact',
    ar: 'التميز في التعليم والبحث وتأثير المجتمع',
  },
  description: {
    en: 'Helwan National University is dedicated to fostering innovation, academic excellence, and societal development. We empower students with cutting-edge programs, world-class faculty, and a vibrant campus life that nurtures leadership and creativity.',
    ar: 'تكرس جامعة حلوان جهودها لتعزيز الابتكار والتميز الأكاديمي والتنمية المجتمعية. نحن نمكّن الطلاب من خلال برامج متطورة، وأعضاء هيئة تدريس من الطراز العالمي، وحياة جامعية نابضة تعزز القيادة والإبداع.',
  },
  image: '/home.jpeg',
  titleClassName: 'text-[#023e8a]',
  cardTitleClassName: 'text-[#023e8a]',
  highlights: [
    {
      title: {
        en: 'Modern Programs',
        ar: 'برامج حديثة',
      },
      description: {
        en: 'Interdisciplinary programs aligned with global market demands.',
        ar: 'برامج متعددة التخصصات تتماشى مع متطلبات السوق العالمية.',
      },
    },
    {
      title: {
        en: 'Research & Innovation',
        ar: 'البحث والابتكار',
      },
      description: {
        en: 'A thriving ecosystem supporting impactful research and startups.',
        ar: 'نظام بيئي مزدهر يدعم البحث المؤثر والشركات الناشئة.',
      },
    },
    {
      title: {
        en: 'Campus Life',
        ar: 'حياة الحرم الجامعي',
      },
      description: {
        en: 'A diverse, inclusive, and engaging community experience.',
        ar: 'تجربة مجتمعية متنوعة وشاملة وجذابة.',
      },
    },
    {
      title: {
        en: 'Global Partnerships',
        ar: 'الشراكات العالمية',
      },
      description: {
        en: 'Collaborations with leading institutions and industry partners.',
        ar: 'التعاون مع المؤسسات الرائدة والشركاء في الصناعة.',
      },
    },
  ],
};

export const programsSection = {
  title: {
    en: 'Programs & Faculties',
    ar: 'البرامج والكليات',
  },
  subtitle: {
    en: 'Explore our diverse academic programs across faculties',
    ar: 'استكشف برامجنا الأكاديمية المتنوعة عبر الكليات',
  },
  accentClassName: 'text-[#023e8a]',
  cardTitleClassName: 'text-[#023e8a]',
  items: [
    {
      id: 'eng-cs',
      title: {
        en: 'Computer Science & Information Technology',
        ar: 'علوم الحاسوب وتكنولوجيا المعلومات',
      },
      faculty: {
        en: 'Engineering',
        ar: 'الهندسة',
      },
      description: {
        en: 'Advanced curriculum covering algorithms, systems, AI, and software engineering with industry projects.',
        ar: 'منهج متقدم يغطي الخوارزميات والأنظمة والذكاء الاصطناعي وهندسة البرمجيات مع مشاريع صناعية.',
      },
      duration: {
        en: '4 years',
        ar: '٤ سنوات',
      },
      degree: {
        en: 'B.Sc.',
        ar: 'بكاليروس في العلوم',
      },
      money: {
        en: 'EGP 60,000/yr',
        ar: '٦٠٠٠٠ جنيه مصري سنويًا',
      },
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'business-admin',
      title: {
        en: 'Business Administration',
        ar: 'إدارة الأعمال',
      },
      faculty: {
        en: 'Business',
        ar: 'الأعمال',
      },
      description: {
        en: 'Leadership, finance, marketing, and analytics for future-ready business professionals.',
        ar: 'القيادة والتمويل والتسويق والتحليلات للمهنيين المستعدين للمستقبل في مجال الأعمال.',
      },
      duration: {
        en: '4 years',
        ar: '٤ سنوات',
      },
      degree: {
        en: 'B.B.A.',
        ar: 'بكاليروس في إدارة الأعمال',
      },
      money: {
        en: 'EGP 55,000/yr',
        ar: '٥٥٠٠٠ جنيه مصري سنويًا',
      },
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'law',
      title: {
        en: 'Law',
        ar: 'القانون',
      },
      faculty: {
        en: 'Law',
        ar: 'القانون',
      },
      description: {
        en: 'Foundations of legal systems, jurisprudence, and practical case analysis.',
        ar: 'أسس الأنظمة القانونية، والفقه، وتحليل الحالات العملية.',
      },
      duration: {
        en: '4 years',
        ar: '٤ سنوات',
      },
      degree: {
        en: 'LL.B.',
        ar: 'بكاليروس في القانون',
      },
      money: {
        en: 'EGP 50,000/yr',
        ar: '٥٠٠٠٠ جنيه مصري سنويًا',
      },
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'medicine',
      title: {
        en: 'Medicine',
        ar: 'الطب',
      },
      faculty: {
        en: 'Medicine',
        ar: 'الطب',
      },
      description: {
        en: 'Comprehensive medical education with clinical training and research opportunities.',
        ar: 'تعليم طبي شامل مع تدريب عيادي وفرص بحثية.',
      },
      duration: {
        en: '6 years',
        ar: '٦ سنوات',
      },
      degree: {
        en: 'M.B.B.Ch.',
        ar: 'بكاليروس في الطب',
      },
      money: {
        en: 'EGP 90,000/yr',
        ar: '٩٠٠٠٠ جنيه مصري سنويًا',
      },
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'applied-health',
      title: {
        en: 'Applied Health Sciences Technology',
        ar: 'تكنولوجيا العلوم الصحية التطبيقية',
      },
      faculty: {
        en: 'Applied Health Sciences Technology',
        ar: 'تكنولوجيا العلوم الصحية التطبيقية',
      },
      description: {
        en: 'Healthcare technology, diagnostics, and applied clinical sciences.',
        ar: 'تكنولوجيا الرعاية الصحية، والتشخيصات، والعلوم السريرية التطبيقية.',
      },
      duration: {
        en: '4 years',
        ar: '٤ سنوات',
      },
      degree: {
        en: 'B.Sc.',
        ar: 'بكاليروس في العلوم',
      },
      money: {
        en: 'EGP 60,000/yr',
        ar: '٥٨٠٠٠ جنيه مصري سنويًا',
      },
      image: '/home.jpeg',
      href: '#',
    },
  ],
};

export const headerData = {
  tite: {
    ar: 'جامعة حلوان الاهلية',
    en: 'Helwan National University',
  },
  description: {
    ar: 'جامعة حلوان الاهلية',
    en: 'Helwan National University',
  },
};

export const socialMediaLinks = {
  facebook: 'https://www.facebook.com/helwanuniversity',
  linkedin: 'https://www.linkedin.com/school/helwan-national-university/',
  instagram: 'https://www.instagram.com/helwanuniversity/',
  twitter: 'https://twitter.com/helwanuniversity',
  youtube: 'https://www.youtube.com/channel/UCXH4IPJ554hPMJg0MEY4iMA',
  tiktok: 'https://www.tiktok.com/@helwanuniversity',
  telegram: 'https://t.me/helwanuniversity',
  whatsapp: '',
};

export const FactsAndNumbers = [
  {
    id: 1,
    icon: 'Users',
    number: 15000,
    label: 'Students',
    description: 'Enrolled students across all programs',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    icon: 'GraduationCap',
    number: 250,
    label: 'Programs',
    description: 'Academic programs and specializations',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    icon: 'Globe',
    number: 85,
    label: 'Countries',
    description: 'Students from around the world',
    color: 'from-purple-500 to-purple-600',
  },
];

export const footerData = {
  navigation: {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Programs', href: '#programs' },
      { name: 'Admissions', href: '#admissions' },
      { name: 'Research', href: '#research' },
      { name: 'Campus Life', href: '#campus-life' },
      { name: 'Contact', href: '#contact' },
      { name: 'News & Events', href: '#news' },
    ],
  },
  contact: {
    title: 'Contact Information',
    address: 'Helwan, Cairo Governorate, Egypt',
    phone: '+20 2 2555 1234',
    email: 'info@hnu.edu.eg',
    workingHours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
    emergency: '+20 2 2555 9999',
  },
  location: {
    title: 'Our Location',
    coordinates: {
      lat: 29.8419,
      lng: 31.3345,
    },
    mapUrl: 'https://maps.app.goo.gl/WWM1Y1kEqo6xbhsx7?g_st=ipc',
    description:
      'Located in the heart of Helwan, our campus offers easy access to transportation and amenities.',
  },
  development: {
    team: 'Development Team',
    credits: 'Designed & Developed by HNU Development Team',
    year: new Date().getFullYear(),
  },
};

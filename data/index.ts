export const heroSection = {
  title: {
    ar: 'اهلا بك في موقع الجامعة الحلوانية الوطنية',
    en: 'Welcome to HNU Official Website',
  },
  description:
    'Discover excellence in education, innovation, and community. Join us in shaping the future through knowledge, research, and transformative learning experiences.',
  image: '/home.jpeg',
  video: '/home.mp4',
  logo: '/logo.png',
  noBgLogo: '/logo2.png',
};

export const aboutSection = {
  title: 'About Us',
  subtitle: 'Excellence in education, research, and community impact',
  description:
    'Helwan National University is dedicated to fostering innovation, academic excellence, and societal development. We empower students with cutting-edge programs, world-class faculty, and a vibrant campus life that nurtures leadership and creativity.',
  image: '/home.jpeg',
  titleClassName: 'text-[#023e8a]',
  cardTitleClassName: 'text-[#023e8a]',
  highlights: [
    {
      title: 'Modern Programs',
      description:
        'Interdisciplinary programs aligned with global market demands.',
    },
    {
      title: 'Research & Innovation',
      description:
        'A thriving ecosystem supporting impactful research and startups.',
    },
    {
      title: 'Campus Life',
      description: 'A diverse, inclusive, and engaging community experience.',
    },
    {
      title: 'Global Partnerships',
      description:
        'Collaborations with leading institutions and industry partners.',
    },
  ],
};

export const programsSection = {
  title: 'Programs & Faculties',
  subtitle: 'Explore our diverse academic programs across faculties',
  accentClassName: 'text-[#023e8a]',
  cardTitleClassName: 'text-[#023e8a]',
  items: [
    {
      id: 'eng-cs',
      title: 'Computer Science & Information Technology',
      faculty: 'Engineering',
      description:
        'Advanced curriculum covering algorithms, systems, AI, and software engineering with industry projects.',
      duration: '4 years',
      degree: 'B.Sc.',
      money: 'EGP 60,000/yr',
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'business-admin',
      title: 'Business Administration',
      faculty: 'Business',
      description:
        'Leadership, finance, marketing, and analytics for future-ready business professionals.',
      duration: '4 years',
      degree: 'B.B.A.',
      money: 'EGP 55,000/yr',
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'law',
      title: 'Law',
      faculty: 'Law',
      description:
        'Foundations of legal systems, jurisprudence, and practical case analysis.',
      duration: '4 years',
      degree: 'LL.B.',
      money: 'EGP 50,000/yr',
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'medicine',
      title: 'Medicine',
      faculty: 'Medicine',
      description:
        'Comprehensive medical education with clinical training and research opportunities.',
      duration: '6 years',
      degree: 'M.B.B.Ch.',
      money: 'EGP 90,000/yr',
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      faculty: 'Pharmacy',
      description:
        'Pharmaceutical sciences, clinical pharmacy, and industry-aligned training.',
      duration: '5 years',
      degree: 'B.Pharm.',
      money: 'EGP 70,000/yr',
      image: '/home.jpeg',
      href: '#',
    },
    {
      id: 'applied-health',
      title: 'Applied Health Sciences Technology',
      faculty: 'Applied Health Sciences Technology',
      description:
        'Healthcare technology, diagnostics, and applied clinical sciences.',
      duration: '4 years',
      degree: 'B.Sc.',
      money: 'EGP 58,000/yr',
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

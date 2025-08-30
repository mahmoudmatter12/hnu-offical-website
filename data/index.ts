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

export const faqData = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about Helwan National University',
  categories: [
    {
      id: 'admissions',
      title: 'Admissions & Applications',
      icon: '📚',
      items: [
        {
          question:
            'What are the admission requirements for international students?',
          answer:
            'International students need to submit their high school transcripts, proof of English proficiency (TOEFL/IELTS), passport copy, and complete the online application form. Additional requirements may vary by program.',
        },
        {
          question:
            'When does the application period open for the next academic year?',
          answer:
            'Applications typically open in January for the Fall semester and in September for the Spring semester. Early applications are encouraged as some programs have limited capacity.',
        },
        {
          question: 'What documents do I need to submit with my application?',
          answer:
            'Required documents include: completed application form, official transcripts, letters of recommendation, personal statement, resume/CV, and application fee. Specific requirements vary by program.',
        },
        {
          question: 'Is there an application fee and how much is it?',
          answer:
            'Yes, there is a non-refundable application fee of EGP 500 for Egyptian students and $50 USD for international students. This fee covers the cost of processing your application.',
        },
      ],
    },
    {
      id: 'academics',
      title: 'Academic Programs & Studies',
      icon: '🎓',
      items: [
        {
          question: 'What undergraduate programs do you offer?',
          answer:
            'We offer programs in Engineering, Business Administration, Law, Medicine, Pharmacy, Applied Health Sciences Technology, and Computer Science. Each program is designed to meet industry standards and provide practical experience.',
        },
        {
          question: 'Can I transfer credits from another university?',
          answer:
            'Yes, we accept transfer credits from accredited institutions. You can transfer up to 60 credits (equivalent to 2 years) for undergraduate programs. An evaluation of your previous coursework is required.',
        },
        {
          question: 'What is the typical class size?',
          answer:
            'Class sizes vary by program and level. Undergraduate classes typically have 25-35 students, while graduate classes are smaller with 15-25 students. This ensures personalized attention and interactive learning.',
        },
        {
          question: 'Do you offer online or hybrid learning options?',
          answer:
            'Yes, we offer hybrid learning options for many programs, combining online and in-person instruction. Some courses are fully online, while others require campus attendance for labs and practical sessions.',
        },
      ],
    },
    {
      id: 'campus',
      title: 'Campus Life & Facilities',
      icon: '🏫',
      items: [
        {
          question: 'What housing options are available for students?',
          answer:
            'We offer on-campus dormitories for both male and female students, as well as assistance with finding off-campus housing. On-campus housing includes meal plans and 24/7 security.',
        },
        {
          question: 'What sports and recreational facilities do you have?',
          answer:
            'Our campus features a modern sports complex with indoor and outdoor facilities including a gym, swimming pool, football field, basketball courts, tennis courts, and fitness center. We also have various student clubs and organizations.',
        },
        {
          question: 'Is there on-campus dining available?',
          answer:
            'Yes, we have multiple dining options including a main cafeteria, coffee shops, and food courts. We offer various meal plans and accommodate dietary restrictions. The campus also has several restaurants and cafes nearby.',
        },
        {
          question:
            'What transportation options are available to and from campus?',
          answer:
            'The campus is well-connected with public transportation including buses and metro. We also provide shuttle services to nearby areas and offer discounted public transportation passes for students.',
        },
      ],
    },
    {
      id: 'financial',
      title: 'Financial Aid & Scholarships',
      icon: '💰',
      items: [
        {
          question: 'What scholarships are available for students?',
          answer:
            'We offer merit-based scholarships, need-based financial aid, sports scholarships, and academic excellence awards. International students may also be eligible for specific scholarship programs.',
        },
        {
          question: 'How can I apply for financial aid?',
          answer:
            "Financial aid applications are submitted through our online portal. You'll need to provide financial documentation, complete the FAFSA equivalent form, and submit any additional required materials by the specified deadline.",
        },
        {
          question: 'Do you offer work-study programs?',
          answer:
            'Yes, we offer work-study programs that allow students to work part-time on campus while studying. These positions provide valuable work experience and help offset educational costs.',
        },
        {
          question: 'What payment plans are available for tuition?',
          answer:
            'We offer flexible payment plans including monthly installments, semester-based payments, and early payment discounts. Payment plans can be customized based on your financial situation.',
        },
      ],
    },
    {
      id: 'career',
      title: 'Career Services & Internships',
      icon: '💼',
      items: [
        {
          question: 'What career services do you provide?',
          answer:
            'Our career center offers resume writing assistance, interview preparation, career counseling, job fairs, networking events, and access to job boards. We also provide workshops on professional development.',
        },
        {
          question: 'Do you help students find internships?',
          answer:
            'Yes, we have partnerships with over 200 companies and organizations. Our career center actively helps students find internships, co-op opportunities, and part-time jobs related to their field of study.',
        },
        {
          question: 'What is the employment rate for graduates?',
          answer:
            'Our graduate employment rate is 95% within 6 months of graduation. We maintain strong relationships with employers and regularly track graduate outcomes to ensure our programs meet industry needs.',
        },
        {
          question: 'Do you offer alumni networking opportunities?',
          answer:
            'Yes, we have an active alumni network with over 50,000 members worldwide. We host regular networking events, mentorship programs, and provide access to our alumni directory for professional connections.',
        },
      ],
    },
  ],
};

export const topEventsData = {
  title: 'Top Events',
  subtitle: 'Stay updated with the latest university events and activities',
  items: [
    {
      id: 1,
      title: 'Annual Science Fair 2024',
      description:
        'Join us for the biggest science exhibition featuring innovative projects from our brightest students across all faculties.',
      image: '/home.jpeg',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Campus Auditorium',
      category: 'Academic',
      featured: true,
      attendees: 500,
    },
    {
      id: 2,
      title: 'International Student Cultural Festival',
      description:
        'Experience the rich diversity of our international student community through music, dance, food, and cultural performances.',
      image: '/home.jpeg',
      date: 'March 22, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'University Plaza',
      category: 'Cultural',
      featured: false,
      attendees: 300,
    },
    {
      id: 3,
      title: 'Career Fair & Networking Event',
      description:
        'Connect with leading employers and discover exciting career opportunities in various industries.',
      image: '/home.jpeg',
      date: 'April 5, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Business School Hall',
      category: 'Career',
      featured: true,
      attendees: 800,
    },
    {
      id: 4,
      title: 'Sports Championship Finals',
      description:
        'Witness the thrilling conclusion of our annual inter-faculty sports championship with exciting matches and awards ceremony.',
      image: '/home.jpeg',
      date: 'April 12, 2024',
      time: '3:00 PM - 7:00 PM',
      location: 'Sports Complex',
      category: 'Sports',
      featured: false,
      attendees: 1200,
    },
  ],
};

export const topNewsData = {
  title: 'Top News',
  subtitle: 'Latest updates and achievements from our university community',
  items: [
    {
      id: 1,
      title: 'HNU Ranks #1 in National University Rankings',
      description:
        'Helwan National University has been ranked first in the latest national university rankings, recognizing our excellence in education and research.',
      image: '/home.jpeg',
      date: 'March 10, 2024',
      author: 'University Communications',
      category: 'Achievement',
      featured: true,
      readTime: '3 min read',
    },
    {
      id: 2,
      title: 'New Research Center for AI and Machine Learning',
      description:
        'We are excited to announce the opening of our state-of-the-art research center dedicated to artificial intelligence and machine learning innovations.',
      image: '/home.jpeg',
      date: 'March 8, 2024',
      author: 'Research Department',
      category: 'Innovation',
      featured: true,
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Student Wins International Engineering Competition',
      description:
        'Congratulations to our engineering student who secured first place in the prestigious International Engineering Innovation Challenge.',
      image: '/home.jpeg',
      date: 'March 5, 2024',
      author: 'Engineering Faculty',
      category: 'Student Success',
      featured: false,
      readTime: '2 min read',
    },
    {
      id: 4,
      title: 'Partnership with Leading Tech Companies',
      description:
        'HNU has signed strategic partnerships with major technology companies to enhance our curriculum and provide internship opportunities.',
      image: '/home.jpeg',
      date: 'March 1, 2024',
      author: 'Partnerships Office',
      category: 'Collaboration',
      featured: false,
      readTime: '3 min read',
    },
  ],
};

export const topStudentActivitiesData = {
  title: 'Top Student Activities',
  subtitle:
    'Discover exciting opportunities to get involved and make the most of your university experience',
  items: [
    {
      id: 1,
      title: 'Student Government Elections',
      description:
        'Participate in the democratic process and help shape the future of student life at HNU. Nominate yourself or vote for your preferred candidates.',
      image: '/home.jpeg',
      date: 'March 20, 2024',
      participants: 1500,
      category: 'Leadership',
      featured: true,
      registration: 'Open',
    },
    {
      id: 2,
      title: 'Photography & Art Exhibition',
      description:
        'Showcase your creative talents in our annual student art exhibition. Submit your best photographs, paintings, and digital artwork.',
      image: '/home.jpeg',
      date: 'April 15, 2024',
      participants: 200,
      category: 'Arts',
      featured: false,
      registration: 'Open',
    },
    {
      id: 3,
      title: 'Debate Club Championship',
      description:
        'Join our competitive debate team and represent HNU in regional and national debate championships. Develop critical thinking and public speaking skills.',
      image: '/home.jpeg',
      date: 'March 25, 2024',
      participants: 80,
      category: 'Academic',
      featured: true,
      registration: 'Limited',
    },
    {
      id: 4,
      title: 'Community Service Day',
      description:
        'Give back to the community through various volunteer activities including environmental cleanup, tutoring, and healthcare awareness campaigns.',
      image: '/home.jpeg',
      date: 'April 8, 2024',
      participants: 400,
      category: 'Community',
      featured: false,
      registration: 'Open',
    },
  ],
};

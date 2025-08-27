import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('navigation');
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <div className='text-center mb-16'>
        <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6'>
          🎓 Welcome to HNU
        </div>
        <h1 className='text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          {t('home')}
        </h1>
        <p className='text-xl sm:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          Welcome to Helwan National University - where excellence meets
          innovation in education
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl'>
            Explore Programs
          </button>
          <button className='px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors'>
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        <div className='rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
            <span className='text-2xl'>🎯</span>
          </div>
          <h2 className='text-2xl font-semibold mb-4'>Academic Excellence</h2>
          <p className='text-muted-foreground leading-relaxed'>
            HNU is dedicated to providing excellence in education and
            innovation. Our mission is to empower students with knowledge and
            skills for the future.
          </p>
        </div>

        <div className='rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4'>
            <span className='text-2xl'>🌍</span>
          </div>
          <h2 className='text-2xl font-semibold mb-4'>Global Perspective</h2>
          <p className='text-muted-foreground leading-relaxed'>
            We foster a global perspective through international partnerships,
            diverse student body, and cutting-edge research opportunities.
          </p>
        </div>

        <div className='rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow'>
          <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4'>
            <span className='text-2xl'>💡</span>
          </div>
          <h2 className='text-2xl font-semibold mb-4'>Innovation Hub</h2>
          <p className='text-muted-foreground leading-relaxed'>
            Our campus serves as an innovation hub where students and faculty
            collaborate on groundbreaking research and creative solutions.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className='rounded-2xl border bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 shadow-sm'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>About HNU</h2>
          <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
            HNU is dedicated to providing excellence in education and
            innovation. Our mission is to empower students with knowledge and
            skills for the future.
          </p>
          <div className='grid sm:grid-cols-3 gap-6 text-center'>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-sm text-muted-foreground'>
                Years of Excellence
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-sm text-muted-foreground'>
                Academic Programs
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                1000+
              </div>
              <div className='text-sm text-muted-foreground'>
                Students Enrolled
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-2xl border bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 shadow-sm'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>About HNU</h2>
          <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
            HNU is dedicated to providing excellence in education and
            innovation. Our mission is to empower students with knowledge and
            skills for the future.
          </p>
          <div className='grid sm:grid-cols-3 gap-6 text-center'>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-sm text-muted-foreground'>
                Years of Excellence
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-sm text-muted-foreground'>
                Academic Programs
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                1000+
              </div>
              <div className='text-sm text-muted-foreground'>
                Students Enrolled
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-2xl border bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 shadow-sm'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>About HNU</h2>
          <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
            HNU is dedicated to providing excellence in education and
            innovation. Our mission is to empower students with knowledge and
            skills for the future.
          </p>
          <div className='grid sm:grid-cols-3 gap-6 text-center'>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-sm text-muted-foreground'>
                Years of Excellence
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-sm text-muted-foreground'>
                Academic Programs
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                1000+
              </div>
              <div className='text-sm text-muted-foreground'>
                Students Enrolled
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-2xl border bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 shadow-sm'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>About HNU</h2>
          <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
            HNU is dedicated to providing excellence in education and
            innovation. Our mission is to empower students with knowledge and
            skills for the future.
          </p>
          <div className='grid sm:grid-cols-3 gap-6 text-center'>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-sm text-muted-foreground'>
                Years of Excellence
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-sm text-muted-foreground'>
                Academic Programs
              </div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                1000+
              </div>
              <div className='text-sm text-muted-foreground'>
                Students Enrolled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: Array<{ title: string; description: string }>;
  image?: string;
  titleClassName?: string;
  cardTitleClassName?: string;
}

function AboutSection({ title, subtitle, description, highlights = [], image, titleClassName, cardTitleClassName }: AboutSectionProps) {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${titleClassName || ''}`}>{title}</h2>
          {subtitle && <p className='text-lg text-gray-600'>{subtitle}</p>}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='text-gray-700 leading-relaxed text-lg'>{description}</p>

            {highlights.length > 0 && (
              <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {highlights.map((item, index) => (
                  <div key={index} className='p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
                    <h3 className={`text-xl font-semibold mb-2 ${cardTitleClassName || ''}`}>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='order-first md:order-none'>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt='About section image' className='w-full h-auto rounded-xl object-cover shadow-lg' />
            ) : (
              <div className='w-full aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-blue-700'>
                <span className='font-medium'>Our Campus & Community</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

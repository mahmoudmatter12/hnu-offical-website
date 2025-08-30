import React from 'react';
import Reveal from '@/components/Reveal';

export interface ProgramItem {
  id: string;
  title: string;
  faculty: string;
  description: string;
  duration?: string;
  degree?: string;
  money?: string;
  image?: string;
  href?: string;
}

export interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  items: ProgramItem[];
  accentClassName?: string;
  cardTitleClassName?: string;
}

function ProgramsSection({ title, subtitle, items, accentClassName, cardTitleClassName }: ProgramsSectionProps) {
  return (
    <section id='programs' className='py-5'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <Reveal from='up'>
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${accentClassName || ''}`}>{title}</h2>
          </Reveal>
          {subtitle && (
            <Reveal delayMs={100} from='up'>
              <p className='text-lg text-gray-600'>{subtitle}</p>
            </Reveal>
          )}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {items.map((program, index) => (
            <Reveal key={program.id} delayMs={index * 80} from='up'>
              <article tabIndex={0} className='group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl active:shadow-xl focus-within:shadow-xl transition-all overflow-hidden hover:-translate-y-1 active:-translate-y-1 focus-within:-translate-y-1 ring-1 ring-transparent hover:ring-[#023e8a]/40 focus-within:ring-[#023e8a]/40'>
                <div className='relative overflow-hidden h-44'>
                  {program.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={program.image} alt={program.title} className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60 group-active:opacity-60 group-focus-within:opacity-60' />
                  )}
                  {program.money && (
                    <div className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100'>
                      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 w-[130%]'>
                        <div className='mx-auto rounded-xl bg-gradient-to-r from-[#023e8a]/90 via-[#023e8a]/80 to-[#023e8a]/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/15'>
                          <div className='px-8 py-3 text-center'>
                            <span className='text-2xl sm:text-3xl font-extrabold tracking-wide text-white drop-shadow'>
                              {program.money}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className='absolute top-4 left-6 w-2 h-2 rounded-full bg-[#023e8a]/70 animate-ping'></span>
                      <span className='absolute bottom-5 right-8 w-2 h-2 rounded-full bg-[#023e8a]/50 animate-ping [animation-delay:300ms]'></span>
                    </div>
                  )}
                  <div className='absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#023e8a] border border-[#023e8a]/30 backdrop-blur'>
                    {program.faculty}
                  </div>
                </div>

                <div className='p-5'>
                  <h3 className={`text-xl font-semibold mb-2 ${cardTitleClassName || ''}`}>{program.title}</h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>{program.description}</p>
                  <div className='h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4'></div>

                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <div className='flex items-center gap-2'>
                      {program.degree && <span className='px-2 py-0.5 rounded-full bg-[#023e8a]/5 text-[#023e8a] ring-1 ring-[#023e8a]/20'>{program.degree}</span>}
                      {program.duration && <span className='px-2 py-0.5 rounded-full bg-gray-50 text-gray-700 ring-1 ring-gray-200'>{program.duration}</span>}
                    </div>

                    {program.href && (
                      <a href={program.href} className='inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#023e8a] hover:bg-[#01326a] active:bg-[#01326a] focus:bg-[#01326a] px-3 py-1.5 rounded-md shadow-sm transition-colors'>
                        Learn more
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
                          <path fillRule='evenodd' d='M3 10a.75.75 0 0 1 .75-.75h9.19L9.47 5.78a.75.75 0 1 1 1.06-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 1 1-1.06-1.06l3.47-3.47H3.75A.75.75 0 0 1 3 10Z' clipRule='evenodd' />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;

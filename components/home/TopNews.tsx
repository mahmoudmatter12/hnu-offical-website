'use client'

import React from 'react'
import { Newspaper, ArrowRight } from 'lucide-react'
import { topNewsData } from '@/data'
import ExpandableContentCard from './ExpandableContentCard'

function TopNews() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Newspaper className="w-8 h-8 text-[#023e8a] mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            {topNewsData.title}
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {topNewsData.subtitle}
                    </p>
                </div>

                {/* News Expandable Cards */}
                <ExpandableContentCard
                    items={topNewsData.items}
                    type="news"
                    className="space-y-4"
                />

                {/* View All News CTA */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#023e8a] text-white font-semibold rounded-lg hover:bg-[#023e8a]/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <ArrowRight className="w-5 h-5" />
                        View All News
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TopNews
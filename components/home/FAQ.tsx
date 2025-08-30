'use client'

import React, { useState, useRef } from 'react'
import { Search, HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqData } from '@/data'

function FAQ() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')
    const [openItems, setOpenItems] = useState({})
    const gridRef = useRef(null)
    
    // Filter FAQ items based on search query
    const filteredFAQs = faqData.categories.flatMap(category =>
        category.items.filter(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(item => ({ ...item, category: category.title, categoryId: category.id }))
    )

    // Get unique categories for filtering
    const categories = faqData.categories

    // Filter by category if not "all"
    const displayFAQs = activeCategory === 'all'
        ? filteredFAQs
        : filteredFAQs.filter(item => item.categoryId === activeCategory)
        
    // Handle accordion toggle
    const handleToggle = (index:any) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index as keyof typeof prev] as any
        }))
    }

    return (
        <section id="faq" className="py-5 w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <HelpCircle className="w-8 h-8 text-[#023e8a] mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-[#023e8a]">
                            {faqData.title}
                        </h2>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="w-full mb-12">
                    {/* Search Bar */}
                    <div className="relative mb-8 max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for questions or topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white text-[#023e8a]! border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a] focus:border-transparent text-lg shadow-sm"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'all'
                                ? 'bg-[#023e8a] text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                        >
                            All Categories
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                    ? 'bg-[#023e8a] text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                    }`}
                            >
                                <span>{category.icon}</span>
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Content - Dynamic Grid with Accordion */}
                <div className="w-full">
                    {displayFAQs.length > 0 ? (
                        <div className="max-h-[600px] overflow-y-auto">
                            <div 
                                ref={gridRef}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto transition-all duration-500 ease-in-out"
                            >
                                {displayFAQs.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 ease-in-out overflow-hidden ${openItems[index as keyof typeof openItems] ? 'row-span-2' : ''}`}
                                    >
                                        <Accordion 
                                            type="single" 
                                            collapsible 
                                            className="w-full"
                                            onValueChange={() => handleToggle(index)}
                                        >
                                            <AccordionItem value={`item-${index}`} className="border-none">
                                                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline w-full">
                                                    <div className="flex items-start gap-3 w-full">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <MessageCircle className="w-5 h-5 text-[#023e8a]" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-semibold text-gray-900 text-base leading-relaxed mb-2">
                                                                {item.question}
                                                            </h3>
                                                            <p className="text-xs text-gray-500">
                                                                {item.category}
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0 ml-2">
                                                            {openItems[index as keyof typeof openItems] ? (
                                                                <ChevronUp className="w-5 h-5 text-[#023e8a]" />
                                                            ) : (
                                                                <ChevronDown className="w-5 h-5 text-[#023e8a]" />
                                                            )}
                                                        </div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-4 transition-all duration-500 ease-in-out">
                                                    <div className="pl-9">
                                                        <div className="border-l-2 border-[#023e8a] pl-4">
                                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* No Results State */
                        <div className="text-center py-16">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No questions found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your search terms or browse all categories
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('')
                                    setActiveCategory('all')
                                }}
                                className="mt-4 px-6 py-3 bg-[#023e8a] text-white rounded-lg hover:bg-[#023e8a]/90 transition-colors duration-300"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default FAQ
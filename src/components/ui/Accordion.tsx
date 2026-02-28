"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index

                return (
                    <div key={index} className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
                        <button
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <span className="font-semibold text-lg">{item.question}</span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="w-5 h-5 text-neutral-500" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-neutral-600">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}

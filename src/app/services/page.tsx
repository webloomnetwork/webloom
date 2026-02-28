"use client"

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Globe, Palette, Rocket, Bot, ArrowRight } from 'lucide-react'

export default function Services() {
    const serviceCategories = [
        {
            category: 'Websites',
            icon: <Globe className="w-6 h-6 text-primary" />,
            items: [
                { title: 'Website Design', desc: 'Stunning, conversion-focused screens.' },
                { title: 'Website Redesign', desc: 'Modernize your outdated site.' },
                { title: 'Website Maintenance', desc: 'Secure and up-to-date at all times.' },
                { title: 'Domain & Hosting Setup', desc: 'End-to-end technical setup.' },
                { title: 'E-commerce Setup', desc: 'Start selling your products online.' },
                { title: 'Booking System Integration', desc: 'Perfect for salons, clinics, and more.' },
                { title: 'Event Ticketing Setup', desc: 'Sell tickets directly to your audience.' },
                { title: 'Google My Business Setup', desc: 'Dominate local Notting Hill searches.' },
            ]
        },
        {
            category: 'Branding & Design',
            icon: <Palette className="w-6 h-6 text-primary" />,
            items: [
                { title: 'Logo Design', desc: 'Memorable marks for your business.' },
                { title: 'Personal Logo Design', desc: 'For freelancers and creators.' },
                { title: 'Business Cards & Stationery', desc: 'Premium print designs.' },
                { title: 'Menu Design', desc: 'For cafes and restaurants.' },
                { title: 'Event Posters & Banners', desc: 'Eye-catching promotional material.' },
                { title: 'QR Code Menu Creation', desc: 'Modern digital contactless menus.' },
            ]
        },
        {
            category: 'Marketing & Growth',
            icon: <Rocket className="w-6 h-6 text-primary" />,
            items: [
                { title: 'Facebook & Instagram Ads Setup', desc: 'Reach more local clients fast.' },
            ]
        },
        {
            category: 'Automation & AI',
            icon: <Bot className="w-6 h-6 text-primary" />,
            items: [
                { title: 'AI Chatbot Integration', desc: '24/7 automated customer support.' },
            ]
        },
    ]

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-bl from-accent/5 via-primary/5 to-transparent -z-10" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 -translate-y-1/3" />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-500 max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions to help your Notting Hill business thrive.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {serviceCategories.map((category) => (
                        <section key={category.category}>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
                                {category.icon}
                                <h2 className="text-3xl font-bold uppercase tracking-wide">{category.category}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item, idy) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idy * 0.05 }}
                                    >
                                        <Card className="h-full flex flex-col">
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-neutral-500 mb-6 flex-grow">{item.desc}</p>
                                            <Button variant="ghost" href="/contact" className="!px-0 !justify-start text-primary hover:bg-transparent">
                                                Enquire <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-24 text-center bg-primary-light/10 p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
                    <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">Book a free consultation call. We&apos;ll audit your current setup and recommend the best next steps.</p>
                    <Button size="lg" href="/contact">Book a Free Call</Button>
                </div>
            </div>
        </div>
    )
}

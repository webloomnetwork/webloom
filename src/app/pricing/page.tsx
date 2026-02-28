"use client"

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
    const packages = [
        {
            name: 'Starter',
            price: '£499',
            desc: 'Perfect for small local businesses needing a professional web presence.',
            turnaround: '1-2 weeks',
            features: [
                'Up to 3 page website design',
                'Mobile responsive layout',
                'Basic SEO setup',
                'Google My Business setup',
                'Contact form integration',
            ],
            popular: false
        },
        {
            name: 'Growth',
            price: '£999',
            desc: 'Ideal for growing businesses requiring more features and integrations.',
            turnaround: '2-4 weeks',
            features: [
                'Up to 8 page website design',
                'Booking/E-commerce integration',
                'Advanced SEO & Analytics',
                'Custom Logo Design',
                '1 month free maintenance',
            ],
            popular: true
        },
        {
            name: 'Pro',
            price: 'From £1999',
            desc: 'Comprehensive digital solution with branding and marketing.',
            turnaround: '4-6 weeks',
            features: [
                'Unlimited pages',
                'Full Branding Package',
                'Initial Ads Campaign Setup',
                'AI Chatbot Integration',
                'Priority 24/7 Support',
            ],
            popular: false
        }
    ]

    const addOns = [
        { name: 'Website Maintenance & Hosting', price: '£49/mo' },
        { name: 'Logo Design Only', price: '£199' },
        { name: 'Menu/Flyer Design', price: '£149' },
        { name: 'SEO Content Writing', price: '£99/page' }
    ]

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Subtle background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Simple, Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-500 max-w-2xl mx-auto"
                    >
                        No hidden fees. Just beautiful design and solid development.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative ${pkg.popular ? 'scale-105 z-10' : 'scale-100'}`}
                        >
                            <Card className={`h-full flex flex-col ${pkg.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                                {pkg.popular && (
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <p className="text-neutral-500 mb-6 h-12">{pkg.desc}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-neutral-900">{pkg.price}</span>
                                </div>
                                <div className="text-sm text-primary font-medium mb-6 bg-primary-light/10 inline-block px-3 py-1 rounded-md self-start">
                                    Turnaround: {pkg.turnaround}
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                                            <span className="text-neutral-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full" href="/contact">
                                    Get Started
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
                    <h2 className="text-2xl font-bold mb-6 text-center">Popular Add-ons</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {addOns.map(addon => (
                            <div key={addon.name} className="flex justify-between items-center bg-white p-4 rounded-xl border border-neutral-100">
                                <span className="font-medium text-neutral-900">{addon.name}</span>
                                <span className="text-primary font-bold">{addon.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

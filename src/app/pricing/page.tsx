"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { setEnquiry, getEnquiry } from '@/lib/enquiry'

export default function Pricing() {
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

    const router = useRouter()

    const handleSelectPackage = (pkgName: string) => {
        const curr = getEnquiry()
        setEnquiry({ ...curr, package: pkgName, addOns: Array.from(new Set([...curr.addOns, ...selectedAddOns])) })
        router.push('/contact')
    }

    const toggleAddOn = (name: string) => {
        setSelectedAddOns(prev =>
            prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
        )
    }
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

            <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
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
                                <Button
                                    variant={pkg.popular ? 'primary' : 'outline'}
                                    className="w-full"
                                    onClick={() => handleSelectPackage(pkg.name)}
                                >
                                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
                    <h2 className="text-2xl font-bold mb-2 text-center">Popular Add-ons</h2>
                    <p className="text-neutral-500 text-center mb-6 text-sm">Select add-ons and click Get Started above to include them in your enquiry</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {addOns.map(addon => (
                            <button
                                key={addon.name}
                                type="button"
                                onClick={() => toggleAddOn(addon.name)}
                                className={`flex justify-between items-center p-4 rounded-xl border text-left transition-all ${selectedAddOns.includes(addon.name) ? 'bg-primary/10 border-primary ring-2 ring-primary/30' : 'bg-white border-neutral-100 hover:border-primary/50'}`}
                            >
                                <span className="font-medium text-neutral-900">{addon.name}</span>
                                <span className="text-primary font-bold flex items-center gap-2">
                                    {addon.price}
                                    {selectedAddOns.includes(addon.name) && <Check className="w-5 h-5" />}
                                </span>
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-neutral-500 mt-4 text-center">Selected add-ons will be included when you proceed to the contact form.</p>
                </div>
            </div>
        </div>
    )
}

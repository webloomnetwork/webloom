"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        businessType: '',
        message: ''
    })
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [status, setStatus] = useState<'' | 'success'>('')

    const availableServices = [
        'Website Design', 'Redesign', 'E-commerce', 'Booking System', 'Logo Design', 'Ads & Marketing'
    ]

    const faqs = [
        { question: 'How long does a typical website take?', answer: 'Most standard websites take 2-4 weeks. E-commerce and complex integrations typically take 4-6 weeks.' },
        { question: 'Do I own the website once it\'s finished?', answer: '100%. Once final payment is made, all designs, code, and assets are fully owned by you.' },
        { question: 'Can you help with just a logo?', answer: 'Absolutely. We offer standalone branding packages starting from £199.' },
        { question: 'Do you provide website hosting?', answer: 'Yes, we offer ongoing hosting and maintenance packages starting at £49/month so you never have to worry about tech issues.' },
        { question: 'How do payments work?', answer: 'We typically take a 50% deposit to begin work, and 50% upon final completion and launch.' },
    ]

    const handleToggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Simulating storing in local state and mailto
        setStatus('success')
        setTimeout(() => {
            window.location.href = `mailto:webloomnetwork@gmail.com?subject=New Enquiry from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ABusiness Type: ${formData.businessType}%0AServices: ${selectedServices.join(', ')}%0AMessage:%0A${formData.message}`
            setStatus('')
            setFormData({ name: '', phone: '', email: '', businessType: '', message: '' })
            setSelectedServices([])
        }, 1500)
    }

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-neutral-900 mb-6"
                    >
                        Let&apos;s Start <span className="text-primary">Weaving</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-500 max-w-2xl mx-auto"
                    >
                        Pop in for a chat or drop us a message below. We aim to reply within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900">Location</h3>
                                <p className="text-neutral-500">Notting Hill, London</p>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900">Email</h3>
                                <a href="mailto:webloomnetwork@gmail.com" className="text-neutral-500 hover:text-primary transition-colors">webloomnetwork@gmail.com</a>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-4 bg-primary text-white" hoverEffect={false}>
                            <div className="bg-white/10 p-4 rounded-full text-green-400">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold">WhatsApp</h3>
                                <p className="text-neutral-300">Message us anytime</p>
                                <a href="#" className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors mt-1 inline-block">Start Chat →</a>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="h-full">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-900">Name *</label>
                                        <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-900">Phone</label>
                                        <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-900">Email *</label>
                                        <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-900">Business Type *</label>
                                        <input required type="text" placeholder="e.g. Clinic, Cafe, Freelancer" value={formData.businessType} onChange={e => setFormData({ ...formData, businessType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-neutral-900">Services Needed (Select all that apply)</label>
                                    <div className="flex flex-wrap gap-2">
                                        {availableServices.map(service => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => handleToggleService(service)}
                                                className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedServices.includes(service) ? 'bg-primary border-primary text-white' : 'border-neutral-200 text-neutral-600 hover:border-primary/50 hover:bg-primary/5'}`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-900">Message *</label>
                                    <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                                </div>

                                <Button type="submit" className="w-full" disabled={status === 'success'}>
                                    {status === 'success' ? 'Sending...' : <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>}
                                </Button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-green-600 font-medium text-center pt-2">
                                            Thanks! Local state updated. Opening mail client...
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </Card>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-neutral-900">Frequently Asked Questions</h2>
                    <Accordion items={faqs} />
                </div>
            </div>
        </div>
    )
}

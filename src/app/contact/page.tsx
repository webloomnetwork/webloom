"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Mail, MessageCircle, Send, Sparkles } from 'lucide-react'
import { getEnquiry, setEnquiry, clearEnquiry, getSuggestedAddOns, ADDONS } from '@/lib/enquiry'
import { WHATSAPP_GROUP_LINK, FORMSPREE_FORM_ID } from '@/lib/config'

const ALL_SERVICES = [
  'Website Design', 'Website Redesign', 'Website Maintenance', 'Domain & Hosting Setup',
  'E-commerce Setup', 'Booking System Integration', 'Event Ticketing Setup', 'Google My Business Setup',
  'Logo Design', 'Personal Logo Design', 'Business Cards & Stationery', 'Menu Design',
  'Event Posters & Banners', 'QR Code Menu Creation', 'Facebook & Instagram Ads Setup', 'AI Chatbot Integration'
]

const ADDON_PRICES: Record<string, string> = {
  'Website Maintenance & Hosting': '£39/mo',
  'Logo Design': '£79',
  'Logo Design Only': '£79',
  'Menu/Flyer Design': '£69',
  'SEO Content Writing': '£49/page',
  'Business Cards & Stationery': '£49',
  'Facebook & Instagram Ads Setup': '£99',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: ''
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>()
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('')
  const [suggestedAddOns, setSuggestedAddOns] = useState<string[]>([])

  useEffect(() => {
    const enquiry = getEnquiry()
    if (enquiry.services.length) setSelectedServices(enquiry.services)
    if (enquiry.addOns.length) setSelectedAddOns(enquiry.addOns)
    if (enquiry.package) setSelectedPackage(enquiry.package)
    setSuggestedAddOns(getSuggestedAddOns(enquiry.services))
  }, [])

  useEffect(() => {
    const newSuggested = getSuggestedAddOns(selectedServices)
    setSuggestedAddOns(newSuggested)
    setEnquiry({ services: selectedServices, addOns: selectedAddOns, package: selectedPackage })
  }, [selectedServices, selectedAddOns, selectedPackage])

  const faqs = [
    { question: 'How long does a typical website take?', answer: 'Most standard websites take 2-4 weeks. E-commerce and complex integrations typically take 4-6 weeks.' },
    { question: 'Do I own the website once it\'s finished?', answer: '100%. Once final payment is made, all designs, code, and assets are fully owned by you.' },
    { question: 'Can you help with just a logo?', answer: 'Absolutely. We offer standalone logo design from £79.' },
    { question: 'Do you provide website hosting?', answer: 'Yes, we offer ongoing hosting and maintenance packages starting at £49/month so you never have to worry about tech issues.' },
    { question: 'How do payments work?', answer: 'We typically take a 50% deposit to begin work, and 50% upon final completion and launch.' },
  ]

  const handleToggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const handleToggleAddOn = (addOn: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOn) ? prev.filter(a => a !== addOn) : [...prev, addOn]
    )
  }

  const CONTACT_EMAIL = 'webloomnetwork@gmail.com'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const servicesList = selectedServices.join(', ') || 'None selected'
    const addOnsList = selectedAddOns.join(', ') || 'None selected'

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      businessType: formData.businessType,
      package: selectedPackage || '',
      services: servicesList,
      addOns: addOnsList,
      message: formData.message,
    }

    const apiUrl = FORMSPREE_FORM_ID
      ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
      : `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

    const body = FORMSPREE_FORM_ID
      ? JSON.stringify(payload)
      : JSON.stringify({
          _subject: `New Enquiry from ${payload.name}`,
          ...payload,
        })

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', businessType: '', message: '' })
        setSelectedServices([])
        setSelectedAddOns([])
        setSelectedPackage(undefined)
        clearEnquiry()
        setTimeout(() => setStatus(''), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const hasWebServices = selectedServices.some(s =>
    s.toLowerCase().includes('website') || s.toLowerCase().includes('e-commerce')
  )

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <Card className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Location</h3>
                <p className="text-neutral-500">London, UK</p>
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
                <p className="text-neutral-300">Message us anytime. Aishwarya or Pradeepan will reply.</p>
                <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors mt-1 inline-block">Start Chat →</a>
              </div>
            </Card>
          </div>

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

                {selectedPackage && (
                  <div className="rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                    <p className="text-sm font-medium text-primary">Package selected</p>
                    <p className="font-bold text-neutral-900">{selectedPackage}</p>
                  </div>
                )}

                <div className="space-y-3">
                  <label className="text-sm font-medium text-neutral-900">Services Needed (from Services page or select here)</label>
                  <div className="flex flex-wrap gap-2">
                    {ALL_SERVICES.map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleToggleService(service)}
                        className={`px-3 py-1.5 rounded-full border text-sm transition-all ${selectedServices.includes(service) ? 'bg-primary border-primary text-white' : 'border-neutral-200 text-neutral-600 hover:border-primary/50 hover:bg-primary/5'}`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="text-xs text-neutral-500">
                      {selectedServices.length} service(s) selected: {selectedServices.join(', ')}
                    </p>
                  )}
                </div>

                <AnimatePresence>
                  {hasWebServices && suggestedAddOns.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rounded-xl bg-accent/10 border border-accent/30 p-4"
                    >
                      <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-2">
                        <Sparkles className="w-4 h-4 text-accent" /> Combo deal – add these for a better package
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedAddOns.map(addOn => (
                          <button
                            key={addOn}
                            type="button"
                            onClick={() => handleToggleAddOn(addOn)}
                            className={`px-3 py-1.5 rounded-full border text-sm transition-all ${selectedAddOns.includes(addOn) ? 'bg-accent border-accent text-white' : 'border-accent/50 text-neutral-700 hover:bg-accent/20'}`}
                          >
                            {addOn} {ADDON_PRICES[addOn] ? `(${ADDON_PRICES[addOn]})` : ''}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-neutral-900">Add-ons (optional)</label>
                  <div className="flex flex-wrap gap-2">
                    {ADDONS.map(a => (
                      <button
                        key={a.name}
                        type="button"
                        onClick={() => handleToggleAddOn(a.name)}
                        className={`px-3 py-1.5 rounded-full border text-sm transition-all ${selectedAddOns.includes(a.name) ? 'bg-primary border-primary text-white' : 'border-neutral-200 text-neutral-600 hover:border-primary/50 hover:bg-primary/5'}`}
                      >
                        {a.name} ({a.price})
                      </button>
                    ))}
                  </div>
                  {selectedAddOns.length > 0 && (
                    <p className="text-xs text-neutral-500">
                      Add-ons: {selectedAddOns.join(', ')}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-900">Message *</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project, timeline, and any specific requirements..." className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                </div>

                <Button type="submit" className="w-full" disabled={status === 'sending' || status === 'success'}>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : <span className="flex items-center gap-2">Send Enquiry <Send className="w-4 h-4" /></span>}
                </Button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-600 font-medium text-center pt-2">
                      Sent! We&apos;ll get back to you within 24 hours.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-medium text-center pt-2">
                      Something went wrong. Please try again or email us directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-neutral-900">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </div>
    </div>
  )
}

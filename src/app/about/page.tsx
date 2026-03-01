"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Heart, Target, Lightbulb, Users } from 'lucide-react'

const founders = [
  { name: 'Aishwarya', role: 'Co-Founder', image: '/founders/aish.png', fallback: 'A' },
  { name: 'Pradeepan', role: 'Co-Founder', image: '/founders/pradeep.png', fallback: 'P' },
]

function FounderAvatar({ founder }: { founder: typeof founders[0] }) {
  const [hasError, setHasError] = useState(false)
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 ring-4 ring-white">
      {!hasError ? (
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          sizes="(max-width: 768px) 160px, 192px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-4xl md:text-5xl font-bold text-primary">
          {founder.fallback}
        </div>
      )}
    </div>
  )
}

export default function About() {
    const values = [
        { icon: <Heart className="w-6 h-6" />, title: 'Passion', desc: 'We actually care about how your brand looks and performs.' },
        { icon: <Target className="w-6 h-6" />, title: 'Precision', desc: 'Every pixel and word is placed with absolute intention.' },
        { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', desc: 'Bringing modern web standards to everyday businesses.' },
        { icon: <Users className="w-6 h-6" />, title: 'Community', desc: 'Deeply rooted in supporting our Notting Hill neighbors.' },
    ]

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Subtle background gradient */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold text-neutral-900 mb-6"
                        >
                            Weaving Digital Magic in <span className="text-primary">Notting Hill</span>.
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-lg text-neutral-600"
                        >
                            <p>
                                Web Loom was born out of a simple observation: too many amazing local shops, cafes, and clinics in our beloved Notting Hill had digital storefronts that didn&apos;t match the quality of their real-world businesses.
                            </p>
                            <p>
                                Founded by <strong>Aishwarya</strong> and <strong>Pradeepan</strong>, Web Loom brings enterprise-level design and engineering to local high streets. We believe that stunning websites shouldn&apos;t be reserved just for tech giants.
                            </p>
                            <p>
                                Whether you need to start taking online bookings, want to rebrand your restaurant, or just need a beautiful online presence to show off your work, we are here to weave it together perfectly.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center justify-center gap-12"
                    >
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Meet the Founders</span>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {founders.map((founder, idx) => (
                                <motion.div
                                    key={founder.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.15, type: 'spring', stiffness: 100 }}
                                    className="flex flex-col items-center group"
                                >
                                    {/* Round circle with gradient ring */}
                                    <div className="relative p-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-text shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow duration-500">
                                        <FounderAvatar founder={founder} />
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">{founder.name}</h3>
                                    <p className="text-sm font-medium text-accent tracking-wide">{founder.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {values.map((val, idx) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full text-center hoverEffect={false}">
                                <div className="w-12 h-12 mx-auto bg-primary-light/20 text-primary rounded-full flex items-center justify-center mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-neutral-500">{val.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-primary text-white p-10 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h3 className="font-bold text-primary mb-2">01. Local & Accessible</h3>
                            <p className="text-neutral-300">We&apos;re right here in London. We can meet for coffee, discuss your goals, and truly understand your market.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-primary mb-2">02. Modern Tech Stack</h3>
                            <p className="text-neutral-300">Your site will be built with the exact same technologies used by industry leaders, ensuring speed and security.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-primary mb-2">03. All-in-One Solution</h3>
                            <p className="text-neutral-300">No need to hire a separate designer, developer, and marketer. We handle the entire process end-to-end.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

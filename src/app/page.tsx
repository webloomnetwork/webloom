"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Monitor, PenTool, TrendingUp, Cpu, HeartHandshake } from 'lucide-react'

const clientLogos = [
  { src: '/clients/voXYDOCS.png', alt: 'VoxyDocs' },
  { src: '/clients/Icrack.png', alt: 'Icrack' },
  { src: '/clients/verilett logo - Copy.png', alt: 'Verilett' },
  { src: '/clients/RoomToLive.png', alt: 'Room To Live' },
  { src: '/clients/ibo cafe.jpeg', alt: 'ibo cafe' },
  { src: '/clients/Neighbourweb 4k.png', alt: 'Neighbourweb' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const processSteps = [
    { title: 'Discover', desc: 'Understanding your business and goals.' },
    { title: 'Design', desc: 'Crafting a beautiful, tailored presence.' },
    { title: 'Build', desc: 'Developing with modern technologies.' },
    { title: 'Launch', desc: 'Ready for the world to see.' },
    { title: 'Support', desc: 'Ongoing maintenance and growth.' },
  ]

  const services = [
    { title: 'Websites', icon: <Monitor className="w-8 h-8" />, desc: 'Custom, blazing-fast websites.' },
    { title: 'Branding', icon: <PenTool className="w-8 h-8" />, desc: 'Logos and visual identity.' },
    { title: 'Marketing', icon: <TrendingUp className="w-8 h-8" />, desc: 'Ads and growth strategies.' },
    { title: 'Automation', icon: <Cpu className="w-8 h-8" />, desc: 'AI chatbots & integrations.' },
  ]

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-mesh bg-grid-pattern -z-20" />
        <motion.div
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 -z-10 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 -z-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-[80px] -z-10 animate-float" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] -z-10 animate-float" style={{ animationDelay: '-4s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-white/80 backdrop-blur-md text-primary text-sm font-semibold tracking-wide mb-8 shadow-lg shadow-primary/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Accepting New Clients
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance text-neutral-900 mx-auto leading-[1.1]"
          >
            Weave your brand into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-text">
              beautiful
            </span>{' '}
            online presence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-neutral-500 mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
          >
            Premium digital design & development agency based in Notting Hill, London. Specialized in helping local businesses thrive online.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" href="/contact" className="text-lg w-full sm:w-auto h-14 px-10 bg-primary hover:bg-primary-dark shadow-glow-primary hover:shadow-[0_0_50px_-10px_rgba(0,102,204,0.6)] transition-shadow duration-500">
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" href="/services" className="text-lg w-full sm:w-auto h-14 px-10 border-neutral-200 text-navy hover:border-primary hover:bg-primary/5">
              View Our Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Section - Client Logo Marquee */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden py-16"
      >
        <div className="flex justify-center mb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-100 shadow-lg shadow-neutral-100"
        >
          <HeartHandshake className="w-5 h-5 text-primary" />
          <span className="font-medium text-neutral-900">Trusted by businesses worldwide</span>
        </motion.div>
        </div>
        <div className="relative flex w-full overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          {/* Marquee track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 group"
              >
                <div className="relative h-10 md:h-12 w-[120px] md:w-[140px]">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    sizes="140px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-neutral-50/80 -z-10 transform -skew-y-2 origin-top-left"
        />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span variants={itemVariants} className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Expertise
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Everything you need to establish and grow your business online.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full border-neutral-200/60 hover:border-primary/30 group/card">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-primary/20 to-transparent"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover/card:text-primary transition-colors">{service.title}</h3>
                  <p className="text-neutral-500 mb-8 leading-relaxed">{service.desc}</p>
                  <Button variant="ghost" href="/services" className="!px-0 !h-auto text-primary group">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -z-10" />

        <div className="text-center mb-24 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-neutral-900"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            From idea to launch in 5 transparent, seamless steps.
          </motion.p>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[4px] bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 -z-10 rounded-full origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, borderColor: 'rgba(255, 136, 0, 0.5)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-24 h-24 mx-auto bg-white border-[3px] border-primary/20 group-hover:border-accent rounded-2xl rotate-45 flex items-center justify-center mb-10 shadow-lg group-hover:shadow-glow-accent relative z-10 overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="-rotate-45 text-3xl font-extrabold text-primary group-hover:text-accent transition-colors"
                  >
                    {index + 1}
                  </motion.span>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Testimonials */}
      <section className="relative bg-primary text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-20">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Web Loom transformed our local cafe's online presence. We're seeing more walk-ins than ever!", author: "Sarah, The Corner Cafe" },
              { text: "Pradeepan and Aishwarya were brilliant. They set up our booking system flawlessly.", author: "James, Notting Hill Salon" },
              { text: "Incredible attention to detail on our branding. They truly care about small businesses.", author: "Elena, Floral Studio" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">&quot;</div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2 }}
                  className="flex text-accent mb-6 gap-0.5"
                >
                  {"★★★★★".split('').map((star, j) => (
                    <motion.span key={j} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.25 + j * 0.05 }}>
                      {star}
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-lg mb-8 leading-relaxed text-neutral-200 relative z-10">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent opacity-80"
                  ></motion.div>
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-neutral-900 leading-tight">Ready to weave your success story?</h2>
          <p className="text-xl md:text-2xl text-neutral-500 mb-12 leading-relaxed">Let&apos;s build something exceptional for your business. Based in Notting Hill, serving London and beyond.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" href="/contact" className="text-lg h-16 px-12 bg-accent hover:bg-accent-light text-white font-semibold shadow-glow-accent animate-glow-pulse border-none">
              Book a Call Today
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

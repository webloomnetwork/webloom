"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Logo } from '../ui/Logo'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 pt-12 pb-8 border-t border-neutral-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
                            <Logo />
                            <span className="text-2xl font-bold tracking-tight text-neutral-900 hidden sm:block">
                                Web<span className="text-[#ff8800]">loom</span>
                            </span>
                        </Link>
                        <p className="text-neutral-500 max-w-sm mb-6 text-lg">
                            We weave your brand into a beautiful online presence. Proudly based in Notting Hill, London.
                        </p>
                        <div className="flex space-x-4 text-neutral-400">
                            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-primary transition-colors inline-block"><Instagram className="w-5 h-5" /></motion.a>
                            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-primary transition-colors inline-block"><Facebook className="w-5 h-5" /></motion.a>
                            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="hover:text-primary transition-colors inline-block"><Mail className="w-5 h-5" /></motion.a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-neutral-900 mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-neutral-500 hover:text-primary transition-colors flex items-center">
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-50" /> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-neutral-900 mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-neutral-500">
                                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                                <span>Notting Hill, London<br />Walk-ins welcome by appointment</span>
                            </li>
                            <li className="flex items-center text-neutral-500">
                                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                                <a href="mailto:webloomnetwork@gmail.com" className="hover:text-primary">webloomnetwork@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 text-center text-neutral-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Gen2Z LTD. All rights reserved. Registered in England and Wales.</p>
                </div>
            </div>
        </motion.footer>
    )
}

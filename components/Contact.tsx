"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-4 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
            >
                GET IN TOUCH
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center gap-8"
            >
                <a
                    href="mailto:coendewith@gmail.com"
                    className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                    <Mail size={24} />
                </a>
                <a
                    href="https://linkedin.com/in/coendw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="https://github.com/coendewith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                    <Github size={24} />
                </a>
            </motion.div>
            <footer className="mt-20 text-gray-600 text-sm">
                © {new Date().getFullYear()} Coen De With. All rights reserved.
            </footer>
        </section>
    );
}

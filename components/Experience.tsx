"use client";

import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section className="py-32 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-20 text-center tracking-tight"
            >
                EXPERIENCE
            </motion.h2>
            <div className="space-y-16">
                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                            {/* Date (Left on Desktop) */}
                            <div className="hidden md:block text-right pt-1">
                                <span className="font-mono text-sm text-gray-500">{exp.period}</span>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 md:relative md:left-0 md:top-2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />

                            {/* Content (Right on Desktop) */}
                            <div>
                                <div className="md:hidden mb-2">
                                    <span className="font-mono text-sm text-gray-500">{exp.period}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-lg text-gray-400 mb-4">{exp.company}</p>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                            <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-600 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter"
            >
                SELECTED WORKS
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full text-gray-400 bg-black/50 backdrop-blur-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

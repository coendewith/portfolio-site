import Canvas3D from "@/components/Canvas3D";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Canvas3D />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

"use client"

// Redesigned Hero section for minimal, elegant portfolio

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";

import Link from "next/link"

const Hero = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      move: {
        enable: true,
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 200,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gray-900">
      <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0" />
      <div className="max-w-3xl w-full mx-auto text-center relative z-10">
        <h1 className="hero-title mb-4 animate-bounce-in">Akaash Thawani</h1>
        <h2 className="hero-subtitle mb-6 animate-fade-slide-left">Full Stack Engineer</h2>
        <p className="text-lg text-gray-400 dark:text-gray-400 mb-10 animate-fade-slide-right">
          Full Stack Engineer with expertise in Angular, React, and Next.js.<br />
          Graduated from Master's in Computer Science at NJIT.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects" className="hero-btn btn-pulse">View Projects</Link>
          {/* <Link href="#contact" className="hero-btn bg-white text-gray-900 border border-gray-900 hover:bg-accent hover:text-white transition font-semibold">Get In Touch</Link> */}
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <span className="sr-only">GitHub</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </Link>
          <Link href="https://linkedin.com/in/akaash-thawani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <span className="sr-only">LinkedIn</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z"/></svg>
          </Link>
          <Link href="mailto:akaashthawani13@yahoo.com" className="text-gray-400 hover:text-accent transition-colors text-2xl">
            <span className="sr-only">Email</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

"use client";
import Link from "next/link";
import { useState } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Clubs", href: "#clubs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Simple dark mode toggle (for demo, replace with theme provider for production)
  const toggleDark = () => {
    setDark((d) => {
      if (!d) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return !d;
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border flex items-center justify-between px-4 sm:px-12 py-3">
      <div className="flex items-center gap-2 font-bold text-lg">
        <span className="text-primary">Ala Mdalla</span>
      </div>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-primary transition-colors font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-5 h-5 hover:text-primary" />
        </a>
        <a href="https://linkedin.com/in/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-primary" />
        </a>
        <button
          onClick={toggleDark}
          className="ml-2 p-2 rounded hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
} 
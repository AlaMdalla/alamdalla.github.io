import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8">Contact</h2>
      <form className="w-full max-w-lg bg-card border rounded-xl shadow p-6 flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-primary text-background font-semibold rounded px-6 py-2 hover:bg-primary/80 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <div className="flex gap-3 mb-2">
          <a href="mailto:alamdalla@proton.me" aria-label="Email"><Mail className="w-5 h-5 hover:text-primary" /></a>
          <a href="https://github.com/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-5 h-5 hover:text-primary" /></a>
          <a href="https://linkedin.com/in/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-primary" /></a>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" /> Tunis, Tunisia
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Ala Mdalla</p>
      </div>
    </section>
  );
} 
"use client";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Briefcase, MessageCircle, Sparkle } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/portfolio/Badge";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2200);
  };

  return (
    <section id="contact" className="section-forest relative overflow-hidden py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline-cream" size="sm" className="mb-5 inline-flex">
            <MessageCircle className="w-3 h-3 text-amber" />
            Get in touch
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-cream-text leading-[0.95]">
            Let&rsquo;s <span className="text-amber italic">Collaborate</span>
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-amber mx-auto" />
          <p className="text-cream-text/70 text-sm mt-5 max-w-lg mx-auto leading-relaxed">
            Have a project in mind, an internship opportunity, or just want to
            say hi? My inbox is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl bg-cream text-ink p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-ink">
                Let&rsquo;s work <span className="italic text-rust">together</span>
              </h3>
              <p className="text-sm text-ink/70 mt-2 leading-relaxed">
                I&rsquo;m open to internships, freelance projects, and creative
                collaborations. Let&rsquo;s build something thoughtful.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "rindifadilah71@gmail.com",
                  href: "mailto:rindifadilah71@gmail.com",
                  accent: "bg-amber text-ink",
                },
                {
                  icon: Briefcase,
                  label: "LinkedIn",
                  value: "linkedin.com/in/rindi-fadilah-",
                  href: "https://www.linkedin.com/in/rindi-fadilah-",
                  accent: "bg-rust text-cream",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Semarang, Central Java, Indonesia",
                  accent: "bg-ink text-cream",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-cream-deep/60 border border-ink/10 hover:border-ink/30 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-lg grid place-items-center ${c.accent}`}>
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-ink/50">
                      {c.label}
                    </p>
                    <p className="text-xs text-ink truncate group-hover:text-rust transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-xl border border-ink/15 bg-cream-deep/40 p-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink/40 focus:bg-cream-deep/70 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-xl border border-ink/15 bg-cream-deep/40 p-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink/40 focus:bg-cream-deep/70 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full rounded-xl border border-ink/15 bg-cream-deep/40 p-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink/40 focus:bg-cream-deep/70 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full rounded-full h-12 text-sm font-semibold text-ink bg-amber hover:bg-amber-soft transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sent ? (
                <>
                  <Sparkle className="w-4 h-4" />
                  Message sent! Thank you.
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

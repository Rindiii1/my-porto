"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#about" },
  { label: "Gallery", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = links.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { id: l.href, top: Infinity };
        const r = (el as HTMLElement).getBoundingClientRect();
        return { id: l.href, top: Math.abs(r.top - 120) };
      });
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(nearest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrolled-on = light pill on cream/forest sections (blurred background hides content)
  // Scrolled-off = transparent pill over the dark hero
  const lightPill = scrolled;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled ? "max-w-6xl mt-3 px-3" : "max-w-7xl mt-0 px-4 md:px-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between rounded-full transition-all duration-500 backdrop-blur-md ${
            lightPill
              ? "bg-cream/90 text-ink shadow-lg ring-1 ring-ink/5 px-4 md:px-6 h-14"
              : "bg-forest/0 text-cream-text px-2 md:px-4 h-16"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <Sparkle size={16} className="text-amber" />
            <span className="font-display font-bold text-sm tracking-wider">
              <span className="text-amber">RINDI</span>.F
            </span>
          </Link>

          {/* Desktop nav — 5 items max, larger spacing */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold">
            {links.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors ${
                    isActive
                      ? lightPill
                        ? "text-ink"
                        : "text-amber"
                      : lightPill
                      ? "text-ink/70 hover:text-ink"
                      : "text-cream-text/80 hover:text-cream-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full ${
                        lightPill ? "bg-amber" : "bg-amber"
                      }`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden w-9 h-9 grid place-items-center rounded-full backdrop-blur-md ${
              lightPill
                ? "bg-ink/10 text-ink"
                : "bg-forest/40 text-cream-text"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-2 rounded-2xl p-2 shadow-2xl backdrop-blur-md ${
                lightPill
                  ? "bg-cream/95 ring-1 ring-ink/5"
                  : "bg-forest/85 ring-1 ring-cream/15"
              }`}
            >
              {links.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      active === item.href
                        ? lightPill
                          ? "bg-amber/20 text-ink"
                          : "bg-amber/20 text-amber"
                        : lightPill
                        ? "text-ink/80 hover:bg-ink/5"
                        : "text-cream-text hover:bg-cream/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="p-2 pt-1">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full h-10 text-xs font-semibold text-ink bg-amber hover:bg-amber-soft transition-colors inline-flex items-center justify-center"
                >
                  Get in touch!
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

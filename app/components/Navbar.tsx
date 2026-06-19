"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Mail, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "About", href: "/about" },
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong" ref={mobileMenuRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-pq-accent to-pq-gradient-end flex items-center justify-center shadow-lg shadow-pq-accent/20 transition-transform duration-300 group-hover:scale-105">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-pq-accent to-pq-gradient-end opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-pq-text tracking-tight">
                Pay<span className="gradient-text">Quick</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-pq-accent bg-pq-accent/8 font-semibold"
                        : "text-pq-text-secondary hover:text-pq-accent hover:bg-pq-accent/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg shadow-pq-accent/25 hover:shadow-xl hover:shadow-pq-accent/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Connect
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pq-surface-alt transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-pq-text" />
              ) : (
                <Menu className="w-5 h-5 text-pq-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-strong border-t border-pq-border animate-fade-in-up">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-pq-accent bg-pq-accent/8 font-semibold"
                        : "text-pq-text-secondary hover:text-pq-accent hover:bg-pq-accent/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-pq-border mt-2">
                <button
                  onClick={() => { setMobileOpen(false); setContactOpen(true); }}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setContactOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-sm bg-pq-surface border border-pq-border rounded-3xl shadow-2xl p-8 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-pq-text-secondary hover:text-pq-text hover:bg-pq-surface-alt transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-pq-text mb-1">Get in touch</h2>
            <p className="text-sm text-pq-text-secondary mb-7">
              Reach us via email or WhatsApp — we respond in under 2 hours.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:business@payquickfintech.com"
                className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-pq-surface-alt border border-pq-border hover:border-pq-accent/50 hover:bg-pq-accent/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pq-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pq-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-pq-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-pq-text-secondary mb-0.5">Email us</p>
                  <p className="text-sm font-semibold text-pq-text">business@payquickfintech.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919967754782"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-pq-surface-alt border border-pq-border hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-pq-text-secondary mb-0.5">WhatsApp</p>
                  <p className="text-sm font-semibold text-pq-text">+91 99677 54782</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

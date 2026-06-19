"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-pq-text-secondary hover:text-pq-accent transition-colors duration-200 rounded-lg hover:bg-pq-accent/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg shadow-pq-accent/25 hover:shadow-xl hover:shadow-pq-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Connect
            </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-pq-text-secondary hover:text-pq-accent hover:bg-pq-accent/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-pq-border mt-2">
              <Link
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

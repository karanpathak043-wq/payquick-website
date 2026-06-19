"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-pq-primary via-[#1a1050] to-[#0d0825] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pq-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pq-gradient-end/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
          Ready to start collecting?
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          One conversation is all it takes. No forms, no waiting, no jargon. Tell us about your business &mdash; we&apos;ll have you live by tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:business@payquickfintech.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-pq-primary bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Talk to Our Setup Experts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/919967754782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp us directly
          </a>
        </div>

        <p className="text-sm text-slate-400">
          We respond in under 2 hours. WhatsApp &middot; Email &middot; Call &mdash; your choice.
        </p>
      </div>
    </section>
  );
}

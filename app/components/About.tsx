"use client";

import { Users, Clock, Headphones, ClipboardList, Rocket, MessageCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Sign Up & Share Details",
    desc: "Fill a short form with your business basics. Takes under 3 minutes.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "We Handle Everything",
    desc: "Our team manages your KYC, integration, and account setup — you don't lift a finger.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Go Live in 12 Minutes",
    desc: "Your payment gateway, links, and QR codes are ready. Start collecting immediately.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-pq-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pq-accent/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pq-gradient-end/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">About PayQuick</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pq-text tracking-tight mb-6 leading-tight">
            Built by people who got tired of watching great businesses{" "}
            <span className="gradient-text">struggle with payments.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-5 text-pq-text-secondary leading-relaxed reveal-left">
            <p>
              We saw the gap firsthand. On one side, brilliant entrepreneurs running incredible businesses &mdash; D2C brands, coaching institutes, SaaS startups, freelancers, retail stores going online for the first time. On the other, the enterprise-grade payment infrastructure they needed but couldn&apos;t access without a tech team, weeks of paperwork, and a corporate bank relationship.
            </p>
            <p>
              PayQuick is the layer between great businesses and enterprise infrastructure. We handle the KYC, the integration, the documentation, and the ongoing support &mdash; so you can go from &ldquo;I need to accept payments&rdquo; to &ldquo;I&apos;m live and collecting&rdquo; in under 12 minutes.
            </p>
            <p>
              Every business that signs up with us gets a dedicated account manager on WhatsApp. Not a ticket number. Not a chatbot. A real person who picks up when you call, responds when you message, and stays with you as your business grows.
            </p>
          </div>

          {/* How it works — 3 steps */}
          <div className="relative reveal-right">
            <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-6">How It Works</p>
            <div className="space-y-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-pq-border/70 p-5 shadow-sm hover:shadow-md hover:border-pq-accent/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-pq-accent/10 to-pq-gradient-end/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-pq-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-pq-accent/50 tabular-nums">{s.step}</span>
                        <h3 className="text-sm font-bold text-pq-text">{s.title}</h3>
                      </div>
                      <p className="text-sm text-pq-text-secondary leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { value: "200+", label: "Businesses onboarded", icon: Users },
            { value: "12 min", label: "Average setup time", icon: Clock },
            { value: "< 2 hrs", label: "Support response time", icon: Headphones },
          ].map((stat, i) => (
            <div key={i} className={`bg-white rounded-2xl border border-pq-border/70 p-6 text-center hover:shadow-lg hover:border-pq-accent/20 transition-all duration-300 reveal reveal-delay-${i + 1}`}>
              <div className="w-12 h-12 rounded-xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-pq-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-pq-text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { Users, Clock, Headphones, Heart, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — PayQuick",
  description: "Learn how PayQuick bridges the gap between great businesses and enterprise payment infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pq-text tracking-tight mb-5 leading-tight">
            Built by people who believe every business{" "}
            <span className="gradient-text">deserves great payments.</span>
          </h1>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto mb-16 text-pq-text-secondary">
          <p>
            We saw the gap firsthand. On one side, brilliant entrepreneurs running incredible businesses — D2C brands, coaching institutes, SaaS startups, freelancers, retail stores going online for the first time. On the other, the enterprise-grade payment infrastructure they needed but couldn&apos;t access without a tech team, weeks of paperwork, and a corporate bank relationship.
          </p>
          <p>
            PayQuick is the layer between great businesses and enterprise infrastructure. We handle the KYC, the integration, the documentation, and the ongoing support — so you can go from &ldquo;I need to accept payments&rdquo; to &ldquo;I&apos;m live and collecting&rdquo; in under 12 minutes.
          </p>
          <p>
            Every business that signs up with us gets a dedicated account manager on WhatsApp. Not a ticket number. Not a chatbot. A real person who picks up when you call, responds when you message, and stays with you as your business grows.
          </p>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Heart, title: "Human-First", desc: "Real people, real support, real relationships. No ticket queues." },
            { icon: Target, title: "Speed Obsessed", desc: "12-minute onboarding. Instant settlements. Fast everything." },
            { icon: ShieldCheck, title: "Trust Built-In", desc: "PCI-DSS Level 1 compliant. RBI guidelines. 256-bit SSL." },
          ].map((v, i) => (
            <div key={i} className="bg-pq-surface rounded-2xl border border-pq-border p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-pq-accent" />
              </div>
              <h3 className="text-lg font-bold text-pq-text mb-2">{v.title}</h3>
              <p className="text-sm text-pq-text-secondary">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { value: "200+", label: "Businesses onboarded", icon: Users },
            { value: "12 min", label: "Average setup time", icon: Clock },
            { value: "< 2 hrs", label: "Support response time", icon: Headphones },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-pq-border p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-pq-accent" />
              </div>
              <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-pq-text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

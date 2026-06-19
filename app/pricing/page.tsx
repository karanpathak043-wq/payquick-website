import { Metadata } from "next";
import { Check, Zap, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — PayQuick",
  description: "Simple, transparent pricing for every business size. No hidden fees, no setup charges.",
};

const features = [
  "Payment Gateway with 100+ modes",
  "Payment Links & Payment Pages",
  "UPI Collect & QR Codes",
  "Subscriptions & AutoPay",
  "Smart Collect & Virtual Accounts",
  "GST Invoice Generation",
  "International Payments",
  "Instant Settlements",
  "API & Webhook Access",
  "Dedicated Account Manager on WhatsApp",
  "Complete KYC & Onboarding Support",
  "24/7 Dashboard Access",
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pq-text tracking-tight mb-5">
            Simple, transparent <span className="gradient-text">pricing.</span>
          </h1>
          <p className="text-lg text-pq-text-secondary max-w-2xl mx-auto">
            No setup fees, no monthly charges. You only pay per transaction. Every product is included in your account from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Standard plan */}
          <div className="bg-white rounded-2xl border border-pq-border p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-pq-accent" />
              <h3 className="text-xl font-bold text-pq-text">Standard</h3>
            </div>
            <p className="text-pq-text-secondary text-sm mb-6">For businesses just getting started with online payments.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-pq-text">2%</span>
              <span className="text-pq-text-muted ml-1">per transaction</span>
            </div>
            <a href="mailto:business@payquickfintech.com" className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Enterprise plan */}
          <div className="bg-gradient-to-br from-pq-primary to-[#1e1b4b] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pq-accent/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-pq-accent-lighter" />
                <h3 className="text-xl font-bold">Enterprise</h3>
              </div>
              <p className="text-slate-300 text-sm mb-6">Custom pricing for high-volume businesses. Let&apos;s talk.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">Custom</span>
                <span className="text-slate-400 ml-1 text-sm">volume-based</span>
              </div>
              <a href="https://wa.me/919967754782" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 text-sm font-semibold text-pq-primary bg-white rounded-xl hover:bg-slate-50 transition-all duration-300">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Everything included */}
        <div className="bg-pq-surface rounded-2xl border border-pq-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-pq-text mb-6 text-center">Everything included, always.</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-pq-success shrink-0" />
                <span className="text-sm text-pq-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

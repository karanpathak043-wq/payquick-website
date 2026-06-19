import Link from "next/link";
import { Zap, Shield, Lock, Mail, MessageCircle } from "lucide-react";

const productLinks = [
  { label: "Payment Gateway", href: "/#products" },
  { label: "Payment Links", href: "/#products" },
  { label: "Payment Pages", href: "/#products" },
  { label: "UPI & QR Codes", href: "/#products" },
  { label: "Subscriptions", href: "/#products" },
  { label: "Smart Collect", href: "/#products" },
  { label: "Instant Settlements", href: "/#products" },
  { label: "API & Webhooks", href: "/#products" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund & Cancellation Policy", href: "/refunds" },
  { label: "Grievance Redressal", href: "/grievance" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top area */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pq-accent to-pq-gradient-end flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">
                Pay<span className="text-pq-accent-lighter">Quick</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Fast, human-first payments for Indian businesses of every size.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:business@payquickfintech.com"
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-pq-accent-lighter group-hover:text-white transition-colors" />
                  <span>business@payquickfintech.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919967754782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-green-400 group-hover:text-white transition-colors" />
                  <span>+91 99677 54782</span>
                </a>
              </li>
              <li className="pt-1">
                <p className="text-xs text-slate-500 leading-relaxed">
                  WhatsApp & email support.<br />Response within 2 hours.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left">
              &copy; {year} PayQuick Fintech Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" />Powered by Razorpay infrastructure</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" />PCI-DSS Compliant</span>
              <span>&middot;</span>
              <span>RBI Guidelines</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" />256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

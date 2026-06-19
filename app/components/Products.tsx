"use client";

import {
  CreditCard, Link2, FileText, QrCode, RefreshCw,
  Building2, Receipt, Globe, Zap, Code2, CheckCircle2,
} from "lucide-react";

const products = [
  {
    title: "Payment Gateway", label: "Core Infrastructure",
    labelColor: "bg-pq-accent/10 text-pq-accent", icon: CreditCard,
    body: "Accept payments through India\u2019s most reliable infrastructure. Every transaction routes through a high-success, PCI-DSS Level 1 compliant gateway with intelligent retry logic built in. Your customers never hit a failed payment. You never lose a sale.",
    specs: ["100+ payment modes", "99.9% uptime SLA", "Instant activation"],
  },
  {
    title: "Payment Links", label: "No-Code",
    labelColor: "bg-emerald-500/10 text-emerald-600", icon: Link2,
    body: "Create a payment link in under 30 seconds and send it anywhere \u2014 WhatsApp, email, Instagram DM, SMS. No website needed, no code, no friction. Your customer clicks, pays, done.",
    specs: ["Share via any channel", "Custom amount or fixed", "Expiry control"],
  },
  {
    title: "Payment Pages", label: "No-Code",
    labelColor: "bg-emerald-500/10 text-emerald-600", icon: FileText,
    body: "A fully branded, hosted payment page that looks like yours \u2014 your logo, your colors, your product. Share the link with customers or embed it anywhere. Collects payments, handles receipts, requires zero development.",
    specs: ["Custom branding", "Product catalog support", "One-click share"],
  },
  {
    title: "UPI Collect & QR Codes", label: "Instant Collection",
    labelColor: "bg-orange-500/10 text-orange-600", icon: QrCode,
    body: "Generate a static or dynamic QR code for your counter, delivery bag, invoice, or Instagram bio. Customers scan with any UPI app \u2014 PhonePe, GPay, Paytm \u2014 and the money is yours instantly.",
    specs: ["Works with all UPI apps", "Static & dynamic QR", "Offline-ready"],
  },
  {
    title: "Subscriptions & AutoPay", label: "Recurring Billing",
    labelColor: "bg-violet-500/10 text-violet-600", icon: RefreshCw,
    body: "Bill your SaaS customers, retainer clients, or members automatically every month \u2014 without chasing payments. UPI AutoPay handles the mandate, the debit, and the confirmation.",
    specs: ["UPI AutoPay mandates", "Custom billing cycles", "Auto-retry on failure"],
  },
  {
    title: "Smart Collect", label: "B2B Payments",
    labelColor: "bg-blue-500/10 text-blue-600", icon: Building2,
    body: "Assign a unique virtual bank account or UPI ID to each of your customers or invoices. When they transfer, the payment is automatically matched and reconciled. Zero manual work for high-volume collections.",
    specs: ["Auto-reconciliation", "Unique virtual accounts", "NEFT / RTGS / UPI / IMPS"],
  },
  {
    title: "GST Invoices", label: "Professional Billing",
    labelColor: "bg-teal-500/10 text-teal-600", icon: Receipt,
    body: "Create and send professional GST-compliant invoices in under a minute. Add your logo, line items, taxes, and due date. Your customer gets an email with a built-in Pay Now button.",
    specs: ["GST-compliant", "Pay Now link embedded", "Auto payment reminders"],
  },
  {
    title: "International Payments", label: "Global Sales",
    labelColor: "bg-cyan-500/10 text-cyan-600", icon: Globe,
    body: "Sell to customers outside India without setting up a foreign entity. Accept payments in 100+ currencies from buyers across the world. Funds settle in INR directly to your bank account.",
    specs: ["100+ currencies", "Auto INR settlement", "3DS + fraud protection"],
  },
  {
    title: "Instant Settlements", label: "Cash Flow",
    labelColor: "bg-amber-500/10 text-amber-600", icon: Zap,
    body: "Don\u2019t wait T+2 days for your money. With Instant Settlements, you can access your funds within minutes of a transaction \u2014 any time, any day, including weekends and holidays.",
    specs: ["Settlement in minutes", "Available 24/7", "No minimum volume required"],
  },
  {
    title: "API & Webhooks", label: "For Tech Teams",
    labelColor: "bg-rose-500/10 text-rose-600", icon: Code2,
    body: "For SaaS teams and developers who need deeper control. Full REST API access, sandbox environment, server-side SDKs in Node.js, Python, PHP, Java, Ruby, and real-time webhooks for every payment event.",
    specs: ["REST API", "Sandbox testing", "Real-time event webhooks"],
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pq-text tracking-tight mb-5">
            One platform. <span className="gradient-text">Every way to get paid.</span>
          </h2>
          <p className="text-lg text-pq-text-secondary leading-relaxed">
            PayQuick brings you the full power of enterprise payment infrastructure &mdash; simplified, supported, and set up for you. Every product below is included in your account.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="group relative bg-white rounded-2xl border border-pq-border/70 p-6 hover:border-pq-accent/30 hover:shadow-xl hover:shadow-pq-accent/5 transition-all duration-500 hover:-translate-y-1">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4 ${product.labelColor}`}>{product.label}</span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pq-accent/10 to-pq-gradient-end/10 flex items-center justify-center group-hover:from-pq-accent/20 group-hover:to-pq-gradient-end/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-pq-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-pq-text">{product.title}</h3>
                </div>
                <p className="text-sm text-pq-text-secondary leading-relaxed mb-5">{product.body}</p>
                <div className="pt-4 border-t border-pq-border/50 flex flex-wrap gap-x-4 gap-y-2">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs font-medium text-pq-text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pq-success" />{spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

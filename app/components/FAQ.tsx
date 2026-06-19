"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is PayQuick a payment gateway? How does it work?",
    a: "PayQuick is a payment solution provider built on top of Razorpay\u2019s enterprise infrastructure. When you sign up with us, we handle your complete onboarding \u2014 KYC, integration, and account setup \u2014 so you get access to Razorpay\u2019s full suite of payment products (gateway, UPI, payment links, subscriptions, and more) without dealing with the complexity yourself. Think of us as your dedicated payments team.",
  },
  {
    q: "Do I need a website or developer to start accepting payments?",
    a: "Not at all. PayQuick offers no-code tools like Payment Links and Payment Pages that let you start collecting payments immediately. You can share a link via WhatsApp, email, or social media. No website, no app, no coding required. If you do have a website or app, we can integrate the full gateway for you as well.",
  },
  {
    q: "What documents do I need for KYC?",
    a: "For most businesses, you\u2019ll need: PAN card, Aadhaar card, a cancelled cheque or bank statement, GST certificate (if applicable), and your business registration document (for companies/LLPs). For sole proprietors, PAN + Aadhaar + bank proof is usually enough. Our team walks you through the exact requirements based on your business type.",
  },
  {
    q: "How quickly will I receive my settlements?",
    a: "Standard settlements happen in T+2 business days. If you need faster access, our Instant Settlement feature lets you receive funds within minutes of a transaction \u2014 available 24/7, including weekends and holidays. There\u2019s a small additional fee for instant settlements, which your account manager will explain during setup.",
  },
  {
    q: "What payment methods can my customers use?",
    a: "Your customers can pay using 100+ methods including all major UPI apps (GPay, PhonePe, Paytm), credit and debit cards (Visa, Mastercard, RuPay, Amex), net banking from 60+ banks, wallets (Paytm, Amazon Pay, Mobikwik), EMI options, Buy Now Pay Later, and international cards. Everything is enabled by default in your account.",
  },
  {
    q: "Is my customer\u2019s data safe? Are you PCI-DSS compliant?",
    a: "Absolutely. All payment processing happens through Razorpay\u2019s PCI-DSS Level 1 certified infrastructure \u2014 the highest level of security certification in the payments industry. Customer card data is tokenized and encrypted, and we never store sensitive payment information on our servers. 256-bit SSL encryption protects every transaction.",
  },
  {
    q: "Can I accept payments in international currencies?",
    a: "Yes. With our International Payments feature, you can accept payments in 100+ currencies from customers worldwide. The funds are automatically converted and settled in INR to your Indian bank account. 3D Secure authentication and fraud protection are built in for all international transactions.",
  },
  {
    q: "How do I get support after signing up?",
    a: "Every PayQuick merchant gets a dedicated account manager available on WhatsApp. No ticket systems, no chatbots \u2014 a real person who knows your account and responds within 2 hours. You can also reach us via email or phone call. We stay with you from onboarding through your growth journey, helping with everything from technical integration to optimizing your payment success rates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pq-text tracking-tight">
            Answers before you <span className="gradient-text">even ask.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-pq-accent/30 shadow-lg shadow-pq-accent/5 bg-white" : "border-pq-border/70 bg-pq-surface/50 hover:bg-white hover:border-pq-border"}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold transition-colors ${isOpen ? "text-pq-accent" : "text-pq-text"}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-pq-text-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-pq-accent" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-5 text-sm text-pq-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

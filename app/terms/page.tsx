import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — PayQuick",
  description: "Read PayQuick's terms of service governing the use of our payment platform.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-7 h-7 text-pq-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-pq-text tracking-tight mb-3">Terms of Service</h1>
          <p className="text-pq-text-muted text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using PayQuick&apos;s services, you agree to be bound by these Terms of Service. PayQuick Fintech Pvt. Ltd. provides payment processing services built on Razorpay&apos;s infrastructure, and your use is also subject to Razorpay&apos;s terms.</p>

          <h2>2. Services</h2>
          <p>PayQuick provides payment gateway services, payment links, payment pages, UPI collection, QR codes, subscription billing, smart collect, GST invoicing, international payments, instant settlements, and API access. All services are provided as-is and subject to availability.</p>

          <h2>3. Account Registration</h2>
          <p>You must provide accurate business information and complete KYC verification. You are responsible for maintaining the confidentiality of your account credentials. You must be a legally registered business entity or sole proprietor in India.</p>

          <h2>4. Fees and Settlements</h2>
          <p>Transaction fees are as agreed during onboarding. Standard settlements occur in T+2 business days. Instant settlement is available at additional cost. PayQuick reserves the right to modify fees with 30 days&apos; prior notice.</p>

          <h2>5. Prohibited Activities</h2>
          <p>You may not use PayQuick for illegal activities, money laundering, fraud, or any business prohibited under Indian law or RBI guidelines. We reserve the right to suspend accounts engaged in prohibited activities.</p>

          <h2>6. Limitation of Liability</h2>
          <p>PayQuick&apos;s liability is limited to the transaction fees collected. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.</p>

          <h2>7. Termination</h2>
          <p>Either party may terminate the agreement with 30 days&apos; notice. PayQuick may suspend services immediately for policy violations. Outstanding settlements will be processed upon termination.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>
        </div>
      </div>
    </div>
  );
}

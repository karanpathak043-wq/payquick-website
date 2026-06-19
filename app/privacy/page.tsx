import { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — PayQuick",
  description: "Read PayQuick's privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-pq-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-pq-text tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-pq-text-muted text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Information We Collect</h2>
          <p>When you use PayQuick&apos;s services, we collect information necessary to provide our payment processing services. This includes your business details (name, address, PAN, GST), bank account information, contact information (email, phone, WhatsApp), and transaction data processed through our platform.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to: process and facilitate payments, verify your identity (KYC compliance), provide customer support, send transaction notifications and receipts, improve our services, and comply with legal and regulatory requirements including RBI guidelines.</p>

          <h2>3. Data Security</h2>
          <p>All payment processing is handled through PCI-DSS Level 1 certified infrastructure. We use 256-bit SSL encryption for all data transmission. Customer card data is tokenized and we never store sensitive payment information on our servers.</p>

          <h2>4. Third-Party Sharing</h2>
          <p>We share data only with: our payment infrastructure partner (Razorpay) to process transactions, banking partners for settlement processing, and regulatory authorities when required by law. We never sell your personal data to third parties.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active and as required by applicable laws. Transaction records are maintained as per RBI and tax compliance requirements. You may request account deletion, subject to regulatory retention obligations.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may request a copy of your data at any time. Contact your dedicated account manager or email us to exercise these rights.</p>

          <h2>7. Cookies</h2>
          <p>Our website uses essential cookies for functionality and analytics cookies to improve your experience. You can manage cookie preferences through your browser settings.</p>

          <h2>8. Contact Us</h2>
          <p>For privacy-related queries, contact our Grievance Officer or reach out via WhatsApp, email, or phone through your dedicated account manager.</p>
        </div>
      </div>
    </div>
  );
}

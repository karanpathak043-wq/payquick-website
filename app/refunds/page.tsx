import { Metadata } from "next";
import { RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — PayQuick",
  description: "Understand PayQuick's refund and cancellation policies for merchants and their customers.",
};

export default function RefundsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-7 h-7 text-pq-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-pq-text tracking-tight mb-3">Refund &amp; Cancellation Policy</h1>
          <p className="text-pq-text-muted text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Merchant Refund Policy</h2>
          <p>Merchants using PayQuick can initiate refunds for their customers through the PayQuick dashboard or API. Full and partial refunds are supported for all payment methods including UPI, cards, net banking, and wallets.</p>

          <h2>2. Refund Processing Time</h2>
          <p>Refund processing times vary by payment method: UPI refunds are processed within 1-3 business days, card refunds within 5-7 business days, net banking refunds within 5-7 business days, and wallet refunds within 1-2 business days. These timelines are dependent on the issuing bank or payment provider.</p>

          <h2>3. Service Fee Refunds</h2>
          <p>PayQuick&apos;s transaction processing fees are non-refundable once a transaction has been successfully processed. In cases of disputed or fraudulent transactions, fee refunds will be evaluated on a case-by-case basis.</p>

          <h2>4. Subscription Cancellations</h2>
          <p>Merchants may cancel their PayQuick account at any time with 30 days&apos; written notice. All pending settlements will be processed and transferred to the registered bank account. There are no cancellation fees or exit charges.</p>

          <h2>5. Customer-Initiated Refunds</h2>
          <p>End customers should contact the merchant directly for refund requests. PayQuick facilitates the refund processing but the refund decision rests with the merchant as per their individual refund policy.</p>

          <h2>6. Chargeback Handling</h2>
          <p>In case of chargebacks, PayQuick will notify the merchant and assist in providing the necessary documentation to the acquiring bank. Chargeback amounts may be debited from future settlements pending resolution.</p>

          <h2>7. Contact</h2>
          <p>For refund-related queries, contact your dedicated account manager via WhatsApp or email. We respond within 2 hours during business hours.</p>
        </div>
      </div>
    </div>
  );
}

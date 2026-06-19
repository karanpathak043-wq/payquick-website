import { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Grievance Redressal — PayQuick",
  description: "PayQuick's grievance redressal mechanism for resolving complaints and disputes.",
};

export default function GrievancePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-pq-accent/8 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7 text-pq-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-pq-text tracking-tight mb-3">Grievance Redressal</h1>
          <p className="text-pq-text-muted text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Our Commitment</h2>
          <p>PayQuick is committed to providing a transparent and efficient grievance redressal mechanism. We take every complaint seriously and aim to resolve all issues promptly and fairly.</p>

          <h2>2. How to File a Grievance</h2>
          <p>You may file a grievance through any of the following channels:</p>
          <ul>
            <li><strong>WhatsApp:</strong> Message your dedicated account manager</li>
            <li><strong>Email:</strong> grievance@payquick.in</li>
            <li><strong>Phone:</strong> Contact your dedicated account manager</li>
          </ul>

          <h2>3. Grievance Resolution Timeline</h2>
          <p>We acknowledge all grievances within 24 hours of receipt. Our target resolution time is 7 business days for standard issues and 15 business days for complex matters requiring investigation.</p>

          <h2>4. Escalation Process</h2>
          <p>If you are not satisfied with the initial resolution:</p>
          <ul>
            <li><strong>Level 1:</strong> Your dedicated account manager (response within 2 hours)</li>
            <li><strong>Level 2:</strong> Senior Operations Manager (response within 24 hours)</li>
            <li><strong>Level 3:</strong> Grievance Officer (response within 48 hours)</li>
          </ul>

          <h2>5. Grievance Officer</h2>
          <div className="bg-pq-surface rounded-xl p-6 not-prose">
            <p className="text-sm text-pq-text-secondary mb-1"><strong className="text-pq-text">Name:</strong> Grievance Officer, PayQuick Fintech Pvt. Ltd.</p>
            <p className="text-sm text-pq-text-secondary mb-1"><strong className="text-pq-text">Email:</strong> grievance@payquick.in</p>
            <p className="text-sm text-pq-text-secondary"><strong className="text-pq-text">Response Time:</strong> Within 48 hours</p>
          </div>

          <h2>6. Regulatory Recourse</h2>
          <p>If your grievance remains unresolved after exhausting our internal process, you may approach the appropriate regulatory authority, including the Reserve Bank of India&apos;s Integrated Ombudsman Scheme for payment-related complaints.</p>

          <h2>7. Feedback</h2>
          <p>We continuously improve our grievance process based on merchant feedback. Your input helps us serve you better. Share suggestions with your account manager at any time.</p>
        </div>
      </div>
    </div>
  );
}

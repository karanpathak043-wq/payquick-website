import { Metadata } from "next";
import { Puzzle, ShoppingCart, Code2, Globe, Smartphone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations — PayQuick",
  description: "Seamlessly integrate PayQuick with your existing tools, platforms, and tech stack.",
};

const integrations = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Shopify, WooCommerce, Magento, OpenCart — integrate PayQuick with a single click. No developer needed.",
    tags: ["Shopify", "WooCommerce", "Magento"],
  },
  {
    icon: Code2,
    title: "Developer SDKs",
    description: "Server-side SDKs for Node.js, Python, PHP, Java, and Ruby. Full API documentation and sandbox environment.",
    tags: ["Node.js", "Python", "PHP", "Java"],
  },
  {
    icon: Globe,
    title: "Website Builders",
    description: "WordPress, Wix, Squarespace — embed payment buttons and forms without writing code.",
    tags: ["WordPress", "Wix", "Squarespace"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native, Flutter, and native iOS/Android SDKs for seamless in-app payment experiences.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Puzzle,
    title: "No-Code Tools",
    description: "Zapier, Make (Integromat), and webhook-based automations to connect payments with your workflow.",
    tags: ["Zapier", "Make", "Webhooks"],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pq-accent uppercase tracking-widest mb-3">Integrations</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pq-text tracking-tight mb-5">
            Connects with <span className="gradient-text">everything.</span>
          </h1>
          <p className="text-lg text-pq-text-secondary max-w-2xl mx-auto">
            Whether you use Shopify, WordPress, or build custom — PayQuick plugs right in. Our team handles the integration for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-2xl border border-pq-border p-6 hover:shadow-lg hover:border-pq-accent/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pq-accent/8 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-pq-accent" />
                </div>
                <h3 className="text-lg font-bold text-pq-text mb-2">{item.title}</h3>
                <p className="text-sm text-pq-text-secondary leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-pq-surface text-xs font-medium text-pq-text-muted rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="/#cta" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-pq-accent to-pq-accent-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Talk to our integration team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

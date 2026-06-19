"use client";

import {
  Shield,
  BadgeCheck,
  UserCheck,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  IndianRupee,
  CheckCircle2,
  Wallet,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white via-pq-surface to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pq-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pq-gradient-end/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pq-gradient-mid/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pq-accent/8 border border-pq-accent/15 mb-8">
              <div className="w-2 h-2 rounded-full bg-pq-success animate-pulse" />
              <span className="text-sm font-medium text-pq-accent">
                Zero setup fees · Onboard in 12 minutes
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pq-text leading-[1.1] mb-6">
              Lightning-Fast Payments.{" "}
              <span className="gradient-text">Zero Setup Hassle.</span>
            </h1>

            <p className="text-lg text-pq-text-secondary leading-relaxed max-w-xl mb-8">
              The enterprise-grade payment gateway tailored for modern
              businesses. Whether you are a local D2C brand, a growing SaaS
              platform, or a retail store moving online, we handle the
              infrastructure so you can focus on scaling.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-pq-accent via-pq-accent-light to-pq-gradient-mid rounded-2xl shadow-xl shadow-pq-accent/25 hover:shadow-2xl hover:shadow-pq-accent/35 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Talk to Our Setup Experts
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-pq-text-muted">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-pq-success" />
                100% Secure
              </span>
              <span className="text-pq-border">•</span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-pq-success" />
                RBI Compliant
              </span>
              <span className="text-pq-border">•</span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-pq-success" />
                Dedicated Account Manager
              </span>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-pq-accent/10 border border-pq-border/60 p-6 animate-float-slow">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-pq-text-muted font-medium uppercase tracking-wider">
                      Dashboard Overview
                    </p>
                    <p className="text-2xl font-bold text-pq-text mt-1">
                      ₹4,82,350
                    </p>
                    <p className="text-xs text-pq-success font-medium flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3" />
                      +23.5% from last month
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pq-accent to-pq-gradient-end flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end gap-1.5 h-24 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-pq-accent/20 to-pq-accent/60 transition-all duration-500 hover:to-pq-accent"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    )
                  )}
                </div>

                {/* Transaction rows */}
                <div className="space-y-3">
                  {[
                    {
                      name: "Shopify Store #421",
                      amount: "₹12,500",
                      status: "Success",
                      icon: CreditCard,
                    },
                    {
                      name: "UPI Collect — Raj",
                      amount: "₹3,200",
                      status: "Success",
                      icon: IndianRupee,
                    },
                    {
                      name: "Payment Link #89",
                      amount: "₹8,750",
                      status: "Settled",
                      icon: Wallet,
                    },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-pq-surface hover:bg-pq-surface-alt transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pq-accent/10 flex items-center justify-center">
                          <tx.icon className="w-4 h-4 text-pq-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-pq-text">
                            {tx.name}
                          </p>
                          <p className="text-xs text-pq-text-muted">
                            Just now
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-pq-text">
                          {tx.amount}
                        </p>
                        <p className="text-xs font-medium text-pq-success flex items-center gap-0.5 justify-end">
                          <CheckCircle2 className="w-3 h-3" />
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating success rate card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-pq-border/50 px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pq-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-pq-success" />
                  </div>
                  <div>
                    <p className="text-xs text-pq-text-muted">Success Rate</p>
                    <p className="text-lg font-bold text-pq-text">99.7%</p>
                  </div>
                </div>
              </div>

              {/* Floating settlement card */}
              <div className="absolute -bottom-3 -left-6 bg-white rounded-2xl shadow-xl border border-pq-border/50 px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pq-accent/10 flex items-center justify-center">
                    <IndianRupee className="w-4 h-4 text-pq-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-pq-text-muted">Settled Today</p>
                    <p className="text-lg font-bold text-pq-text">₹1.2L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

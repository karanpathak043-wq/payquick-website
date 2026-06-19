"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every element with a
 * .reveal / .reveal-left / .reveal-right class and adds .revealed
 * when they enter the viewport. Mounted once at the layout level.
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

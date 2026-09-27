"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-heading, .tour-card, .discover-photos, .discover-copy, .walking-card, .custom-card, .about-inner > div, .guide-intro, .accordions, .reviews, .closing-cta > .container",
      ),
    );

    const clear = () => {
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.removeAttribute("data-revealed");
      });
    };

    const setup = () => {
      clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute("data-revealed", "true");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );

      elements.forEach((element) => {
        // Keep restored scroll positions and initially visible content readable.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.setAttribute("data-reveal", "true");
        observer?.observe(element);
      });
    };

    setup();
    preference.addEventListener("change", setup);
    return () => {
      clear();
      preference.removeEventListener("change", setup);
    };
  }, []);

  return (
    <div className="welcome-screen" aria-hidden="true">
      <div className="welcome-orbit welcome-orbit-outer" />
      <div className="welcome-orbit welcome-orbit-inner" />
      <div className="welcome-content">
        <div className="welcome-emblem">
          <Image
            src="/images/logo-mark.webp"
            alt=""
            width={86}
            height={86}
            loading="eager"
          />
        </div>
        <span className="welcome-kicker">A WARM MYANMAR WELCOME</span>
        <span className="welcome-title">
          Mingalabar<span>.</span>
        </span>
        <span className="welcome-message">
          Your journey to connection begins here.
        </span>
        <span className="welcome-line" />
        <span className="welcome-brand">N BAU BUM MYANMAR</span>
      </div>
    </div>
  );
}

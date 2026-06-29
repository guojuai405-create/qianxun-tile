"use client";

import { useEffect } from "react";

/**
 * 为页面中的 .fade-in 元素绑定滚动淡入动画。
 * 仅负责动画——所有文字内容均由服务端渲染进 HTML 源码，不依赖此脚本。
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute("data-delay") || 0);
            window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el, i) => {
      el.setAttribute("data-delay", String((i % 4) * 100));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

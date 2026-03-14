import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticIconProps {
  children: React.ReactNode;
  href: string;
}

const MagneticIcon: React.FC<MagneticIconProps> = ({ children, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const x = (clientX - centerX) * 0.4;
      const y = (clientY - centerY) * 0.4;

      gsap.to(element, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="magnetic-icon"
    >
      {children}
    </a>
  );
};

export default MagneticIcon;

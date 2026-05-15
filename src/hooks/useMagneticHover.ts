import { useRef, useEffect } from 'react';

interface MagneticConfig {
  radius?: number;
  strength?: number;
  ease?: number;
}

interface MagneticState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  animationFrameId: number;
}

export const useMagneticHover = <T extends HTMLElement = HTMLElement>(config: MagneticConfig = {}) => {
  const { radius = 50, strength = 0.3, ease = 0.2 } = config;
  const ref = useRef<T | null>(null);
  const state = useRef<MagneticState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    animationFrameId: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const distance = Math.hypot(
        e.clientX - elementCenterX,
        e.clientY - elementCenterY
      );

      if (distance < radius) {
        state.current.targetX = (e.clientX - elementCenterX) * strength;
        state.current.targetY = (e.clientY - elementCenterY) * strength;
        animate();
      } else {
        state.current.targetX = 0;
        state.current.targetY = 0;
      }
    };

    const onMouseLeave = () => {
      state.current.targetX = 0;
      state.current.targetY = 0;
    };

    // Animation loop para smooth lerp (spring ease)
    const animate = () => {
      const s = state.current;
      s.x += (s.targetX - s.x) * ease;
      s.y += (s.targetY - s.y) * ease;

      if (Math.abs(s.x) > 0.1 || Math.abs(s.y) > 0.1) {
        element.style.transform = `translate(${s.x}px, ${s.y}px)`;
        s.animationFrameId = requestAnimationFrame(animate);
      } else if (s.x !== 0 || s.y !== 0) {
        element.style.transform = 'translate(0, 0)';
        s.x = 0;
        s.y = 0;
      }
    };

    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
      if (state.current.animationFrameId) {
        cancelAnimationFrame(state.current.animationFrameId);
      }
    };
  }, [radius, strength, ease]);

  return ref;
};

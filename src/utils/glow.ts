import { useMemo, type MouseEvent } from "react";

// Drives the .glow-surface cursor-tracking effect (see profile.css) by
// writing the pointer's position, relative to the hovered element, into
// --mouse-x/--mouse-y.
export const handleGlowMove = (e: MouseEvent<HTMLElement>) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

// A smooth blue -> teal -> indigo -> purple -> pink -> orange sweep - an
// Apple-HIG-flavored spectrum that reads as one cohesive gradient rather
// than a random rainbow, chosen to sit nicely against the site's light
// background and dark text. Every glow-hover surface draws its color from
// here at random (see useRandomGlowColor/useRandomGlowColors below).
export const GLOW_PALETTE = [
  "rgba(10, 132, 255, 0.55)", // blue
  "rgba(100, 210, 255, 0.55)", // teal
  "rgba(94, 92, 230, 0.55)", // indigo
  "rgba(175, 82, 222, 0.55)", // purple
  "rgba(255, 55, 95, 0.55)", // pink
  "rgba(255, 159, 10, 0.55)", // orange
];

const randomGlowColor = () =>
  GLOW_PALETTE[Math.floor(Math.random() * GLOW_PALETTE.length)];

// One random palette color, picked once and stable for the component's
// lifetime (doesn't re-roll on every re-render).
export const useRandomGlowColor = () => useMemo(randomGlowColor, []);

// `count` independently-random palette colors, e.g. one per card in a
// mapped list, stable for the component's lifetime.
export const useRandomGlowColors = (count: number) =>
  useMemo(() => Array.from({ length: count }, randomGlowColor), [count]);

// Ref callback that applies the chosen color as the element's --glow-color.
// Used instead of the `style` prop so callers don't need React's CSS
// custom-property typing.
export const glowColorRef = (color: string) => (el: HTMLElement | null) => {
  el?.style.setProperty("--glow-color", color);
};

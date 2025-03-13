"use client";

import { useEffect, useState } from "react";

export function usePointerPosition(containerRef: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    function handlerMove(e: any) {
      const rect = container.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    container.addEventListener("pointermove", handlerMove);
    return () => container.removeEventListener("pointermove", handlerMove);
  }, []);

  return position;
}

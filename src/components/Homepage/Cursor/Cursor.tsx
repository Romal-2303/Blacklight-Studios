"use client";

import Dot from "@/components/Dot/Dot";
import { usePointerPosition } from "@/hooks/usePointerPosition";
import { ReactNode } from "react";

interface CursorProps {
  containerRef: any;
  icon: ReactNode;
  circleSize?: number;
  outerCircleColor?: string;
}

const Cursor = ({
  containerRef,
  icon,
  circleSize = 70,
  outerCircleColor,
}: CursorProps) => {
  const pos1 = usePointerPosition(containerRef);

  return (
    <Dot
      icon={icon}
      position={pos1}
      delay={0.12}
      circleSize={circleSize}
      outerCircleColor={outerCircleColor}
    />
  );
};

export default Cursor;

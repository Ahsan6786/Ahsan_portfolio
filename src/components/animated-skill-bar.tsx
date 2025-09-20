
"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

type AnimatedSkillBarProps = {
  value: number;
};

export function AnimatedSkillBar({ value }: AnimatedSkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return <Progress value={progress} className="h-3 w-full" />;
}

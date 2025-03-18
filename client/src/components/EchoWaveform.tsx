import { cn } from "@/lib/utils";

interface EchoWaveformProps {
  className?: string;
  scale?: "sm" | "md" | "lg";
  bars?: number;
}

export default function EchoWaveform({ 
  className, 
  scale = "md", 
  bars = 5 
}: EchoWaveformProps) {
  const scales = {
    sm: "scale-75",
    md: "scale-100",
    lg: "scale-150"
  };

  const barClasses = "w-[3px] mx-[2px] rounded-[1px] bg-gradient-to-t from-primary to-blue-400";
  
  // Animation classes for different timing
  const animations = [
    "animate-equalizer-1",
    "animate-equalizer-2", 
    "animate-equalizer-3",
    "animate-equalizer-4", 
    "animate-equalizer-5"
  ];
  
  // Default heights for the bars
  const heights = [4, 6, 8, 5, 3];

  // Generate the bars based on the count
  const waveformBars = Array.from({ length: bars }).map((_, i) => {
    const animationIndex = i % animations.length;
    const heightIndex = i % heights.length;
    
    return (
      <div 
        key={i}
        className={cn(
          barClasses,
          animations[animationIndex],
          `h-${heights[heightIndex]}`
        )}
      />
    );
  });

  return (
    <div className={cn("flex items-center justify-center h-10", scales[scale], className)}>
      {waveformBars}
    </div>
  );
}

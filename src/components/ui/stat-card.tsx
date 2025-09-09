import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ReactNode;
  number: string;
  description: string;
  color?: "green" | "purple" | "blue" | "yellow" | "pink" | "orange";
  className?: string;
}

const colorVariants = {
  green: "bg-primary text-primary-foreground",
  purple: "bg-accent text-accent-foreground", 
  blue: "bg-brand-blue text-white",
  yellow: "bg-brand-yellow text-black",
  pink: "bg-brand-pink text-white",
  orange: "bg-brand-orange text-white",
};

export const StatCard = ({ 
  icon, 
  number, 
  description, 
  color = "green",
  className 
}: StatCardProps) => {
  return (
    <div className={cn(
      "rounded-xl p-6 text-center shadow-lg transition-transform hover:scale-105",
      colorVariants[color],
      className
    )}>
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <div className="font-gothic text-3xl font-bold tracking-wide uppercase mb-2">
        {number}
      </div>
      <div className="font-nunito text-sm font-medium">
        {description}
      </div>
    </div>
  );
};
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
}

export const Card = ({ children, className, gradient = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "relative p-8 rounded-xl border border-zinc-200 dark:border-zinc-800/50",
        "bg-white dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-800/30",
        "transition-all duration-300 backdrop-blur-[2px] hover:backdrop-blur-lg",
        gradient && "bg-gradient-to-b from-zinc-50/5 to-white/5 dark:from-zinc-800/5 dark:to-zinc-900/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 
import { cn } from "@/lib/utils";

export const LinePlaceholder = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "h-1 w-3/5 rounded-full bg-background-400 opacity-65",
        className,
      )}
    ></div>
  );
};

import { cn } from "@/lib/utils";

export const ImagePlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-12 w-12 rounded-full bg-background-400 opacity-65",
        className,
      )}
    ></div>
  );
};

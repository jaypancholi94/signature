import { cn } from "@/lib/utils";

export const LayoutWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-52 h-32 bg-background-200 rounded flex p-3 gap-2 cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};

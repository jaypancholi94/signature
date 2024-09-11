import { cn } from "@/lib/utils";
const ImagePlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-12 w-12 rounded-full bg-background-400 opacity-65",
        className,
      )}
    ></div>
  );
};
const SocialMediaPlaceholders = () => {
  return (
    <div className="h-4 w-4 rounded-full bg-background-400 opacity-65"></div>
  );
};
const LinePlaceholder = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "h-1 w-3/5 rounded-full bg-background-400 opacity-65",
        className,
      )}
    ></div>
  );
};

const LayoutWrapper = ({
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
const LayoutOne = () => {
  return (
    <LayoutWrapper className="flex-row gap-3">
      <div className="flex flex-col items-center justify-center gap-3 w-1/3">
        <ImagePlaceholder />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <SocialMediaPlaceholders key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-2/3">
        {[...Array(2)].map((_, i) => (
          <LinePlaceholder className="w-3/5" key={i} />
        ))}
        <div className="w-full flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <LinePlaceholder className="w-full" key={i} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
};
const LayoutTwo = () => {
  return (
    <LayoutWrapper className="flex-col gap-3">
      <div className="flex flex-col items-center justify-center gap-1 w-full">
        <ImagePlaceholder className="h-10 w-10" />
        <div className="flex flex-col items-center gap-2 w-full">
          {[...Array(2)].map((_, i) => (
            <LinePlaceholder className="w-3/5" key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 w-full">
        <div className="w-full flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <LinePlaceholder className="w-full" key={i} />
          ))}
        </div>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <SocialMediaPlaceholders key={i} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
};

const LAYOUTS = [
  { title: "layout-one", value: "Layout One", Component: LayoutOne },
  { title: "layout-two", value: "Layout Two", Component: LayoutTwo },
];

export { LAYOUTS };

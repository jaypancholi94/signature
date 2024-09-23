import { Skeleton } from "@/components/ui/skeleton";

const LayoutSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-background-100 p-2 w-full h-12secondary rounded">
        <Skeleton className="w-[172px] h-9 rounded" />
      </div>
      <div className="bg-background-100 p-6 w-full h-12secondary rounded">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[135px] h-5 rounded" />
          <Skeleton className="w-[170px] h-5 rounded" />
        </div>
        <div className="flex flex-col mt-6 items-center w-52 gap-1">
          <Skeleton className="w-52 h-32 rounded" />
          <Skeleton className="w-[100px] h-5 rounded" />
        </div>
      </div>
    </div>
  );
};
export { LayoutSkeleton };

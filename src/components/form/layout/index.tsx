"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LAYOUTS } from "./layouts";
import { useDetail } from "@/context/detail-context";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

const LayoutForm = () => {
  const { layout } = useDetail();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select your layout</CardTitle>
        <CardDescription>Grab the layout you after</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3 flex-wrap">
        {LAYOUTS.map(({ title, value, Component }) => (
          <div key={title}>
            <div
              className={cn(
                title === layout ? "opacity-100" : "opacity-60",
                "hover:opacity-100 transition-all relative",
              )}
            >
              {title === layout && (
                <BadgeCheck
                  className="text-primary-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  size={40}
                />
              )}
              <Component useAsTemplate />
            </div>
            <h4
              className={cn(
                "text-center mt-1",
                title == layout && "font-medium",
              )}
            >
              {value}
            </h4>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export { LayoutForm };

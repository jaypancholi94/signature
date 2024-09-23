"use client";

import { EmailWindow } from "@/components/layouts/email-window";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { LAYOUTS } from "../form/layout/layouts";

import { useDetail } from "@/context/detail-context";

const Preview = () => {
  const { layout } = useDetail();
  const ChoosenLayout =
    LAYOUTS.find((eachLayout) => eachLayout.title === layout) ?? LAYOUTS[0];
  const LayoutComponent = ChoosenLayout.Component;

  return (
    <div className="mt-2 px-4">
      <h2 className="my-4 text-primary-700 text-xl font-semibold text-center">
        Preview
      </h2>
      <div className="flex flex-col gap-4">
        <EmailWindow>
          <LayoutComponent />
        </EmailWindow>
        <Button className="flex gap-2">
          <Copy size={16} />
          Copy Signature
        </Button>
      </div>
    </div>
  );
};
export { Preview };

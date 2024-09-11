import { EmailWindow } from "@/components/layouts/email-window";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Preview = () => {
  return (
    <div className="mt-2 px-4">
      <h2 className="my-4 text-primary-700 text-xl font-semibold text-center">
        Preview
      </h2>
      <div className="flex flex-col gap-4">
        <EmailWindow>hellow</EmailWindow>
        <Button className="flex gap-2">
          <Copy size={16} />
          Copy Signature
        </Button>
      </div>
    </div>
  );
};
export { Preview };

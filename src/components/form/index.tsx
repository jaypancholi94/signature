"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TABS } from "@/constants";
import { LayoutForm } from "./layout";
import { DetailForm } from "./details";
import { Style } from "./style";
import { useDetail } from "@/context/detail-context";
import { LayoutSkeleton } from "./skeleton";

const Form = () => {
  const { loading } = useDetail();
  return (
    <div className="mt-2 px-4">
      <h2 className="my-4 text-primary-700 text-xl font-semibold text-center">
        Signature Details
      </h2>
      {loading ? (
        <LayoutSkeleton />
      ) : (
        <Tabs defaultValue={TABS[0].value}>
          <TabsList className="w-full">
            {TABS.map(({ title, value }) => (
              <TabsTrigger value={value} className="w-full" key={value}>
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={TABS[0].value}>
            <LayoutForm />
          </TabsContent>
          <TabsContent value={TABS[1].value}>
            <DetailForm />
          </TabsContent>
          <TabsContent value={TABS[2].value}>
            <Style />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export { Form };

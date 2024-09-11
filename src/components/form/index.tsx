import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS } from "@/constants";
import { LayoutForm } from "./layout";
import { DetailForm } from "./details";

const Form = () => {
  return (
    <div className="mt-2 px-4">
      <h2 className="my-4 text-primary-700 text-xl font-semibold text-center">
        Signature Details
      </h2>
      <Tabs defaultValue={TABS[1].value}>
        <TabsList className="w-full">
          {TABS.map(({ title, value }) => (
            <TabsTrigger value={value} className="w-full" key={value}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="layout">
          <LayoutForm />
        </TabsContent>
        <TabsContent value="details">
          <DetailForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { Form };

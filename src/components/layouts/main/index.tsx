import { Form } from "@/components/form";
import { Preview } from "@/components/preview";

const MainLayout = () => {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-full">
        <Form />
      </div>
      <div className="w-full hidden md:block">
        <Preview />
      </div>
    </div>
  );
};
export { MainLayout };

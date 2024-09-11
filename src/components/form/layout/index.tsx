import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LAYOUTS } from "./layouts";

const LayoutForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select your layout</CardTitle>
        <CardDescription>Grab the layout you after</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3 flex-wrap">
        {LAYOUTS.map(({ title, value, Component }) => (
          <div key={title}>
            <Component />
            <h4 className="text-center mt-1">{value}</h4>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export { LayoutForm };

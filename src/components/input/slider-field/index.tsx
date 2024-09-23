import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

type InputSliderFieldProps = {
  label: string;
  id: string;
  fontSize: string;
  setFontSize: (value: { key: string; value: string }) => void;
};
const CONVERTED_STRING = ["small", "medium", "large"];
const InputSliderField = ({
  label,
  id,
  fontSize,
  setFontSize,
}: InputSliderFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="capitalize text-muted-foreground">{fontSize}</div>
      <div className="flex gap-2 items-center">
        <Slider
          defaultValue={[CONVERTED_STRING.indexOf(fontSize)]}
          max={2}
          step={1}
          className="cursor-pointer"
          onValueChange={(value) => {
            setFontSize({ key: id, value: CONVERTED_STRING[value[0]] });
            console.log(value);
          }}
        />
      </div>
    </div>
  );
};
export { InputSliderField };

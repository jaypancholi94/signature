import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";

type InputColorFieldProps = {
  color: string;
  setColor: (color: string) => void;
  label?: string;
  id: string;
};

const InputColorField = ({
  label,
  id,
  color,
  setColor,
}: InputColorFieldProps) => {
  const [colorPicker, setColorPicker] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex gap-2 items-center">
        <Input
          type={"text"}
          placeholder={"#000000"}
          id={id}
          className={"w-1/2"}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <div
          className="h-8 w-1/2 rounded cursor-pointer border-2 border-primary-800"
          style={{ backgroundColor: color }}
          onClick={() => setColorPicker(!colorPicker)}
        ></div>
      </div>
      {colorPicker && (
        <HexColorPicker color={color} onChange={setColor} className="!w-full" />
      )}
    </div>
  );
};
export { InputColorField };

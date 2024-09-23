"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: ({ key, value }: { key: string; value: string }) => void;
};
const InputField = ({
  label,
  id,
  type,
  placeholder,
  className,
  value,
  onChange,
}: InputFieldProps) => (
  <div className={cn("flex flex-col w-full gap-2", className)}>
    <Label htmlFor={id}>{label}</Label>
    <Input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={(e) => onChange({ key: id, value: e.target.value })}
      value={value}
    />
  </div>
);

export { InputField };

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDetail } from "@/context/detail-context";
import { InputColorField } from "@/components/input/color-field";
import { InputSliderField } from "@/components/input/slider-field";

const Style = () => {
  const { styleConfig, updateStyleConfig } = useDetail();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stylize Your Signature</CardTitle>
        {/* <CardDescription>Grab the layout you after</CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <InputColorField
          label="Select Theme Color"
          id="theme-color"
          color={`${styleConfig.themeColor}`}
          setColor={(color) =>
            updateStyleConfig({ key: "themeColor", value: color })
          }
        />
        <InputColorField
          label="Select Text Color"
          id="text-color"
          color={`${styleConfig.textColor}`}
          setColor={(color) =>
            updateStyleConfig({ key: "textColor", value: color })
          }
        />
        <InputColorField
          label="Select Link Color"
          id="link-color"
          color={`${styleConfig.linkColor}`}
          setColor={(color) =>
            updateStyleConfig({ key: "linkColor", value: color })
          }
        />
        <InputSliderField
          label={"Font Size"}
          id={"fontSize"}
          fontSize={`${styleConfig.fontSize}`}
          setFontSize={updateStyleConfig}
        />
      </CardContent>
    </Card>
  );
};
export { Style };

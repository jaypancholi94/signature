import { useDetail } from "@/context/detail-context";
import { ImagePlaceholder } from "./utils/image-placeholder";
import { LayoutWrapper } from "./utils/layout-wrapper";
import { LinePlaceholder } from "./utils/line-placeholder";
import { SocialMediaPlaceholders } from "./utils/social-media-placeholder";
import { Link, Mail, Phone } from "lucide-react";
import { ContactPhone } from "../table/contact-phone";
import { ContactEmail } from "../table/contact-email";
import { ContactURL } from "../table/contact-url";
import { Divider } from "../table/divider";
import { Socials } from "../table/socials";

type LayoutOneProps = {
  useAsTemplate?: boolean;
};
const LayoutThumbnail = () => (
  <LayoutWrapper className="flex-row gap-3">
    <div className="flex flex-col items-center justify-center gap-3 w-1/3">
      <ImagePlaceholder />
      <div className="flex gap-2">
        {[...Array(3)].map((_, i) => (
          <SocialMediaPlaceholders key={i} />
        ))}
      </div>
    </div>
    <div className="flex flex-col items-start justify-center gap-2 w-2/3">
      {[...Array(2)].map((_, i) => (
        <LinePlaceholder className="w-3/5" key={i} />
      ))}
      <div className="w-full flex flex-col gap-2">
        {[...Array(3)].map((_, i) => (
          <LinePlaceholder className="w-full" key={i} />
        ))}
      </div>
    </div>
  </LayoutWrapper>
);

const LayoutOne = ({ useAsTemplate }: LayoutOneProps) => {
  const {
    details: {
      firstName,
      lastName,
      jobTitle,
      department,
      companyName,
      officePhoneNumber,
      mobilePhoneNumber,
      websiteURL,
      email,
    },
    socialMediaDetails: { linkedIn, twitter, facebook, github, instagram },
    styleConfig: { themeColor, textColor, linkColor, fontSize },
    loading,
  } = useDetail();

  if (useAsTemplate) return <LayoutThumbnail />;
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td rowSpan={10}>
              <Socials
                linkedIn={linkedIn}
                twitter={twitter}
                facebook={facebook}
                github={github}
                instagram={instagram}
                linkColor={linkColor}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: textColor,
                }}
              >{`${firstName} ${lastName}`}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <p style={{ fontSize: "14px", color: textColor }}>{jobTitle}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p style={{ fontSize: "14px", color: textColor }}>
                {department && department}
                {department && companyName && " | "}
                {companyName && companyName}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <Divider color={`${themeColor}`} />
            </td>
          </tr>
          <tr>
            <td>
              <ContactPhone
                mobilePhoneNumber={mobilePhoneNumber}
                officePhoneNumber={officePhoneNumber}
                themeColor={themeColor}
                textColor={textColor}
              />
            </td>
          </tr>
          <tr>
            <td>
              <ContactEmail
                email={email}
                themeColor={themeColor}
                textColor={textColor}
              />
            </td>
          </tr>
          <tr>
            <td>
              <ContactURL
                url={websiteURL}
                themeColor={themeColor}
                textColor={textColor}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export { LayoutOne };

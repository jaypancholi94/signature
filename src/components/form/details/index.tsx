"use client";

import { InputField } from "@/components/input/text-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDetail } from "@/context/detail-context";

const DetailForm = () => {
  const {
    details,
    socialMediaDetails,
    updateDetails,
    updateSocialMediaDetails,
  } = useDetail();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter Your Signature Details</CardTitle>
        {/* <CardDescription>Grab the layout you after</CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-3">
          <InputField
            label="First Name"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={details.firstName ?? ""}
            onChange={updateDetails}
          />
          <InputField
            label="Last Name"
            id="lastName"
            type="text"
            value={details.lastName ?? ""}
            placeholder="Last Name"
            onChange={updateDetails}
          />
        </div>
        <InputField
          label="Job Title"
          id="jobTitle"
          type="text"
          placeholder="Job Title"
          value={details.jobTitle ?? ""}
          onChange={updateDetails}
        />
        <InputField
          label="Department"
          id="department"
          type="text"
          placeholder="Department"
          value={details.department ?? ""}
          onChange={updateDetails}
        />
        <InputField
          label="Company Name"
          id="companyName"
          type="text"
          placeholder="Company Name"
          onChange={updateDetails}
          value={details.companyName ?? ""}
        />
        <InputField
          label="Office Phone Number"
          id="officePhoneNumber"
          type="tel"
          placeholder="Office Phone Number"
          onChange={updateDetails}
          value={details.officePhoneNumber ?? ""}
        />
        <InputField
          label="Mobile Phone Number"
          id="mobilePhoneNumber"
          type="tel"
          placeholder="mobile Phone Number"
          onChange={updateDetails}
          value={details.mobilePhoneNumber ?? ""}
        />
        <InputField
          label="Website URL"
          id="websiteURL"
          type="url"
          placeholder="Website URL"
          onChange={updateDetails}
          value={details.websiteURL ?? ""}
        />
        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={updateDetails}
          value={details.email ?? ""}
        />
        <h3 className="font-semibold leading-none tracking-tight text-primary-800 mt-6">
          Enter Your Social Link
        </h3>
        <InputField
          label="LinkedIn"
          id="linkedIn"
          type="url"
          placeholder="LinkedIn"
          onChange={updateSocialMediaDetails}
          value={socialMediaDetails.linkedIn ?? ""}
        />
        <InputField
          label="Facebook"
          id="facebook"
          type="url"
          placeholder="Facebook"
          onChange={updateSocialMediaDetails}
          value={socialMediaDetails.facebook ?? ""}
        />
        <InputField
          label="Twitter"
          id="twitter"
          type="url"
          placeholder="Twitter"
          onChange={updateSocialMediaDetails}
          value={socialMediaDetails.twitter ?? ""}
        />
        <InputField
          label="Github"
          id="github"
          type="url"
          placeholder="Github"
          onChange={updateSocialMediaDetails}
          value={socialMediaDetails.github ?? ""}
        />

        <InputField
          label="Instagram"
          id="instagram"
          type="url"
          placeholder="Instagram"
          onChange={updateSocialMediaDetails}
          value={socialMediaDetails.instagram ?? ""}
        />
      </CardContent>
    </Card>
  );
};
export { DetailForm };

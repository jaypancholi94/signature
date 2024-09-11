"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type detailsProps = {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  department?: string;
  companyName?: string;
  officePhoneNumber?: string;
  mobilePhoneNumber?: string;
  websiteURL?: string;
  email?: string;
};
type socialMediaDetailsProps = {
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
};
type layoutProps =
  | "layout-one"
  | "layout-two"
  | "layout-three"
  | "layout-four"
  | "layout-five"
  | "layout-six";

type DetailContextProps = {
  details: detailsProps;
  updateDetails: ({ key, value }: { key: string; value: string }) => void;
  socialMediaDetails: socialMediaDetailsProps;
  updateSocialMediaDetails: ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => void;
  layout?: layoutProps;
  updateLayout?: (layout: layoutProps) => void;
  styleConfig?: null;
};

const defaultDetails = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  department: "",
  companyName: "",
  officePhoneNumber: "",
  mobilePhoneNumber: "",
  websiteURL: "",
  email: "",
};
const defaultSocialMediaDetails = {
  linkedIn: "",
  twitter: "",
  facebook: "",
  github: "",
  instagram: "",
};
const DetailContext = createContext<DetailContextProps | null>(null);

export const DetailProvider = ({ children }: { children: ReactNode }) => {
  const [details, setDetails] = useState<detailsProps>(defaultDetails);
  const [socialMediaDetails, setSocialMediaDetails] =
    useState<socialMediaDetailsProps>(defaultSocialMediaDetails);
  const [layout, setLayout] = useState<layoutProps>("layout-one");

  const updateDetails = ({ key, value }: { key: string; value: string }) => {
    setDetails(
      (prev: detailsProps): detailsProps => ({ ...prev, [key]: value }),
    );
    console.log(details);
  };
  const updateSocialMediaDetails = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    setSocialMediaDetails(
      (prev: socialMediaDetailsProps): socialMediaDetailsProps => ({
        ...prev,
        [key]: value,
      }),
    );
  };
  const updateLayout = (layout: layoutProps) => {
    setLayout(layout);
  };
  return (
    <DetailContext.Provider
      value={{
        details,
        updateDetails,
        socialMediaDetails,
        updateSocialMediaDetails,
        layout,
        updateLayout,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error("useDetail must be used within a detailProvider");
  }
  return context;
};

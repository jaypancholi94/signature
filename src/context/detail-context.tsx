"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

const getLocalStorageDetails = () => {
  if (typeof Storage !== "undefined") {
    const localStorageDetails = localStorage.getItem("details");
    if (localStorageDetails) {
      return JSON.parse(localStorageDetails);
    }
  }
  return defaultDetails;
};
const getLocalStorageSocialMediaDetails = () => {
  if (typeof Storage !== "undefined") {
    const localStorageSocialMediaDetails =
      localStorage.getItem("socialMediaDetails");
    if (localStorageSocialMediaDetails) {
      return JSON.parse(localStorageSocialMediaDetails);
    }
  }
  return defaultSocialMediaDetails;
};
export const DetailProvider = ({ children }: { children: ReactNode }) => {
  const [details, setDetails] = useState<detailsProps>(
    getLocalStorageDetails(),
  );
  console.log("details", details);
  const [socialMediaDetails, setSocialMediaDetails] =
    useState<socialMediaDetailsProps>(getLocalStorageSocialMediaDetails());
  const [layout, setLayout] = useState<layoutProps>("layout-one");

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("details", JSON.stringify(details));
      localStorage.setItem(
        "socialMediaDetails",
        JSON.stringify(socialMediaDetails),
      );
    }
  }, [details, socialMediaDetails, layout]);

  const updateDetails = ({ key, value }: { key: string; value: string }) => {
    setDetails(
      (prev: detailsProps): detailsProps => ({ ...prev, [key]: value }),
    );
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

  return (
    <DetailContext.Provider
      value={{
        details,
        updateDetails,
        socialMediaDetails,
        updateSocialMediaDetails,
        layout,
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

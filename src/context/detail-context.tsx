"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { TABS } from "@/constants";

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

// type tabsProps = (typeof TABS)[number]["value"] | null;

type styleConfigProps = {
  themeColor?: string;
  textColor?: string;
  linkColor?: string;
  fontSize?: "small" | "medium" | "large";
};

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
  layout: layoutProps;
  updateLayout: (value: layoutProps) => void;
  styleConfig: styleConfigProps;
  loading: boolean;
  updateStyleConfig: ({ key, value }: { key: string; value: string }) => void;
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
const defaultStyleConfig = {
  themeColor: "#007bff",
  textColor: "#000000",
  linkColor: "#007bff",
  fontSize: "small",
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
const getLocalStorageLayout = () => {
  if (typeof Storage != "undefined") {
    const localStorageLayout = localStorage.getItem("layout");
    if (localStorageLayout) {
      return localStorageLayout as layoutProps;
    }
  }
  return "layout-one";
};

const getLocalStyleConfig = () => {
  if (typeof Storage != "undefined") {
    const localStorageStyleConfig = localStorage.getItem("styleConfig");
    if (localStorageStyleConfig) {
      return JSON.parse(localStorageStyleConfig);
    }
  }
  return defaultStyleConfig;
};

export const DetailProvider = ({ children }: { children: ReactNode }) => {
  const [details, setDetails] = useState<detailsProps>(
    getLocalStorageDetails(),
  );
  const [socialMediaDetails, setSocialMediaDetails] =
    useState<socialMediaDetailsProps>(getLocalStorageSocialMediaDetails());
  const [layout, setLayout] = useState<layoutProps>(getLocalStorageLayout());
  const [loading, setLoading] = useState(true);
  const [styleConfig, setStyleConfig] = useState<styleConfigProps>(
    getLocalStyleConfig(),
  );
  useEffect(() => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("details", JSON.stringify(details));
      localStorage.setItem(
        "socialMediaDetails",
        JSON.stringify(socialMediaDetails),
      );
      localStorage.setItem("layout", layout);
      localStorage.setItem("styleConfig", JSON.stringify(styleConfig));
      setLoading(false);
    }
  }, [details, socialMediaDetails, layout, styleConfig]);
  const updateDetails = ({ key, value }: { key: string; value: string }) => {
    setDetails(
      (prev: detailsProps): detailsProps => ({ ...prev, [key]: value }),
    );
  };
  const updateLayout = (value: layoutProps) => {
    setLayout(value);
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
  const updateStyleConfig = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    setStyleConfig(
      (prev: styleConfigProps): styleConfigProps => ({ ...prev, [key]: value }),
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
        updateLayout,
        loading,
        styleConfig,
        updateStyleConfig,
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

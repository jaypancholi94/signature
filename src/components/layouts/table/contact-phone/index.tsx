import { Phone } from "lucide-react";

type ContactPhoneProps = {
  officePhoneNumber?: string;
  mobilePhoneNumber?: string;
  themeColor?: string;
  textColor?: string;
};
const ContactPhone = ({
  officePhoneNumber,
  mobilePhoneNumber,
  themeColor,
  textColor,
}: ContactPhoneProps) => {
  if (!officePhoneNumber && !mobilePhoneNumber) {
    return null;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ paddingRight: "8px" }}>
            <Phone style={{ color: themeColor }} size={16} />
          </td>
          <td style={{ color: textColor }}>
            {officePhoneNumber && (
              <a
                href={`tel:${officePhoneNumber}`}
                style={{
                  color: textColor,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {officePhoneNumber}
              </a>
            )}
            {officePhoneNumber && mobilePhoneNumber && " | "}
            {mobilePhoneNumber && (
              <a
                href={`tel:${mobilePhoneNumber}`}
                style={{
                  color: textColor,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {mobilePhoneNumber}
              </a>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { ContactPhone };

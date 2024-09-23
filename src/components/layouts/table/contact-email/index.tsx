import { Mail } from "lucide-react";

type ContactEmailProps = {
  email?: string;
  themeColor?: string;
  textColor?: string;
};
const ContactEmail = ({ email, themeColor, textColor }: ContactEmailProps) => {
  if (!email) {
    return null;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ paddingRight: "8px" }}>
            <Mail style={{ color: themeColor }} size={16} />
          </td>
          <td>
            <a
              href={`mailto:${email}`}
              style={{
                color: textColor,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              {email}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { ContactEmail };

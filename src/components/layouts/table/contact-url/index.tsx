import { Link } from "lucide-react";

type ContactURLProps = {
  url?: string;
  themeColor?: string;
  textColor?: string;
};
const ContactURL = ({ url, themeColor, textColor }: ContactURLProps) => {
  if (!url) {
    return null;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ paddingRight: "8px" }}>
            <Link style={{ color: themeColor }} size={16} />
          </td>
          <td>
            <a
              href={`${url}`}
              style={{
                color: textColor,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              {url}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { ContactURL };

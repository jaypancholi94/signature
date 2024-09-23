import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

type SocialsProps = {
  linkedIn?: string;
  twitter?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkColor?: string;
};
const Socials = ({
  linkedIn,
  twitter,
  facebook,
  github,
  instagram,
  linkColor,
}: SocialsProps) => {
  const iconStyle = {
    height: "24px",
    width: "24px",
    backgroundColor: linkColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <table style={{ marginRight: "10px" }}>
      <tr>
        {linkedIn && (
          <td>
            <div style={iconStyle}>
              <a href={linkedIn} target="_blank">
                <Linkedin color="white" size={16} />
              </a>
            </div>
          </td>
        )}
        {twitter && (
          <td>
            <div style={iconStyle}>
              <a href={twitter} target="_blank">
                <Twitter color="white" size={16} />
              </a>
            </div>
          </td>
        )}
        {facebook && (
          <td>
            <div style={iconStyle}>
              <a href={facebook} target="_blank">
                <Facebook color="white" size={16} />
              </a>
            </div>
          </td>
        )}
        {github && (
          <td>
            <div style={iconStyle}>
              <a href={github} target="_blank">
                <Github color="white" size={16} />
              </a>
            </div>
          </td>
        )}
        {instagram && (
          <td>
            <div style={iconStyle}>
              <a href={instagram} target="_blank">
                <Instagram color="white" size={16} />
              </a>
            </div>
          </td>
        )}
      </tr>
    </table>
  );
};
export { Socials };

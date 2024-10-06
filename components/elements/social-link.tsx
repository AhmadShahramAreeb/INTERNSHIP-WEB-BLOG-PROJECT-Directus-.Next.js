import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  X,
  XIcon,
} from "lucide-react";
import Link from "next/link";

const SocialLink = ({
  platform,
  link,
  isShareURL = false,
}: {
  platform: string;
  link: string;
  isShareURL?: boolean;
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "x":
        return <XIcon size="18" />;
      case "instagram":
        return <Instagram size="18" />;
      case "github":
        return <Github size="18" />;
      case "linkedin":
        return <Linkedin size="18" />;
      case "facebook":
        return <Facebook size="18" />;
      default:
        return null;
    }
  };

  return (
    <Link href={link}>
      <div
        className={`${
          isShareURL
            ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-800 hover:bg-neutral-600 hover:text-neutral-100 duration-100 "
            : ""
        }`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;

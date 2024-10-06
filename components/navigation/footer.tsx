import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold ">{siteConfig.siteName}</h2>
          <p className="mx-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>

        {/* Social and Currently At */}
        <div className="mt-6 gap-4 flex flex-wrap justify-between">
          <div>
            <div className="font-medium ">#exploretheworld</div>
            <div className="flex items-center gap-3 mt-2 text-black">
              <SocialLink platform="x" link={siteConfig.socialLinks.twitter} />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="facebook"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="px-3 py-2 bg-white rounded-md shadow-md flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="py-3 border-t flex items-center gap-4 flex-wrap justify-between mt-16">
          <div className=" text-neutral-400 text-sm">
            All Rights Reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made With Pleasure by{" "}
            <Link
              className="underline underline-offset-4"
              href="https://www.linkedin.com/in/ahmad-shahram-areeb-2b373613b/"
            >
              @AhmadShahramAreeb
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;

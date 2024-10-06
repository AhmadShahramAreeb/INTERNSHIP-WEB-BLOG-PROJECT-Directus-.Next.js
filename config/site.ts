export interface SiteConfig{
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        instagram: string;
        github: string;
        linkedin: string;
    };
}

const siteConfig : SiteConfig = {
    siteName : "Explorer",
    description : 'A minimal and lovely travel blog which shares experiences and cities around the world!',
    currentlyAt: "Istanbul",
    socialLinks:{
        twitter: "https://twitter.com/ahmadshahramareeb",
        instagram: "https://instagram.com/ahmadshahramareeb",
        github: "https://github.com/ahmadshahramareeb",
        linkedin: "https://linkedin.com/in/ahmadshahramareeb"
    }
};


export default siteConfig;
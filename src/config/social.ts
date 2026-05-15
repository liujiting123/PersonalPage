import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/liujiting123",
        linkTitle: `Follow Jiting Liu on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:liujiting616@gmail.com",
        linkTitle: `Send an email to Jiting Liu`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=GVENiysAAAAJ",
        linkTitle: `Jiting Liu on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/",
        linkTitle: `Jiting Liu on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        linkTitle: `Jiting Liu on LinkedIn`,
        isActive: false,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};

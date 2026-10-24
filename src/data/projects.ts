import centsibleScreenshot from "@/assets/images/centsible.png";
import sunflowerScreenshot from "@/assets/images/sunflower.png";
import ytdlpScreenshot from "@/assets/images/yt-dlp-web.png";
import { Technologies } from "./technologies";
import { repository } from "./repository";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: number;
  name: string;
  tagline: string;
  description: string;
  stack: Technologies[];
  links: ProjectLink[];
  period: string;
  screenshot?: string;
}

const liquid: Project = {
  id: "liquid",
  index: 1,
  name: "liquid",
  tagline: "Liquidity, self-hosted finance manager (rewrite of centsible)",
  description:
    "Personal self-hosted tool for managing your liquidity. Liquidity tracking without tracking. Hold the liquor in your own hands. (work in progress)",
  stack: [
    Technologies.VUE,
    Technologies.KOTLIN,
    Technologies.DOCKER,
    Technologies.SELF_HOSTED,
    Technologies.TAILWIND,
  ],
  period: "2026",
  links: [{ label: "source", href: `${repository.baseUrl}/liquid` }],
};

const centsible: Project = {
  id: "centsible",
  index: 2,
  name: "centsible",
  tagline: "Self-hosted finance manager",
  description:
    "Self-hosted tool for managing your finances. Keep track of your cents. Budgeting without handing your data to anyone.",
  stack: [Technologies.NUXT, Technologies.KOTLIN, Technologies.DOCKER, Technologies.SELF_HOSTED],
  period: "2026",
  links: [
    { label: "source", href: `${repository.baseUrl}/centsible` },
    { label: "live", href: "https://centsible.thierry.beer" },
  ],
  screenshot: centsibleScreenshot,
};

const ytDlpWeb: Project = {
  id: "yt-dlp-web",
  index: 3,
  name: "yt-dlp-web",
  tagline: "Web interface for yt-dlp",
  description:
    "A browser interface around the yt-dlp command-line tool. Paste a link, let the magic happen.",
  stack: [Technologies.VUE, Technologies.GO, Technologies.DOCKER],
  period: "2026",
  links: [{ label: "source", href: `${repository.baseUrl}/yt-dlp-web` }],
  screenshot: ytdlpScreenshot,
};

const protonAuthenticatorToBitwarden: Project = {
  id: "proton-authenticator-to-bitwarden",
  index: 4,
  name: "proton-auth to bitwarden",
  tagline: "Authenticator backup converter",
  description:
    "Converts a Proton Authenticator backup into a Bitwarden-compatible import file. Built for personal use, shared for anyone migrating.",
  stack: [Technologies.JS],
  period: "2025",
  links: [
    {
      label: "source",
      href: `${repository.baseUrl}/proton-authenticator-to-bitwarden`,
    },
  ],
};

const playgrounds: Project = {
  id: "playgrounds",
  index: 5,
  name: "playgrounds",
  tagline: "Small pages, made to smile",
  description:
    "A collection of small fun pages. Made to make people smile, when coffee runs out. (continually expanded)",
  stack: [Technologies.HTML, Technologies.CSS, Technologies.JS, Technologies.DOCKER],
  period: "2025",
  links: [
    { label: "source", href: `${repository.baseUrl}/playgrounds` },
    { label: "sunflower", href: "https://sunflower.thierry.beer" },
    { label: "flower", href: "https://flower.thierry.beer" },
    { label: "easter", href: "https://easter.thierry.beer" },
    { label: "birthday", href: "https://birthday.thierry.beer" },
  ],
  screenshot: sunflowerScreenshot,
};

export const projects: Project[] = [
  liquid,
  centsible,
  ytDlpWeb,
  playgrounds,
  protonAuthenticatorToBitwarden,
];

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface Site {
  domain: string;
}

export const site: Site = {
  domain: "thierry.beer",
};

const github: SocialLink = {
  label: "github",
  handle: "@JegenThierry",
  href: "https://github.com/JegenThierry",
};
const instagram: SocialLink = {
  label: "instagram",
  handle: "@thierryjegen",
  href: "https://instagram.com/thierryjegen",
};

const kofi: SocialLink = {
  label: "ko-fi",
  handle: "buy me a ☕",
  href: "https://ko-fi.com/thierryjegen",
};

const email: SocialLink = {
  label: "contact me",
  handle: "jegenthierry@protonmail.com",
  href: "mailto:jegenthierry@protonmail.com",
};

export const socials: SocialLink[] = [github, instagram, kofi, email];

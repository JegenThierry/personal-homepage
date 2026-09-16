export interface SocialLink {
  label: string
  handle: string
  href: string
}

export const site = {
  domain: 'thierry.beer',
}

export const socials = {
  codeberg: {
    label: 'codeberg',
    handle: '@thierryjegen',
    href: 'https://codeberg.org/thierryjegen',
  },
  instagram: {
    label: 'instagram',
    handle: '@thierryjegen',
    href: 'https://instagram.com/thierryjegen',
  },
  kofi: { label: 'ko-fi', handle: 'buy me a ☕', href: 'https://ko-fi.com/thierryjegen' },
  email: {
    label: 'e-mail',
    handle: 'jegenthierry@protonmail.com',
    href: 'mailto:jegenthierry@protonmail.com',
  },
}

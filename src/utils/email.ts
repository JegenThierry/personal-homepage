export interface MailAddress {
  user: string
  domain: string
}

export function buildMailto(parts: MailAddress, subject?: string): string {
  const address = `${parts.user}${String.fromCharCode(64)}${parts.domain}`
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''

  return `mailto:${address}${query}`
}

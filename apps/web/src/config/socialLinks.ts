export interface SocialLink {
  name: string
  url: string
  icon: string
  description?: string
}

export const getSocialLinks = (t: any): SocialLink[] => [
  {
    name: t('social.links.github.name'),
    url: 'https://github.com/nikh9l',
    icon: 'github',
    description: t('social.links.github.description')
  },
  {
    name: t('social.links.linkedin.name'),
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
    description: t('social.links.linkedin.description')
  },
  {
    name: t('social.links.twitter.name'),
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
    description: t('social.links.twitter.description')
  },
  {
    name: t('social.links.mastodon.name'),
    url: 'https://mastodon.social/@yourhandle',
    icon: 'mastodon',
    description: t('social.links.mastodon.description')
  },
  {
    name: t('social.links.bluesky.name'),
    url: 'https://bsky.app/profile/yourhandle.bsky.social',
    icon: 'bluesky',
    description: t('social.links.bluesky.description')
  },
  {
    name: t('social.links.codepen.name'),
    url: 'https://codepen.io/yourusername',
    icon: 'codepen',
    description: t('social.links.codepen.description')
  },
  {
    name: t('social.links.buymeacoffee.name'),
    url: 'https://buymeacoffee.com/yourusername',
    icon: 'buymeacoffee',
    description: t('social.links.buymeacoffee.description')
  }
]

// Helper function to get social link by icon name
export const getSocialLink = (iconName: string, t: any): SocialLink | undefined => {
  return getSocialLinks(t).find((link) => link.icon === iconName)
}

// Helper function to get social link by platform name
export const getSocialLinkByName = (name: string, t: any): SocialLink | undefined => {
  return getSocialLinks(t).find((link) => link.name.toLowerCase() === name.toLowerCase())
}

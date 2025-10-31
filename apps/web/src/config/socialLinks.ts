export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nikh9l',
    icon: 'github',
    description: 'Check out my code and projects'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
    description: 'Follow me for updates'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: 'instagram',
    description: 'See my photos and stories'
  },
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: 'email',
    description: 'Send me a message'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/yourinvite',
    icon: 'discord',
    description: 'Join our community'
  },
  {
    name: 'WeChat',
    url: '#',
    icon: 'wechat',
    description: 'Scan my QR code'
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/yourhandle.bsky.social',
    icon: 'bluesky',
    description: 'Connect on Bluesky'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
    description: 'Professional network'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourprofile',
    icon: 'facebook',
    description: 'Connect on Facebook'
  }
];

// Helper function to get social link by icon name
export const getSocialLink = (iconName: string): SocialLink | undefined => {
  return socialLinks.find(link => link.icon === iconName);
};

// Helper function to get social link by platform name
export const getSocialLinkByName = (name: string): SocialLink | undefined => {
  return socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
};


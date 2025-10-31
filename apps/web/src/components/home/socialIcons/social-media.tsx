'use client'

import { useTranslations } from 'next-intl'

import { CustomIcon } from './custom-icons'

export default function SocialLinks() {
  const t = useTranslations()

  // Create social links array with translated names and descriptions
  const socialLinks = [
    {
      url: 'https://github.com/nikh9l',
      icon: 'github' as const,
      name: t('social.links.github.name'),
      description: t('social.links.github.description')
    },
    {
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'linkedin' as const,
      name: t('social.links.linkedin.name'),
      description: t('social.links.linkedin.description')
    },
    {
      url: 'https://twitter.com/yourusername',
      icon: 'twitter' as const,
      name: t('social.links.twitter.name'),
      description: t('social.links.twitter.description')
    },
    {
      url: 'https://mastodon.social/@yourhandle',
      icon: 'mastodon' as const,
      name: t('social.links.mastodon.name'),
      description: t('social.links.mastodon.description')
    },
    {
      url: 'https://bsky.app/profile/yourhandle.bsky.social',
      icon: 'bluesky' as const,
      name: t('social.links.bluesky.name'),
      description: t('social.links.bluesky.description')
    },
    {
      url: 'https://codepen.io/yourusername',
      icon: 'codepen' as const,
      name: t('social.links.codepen.name'),
      description: t('social.links.codepen.description')
    },
    {
      url: 'https://buymeacoffee.com/yourusername',
      icon: 'buymeacoffee' as const,
      name: t('social.links.buymeacoffee.name'),
      description: t('social.links.buymeacoffee.description')
    }
  ]

  return (
    <div className='flex items-center gap-2'>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center rounded-lg p-2 text-foreground/70 transition-all hover:bg-accent hover:text-foreground'
          title={link.description}
          aria-label={link.name}
        >
          <CustomIcon name={link.icon} size={20} />
        </a>
      ))}
    </div>
  )
}

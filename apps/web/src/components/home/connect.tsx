import { Link } from '@repo/ui/components/link'
import { LinkIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { CustomIcon } from '@/components/home/socialIcons/custom-icons'

const Connect = () => {
  const t = useTranslations()

  // Create social links array with translated names
  const socialLinks = [
    {
      url: 'https://github.com/nikh9l',
      icon: 'github' as const,
      name: t('social.links.github.name')
    },
    {
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'linkedin' as const,
      name: t('social.links.linkedin.name')
    },
    {
      url: 'https://twitter.com/yourusername',
      icon: 'twitter' as const,
      name: t('social.links.twitter.name')
    },
    {
      url: 'https://mastodon.social/@yourhandle',
      icon: 'mastodon' as const,
      name: t('social.links.mastodon.name')
    },
    {
      url: 'https://bsky.app/profile/yourhandle.bsky.social',
      icon: 'bluesky' as const,
      name: t('social.links.bluesky.name')
    },
    {
      url: 'https://codepen.io/yourusername',
      icon: 'codepen' as const,
      name: t('social.links.codepen.name')
    }
    // Buy Me a Coffee is filtered out as requested
  ]

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <LinkIcon className='size-4.5' />
        <h2 className='text-sm'>{t('homepage.about-me.connect')}</h2>
      </div>
      <div className='grid grid-cols-2 gap-4 px-2'>
        {socialLinks.map((link) => {
          const { url, name, icon } = link

          return (
            <Link
              key={url}
              href={url}
              className='flex w-fit items-center gap-3 text-muted-foreground transition-colors hover:text-foreground [&>svg]:size-4.5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CustomIcon name={icon} size={18} />
              <h3 className='text-sm'>{name}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Connect

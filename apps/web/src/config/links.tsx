import type { useTranslations } from 'next-intl'

import { BookOpenIcon, ClipboardList, FlameIcon, PencilIcon, UserCircleIcon } from 'lucide-react'

// Seems that next-intl doesn't expose the type for translation key,
// so we extract it here
type TranslationKey = Parameters<ReturnType<typeof useTranslations<never>>>[0]

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  key: string
  labelKey: TranslationKey
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blog',
    key: 'blog',
    // t('common.labels.blog')
    labelKey: 'common.labels.blog'
  },
  {
    icon: <BookOpenIcon className='size-3.5' />,
    href: '/publications',
    key: 'publications',
    // t('common.labels.publications')
    labelKey: 'common.labels.publications'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    key: 'projects',
    // t('common.labels.projects')
    labelKey: 'common.labels.projects'
  },
  {
    icon: <ClipboardList className='size-3.5' />,
    href: '/resume',
    key: 'resume',
    // t('common.labels.resume')
    labelKey: 'common.labels.resume'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    key: 'about',
    // t('common.labels.about')
    labelKey: 'common.labels.about'
  }
]

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    labelKey: TranslationKey
  }>
}>

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      // t('common.labels.home')
      { href: '/', labelKey: 'common.labels.home' },
      // t('common.labels.about')
      { href: '/about', labelKey: 'common.labels.about' },
      // t('common.labels.lifeevents')
      { href: '/life-events', labelKey: 'common.labels.lifeevents' },
      // t('common.labels.bucketlist')
      { href: '/bucketlist', labelKey: 'common.labels.bucketlist' }
    ]
  },
  {
    id: 2,
    links: [
      // t('common.labels.uses')
      { href: '/uses', labelKey: 'common.labels.uses' },
      // t('common.labels.guestbook')
      { href: '/guestbook', labelKey: 'common.labels.guestbook' },
      // t('common.labels.links')
      { href: 'https://nelsonlai.link', labelKey: 'common.labels.links' },
      // t('common.labels.changelog')
      { href: '/changelog', labelKey: 'common.labels.changelog' }
    ]
  },
  {
    id: 3,
    links: [
      // t('common.labels.support')
      { href: '/connections', labelKey: 'common.labels.connections' },
      // t('common.labels.dashboard')
      { href: '/dashboard', labelKey: 'common.labels.dashboard' },
      // t('common.labels.terms-of-service')
      { href: '/terms', labelKey: 'common.labels.terms-of-service' },
      // t('common.labels.privacy-policy')
      { href: '/privacy', labelKey: 'common.labels.privacy-policy' }
    ]
  }
]

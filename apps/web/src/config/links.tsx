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
    labelKey: 'common.labels.blog'
  },
  {
    icon: <BookOpenIcon className='size-3.5' />,
    href: '/publications',
    key: 'publications',
    labelKey: 'common.labels.publications'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    key: 'projects',
    labelKey: 'common.labels.projects'
  },
  {
    icon: <ClipboardList className='size-3.5' />,
    href: '/resume',
    key: 'resume',
    labelKey: 'common.labels.resume'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    key: 'about',
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
      { href: '/', labelKey: 'common.labels.home' },
      { href: '/about', labelKey: 'common.labels.about' },
      { href: '/life-events', labelKey: 'common.labels.lifeevents' },
      { href: '/bucketlist', labelKey: 'common.labels.bucketlist' }
    ]
  },
  {
    id: 2,
    links: [
      { href: '/uses', labelKey: 'common.labels.uses' },
      { href: '/guestbook', labelKey: 'common.labels.guestbook' },
      { href: 'https://nelsonlai.link', labelKey: 'common.labels.links' },
      { href: '/changelog', labelKey: 'common.labels.changelog' }
    ]
  },
  {
    id: 3,
    links: [
      { href: '/connections', labelKey: 'common.labels.connections' },
      { href: '/dashboard', labelKey: 'common.labels.dashboard' },
      { href: '/terms', labelKey: 'common.labels.terms-of-service' },
      { href: '/privacy', labelKey: 'common.labels.privacy-policy' }
    ]
  }
]

// Add this missing export
type AccountSidebarLinks = Array<{
  href: string
  labelKey: TranslationKey
}>

export const ACCOUNT_SIDEBAR_LINKS: AccountSidebarLinks = [
  {
    href: '/account',
    labelKey: 'common.labels.account'
  },
  {
    href: '/account/settings',
    labelKey: 'common.labels.settings'
  }
]

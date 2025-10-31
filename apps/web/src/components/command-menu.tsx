'use client'

import { useRouter } from '@repo/i18n/routing'
import { Button } from '@repo/ui/components/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@repo/ui/components/command'
import { CodeIcon, CommandIcon, LinkIcon, LogInIcon, LogOutIcon, UserCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Fragment, useCallback, useEffect, useState } from 'react'

import { CustomIcon } from '@/components/home/socialIcons/custom-icons'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { useSignOut } from '@/hooks/use-sign-out'
import { useSession } from '@/lib/auth-client'
import { useDialogsStore } from '@/stores/dialogs.store'

type CommandAction = {
  title: string
  icon: React.ReactNode
  onSelect: () => void | Promise<void>
}

type CommandGroup = {
  name: string
  actions: CommandAction[]
}

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copy] = useCopyToClipboard()
  const { data: session } = useSession()
  const t = useTranslations()
  const setIsSignInOpen = useDialogsStore((state) => state.setIsSignInOpen)
  const router = useRouter()
  const signOut = useSignOut({ redirectTo: '/' })

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen(true)
  }

  const toggleMenu = () => {
    setIsOpen((value) => !value)
  }

  const openExternalLink = (url: string) => {
    closeMenu()
    window.open(url, '_blank', 'noopener')
  }

  const copyCurrentUrl = async () => {
    closeMenu()
    await copy({ text: globalThis.location.href })
  }

  const handleAccountNavigate = () => {
    closeMenu()
    router.push('/account')
  }

  const handleSignIn = () => {
    closeMenu()
    setIsSignInOpen(true)
  }

  const handleSignOut = async () => {
    closeMenu()

    await signOut()
  }

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      toggleMenu()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const accountActions: CommandAction[] = session
    ? [
        {
          title: t('common.labels.account'),
          icon: <UserCircleIcon className='size-4' />,
          onSelect: handleAccountNavigate
        },
        {
          title: t('common.sign-out'),
          icon: <LogOutIcon className='size-4' />,
          onSelect: handleSignOut
        }
      ]
    : [
        {
          title: t('common.sign-in'),
          icon: <LogInIcon className='size-4' />,
          onSelect: handleSignIn
        }
      ]

  const generalActions: CommandAction[] = [
    {
      title: t('command-menu.actions.copy-link'),
      icon: <LinkIcon className='size-4' />,
      onSelect: copyCurrentUrl
    },
    {
      title: t('command-menu.actions.source-code'),
      icon: <CodeIcon className='size-4' />,
      onSelect: () => {
        openExternalLink('https://github.com/nelsonlaidev/nelsonlai.dev')
      }
    }
  ]

  // Create social actions using translated names from the social.links section
  const socialActions: CommandAction[] = [
    {
      title: t('social.links.github.name'),
      icon: <CustomIcon name='github' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://github.com/nikh9l')
      }
    },
    {
      title: t('social.links.linkedin.name'),
      icon: <CustomIcon name='linkedin' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://linkedin.com/in/yourprofile')
      }
    },
    {
      title: t('social.links.twitter.name'),
      icon: <CustomIcon name='twitter' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://twitter.com/yourusername')
      }
    },
    {
      title: t('social.links.mastodon.name'),
      icon: <CustomIcon name='mastodon' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://mastodon.social/@yourhandle')
      }
    },
    {
      title: t('social.links.bluesky.name'),
      icon: <CustomIcon name='bluesky' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://bsky.app/profile/yourhandle.bsky.social')
      }
    },
    {
      title: t('social.links.codepen.name'),
      icon: <CustomIcon name='codepen' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://codepen.io/yourusername')
      }
    },
    {
      title: t('social.links.buymeacoffee.name'),
      icon: <CustomIcon name='buymeacoffee' size={16} className='size-4 shrink-0' />,
      onSelect: () => {
        openExternalLink('https://buymeacoffee.com/yourusername')
      }
    }
  ]

  const groups: CommandGroup[] = [
    { name: t('common.labels.account'), actions: accountActions },
    { name: t('common.labels.general'), actions: generalActions },
    { name: t('command-menu.groups.social'), actions: socialActions }
  ]

  return (
    <>
      <Button
        variant='ghost'
        className='size-9 p-0'
        onClick={openMenu}
        aria-label={t('command-menu.open-menu')}
        data-testid='command-menu-button'
      >
        <CommandIcon className='size-4' />
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder={t('command-menu.placeholder')} />
        <CommandList>
          <CommandEmpty>{t('command-menu.no-results')}</CommandEmpty>
          {groups.map((group, index) => (
            <Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    <span>{action.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              {index === groups.length - 1 ? null : <CommandSeparator />}
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu

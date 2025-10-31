import { Link } from '@repo/ui/components/link'
import { LinkIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { socialLinks } from '@/config/socialLinks'
import { CustomIcon } from '@/components/home/socialLinks/custom-icons'

const Connect = () => {
  const t = useTranslations()

  return (
    <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <LinkIcon className='size-4.5' />
        <h2 className='text-sm'>{t('homepage.about-me.connect')}</h2>
      </div>
      <div className='flex flex-col gap-4 px-2'>
        {socialLinks.map((link) => {
          const { url, name, icon } = link

          return (
            <Link
              key={url}
              href={url}
              className='flex w-fit items-center gap-3 text-muted-foreground transition-colors hover:text-foreground [&>svg]:size-4.5'
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomIcon name={icon} size={18} />
              <h3>{name}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Connect

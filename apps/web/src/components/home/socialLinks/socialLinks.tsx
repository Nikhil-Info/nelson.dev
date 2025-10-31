'use client'

import { CustomIcon } from '../socialLinks/custom-icons'
import { socialLinks } from '@/config/socialLinks'

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg p-2 text-foreground/70 transition-all hover:bg-accent hover:text-foreground"
          title={link.description}
          aria-label={link.name}
        >
          <CustomIcon name={link.icon} size={20} />
        </a>
      ))}
    </div>
  )
}

'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { PiButterflyDuotone } from 'react-icons/pi'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiBuymeacoffee, SiCodepen, SiMastodon } from 'react-icons/si'

interface CustomIconProps {
  name: string
  size?: number
  className?: string
}

export function CustomIcon({ name, size = 24, className = '' }: CustomIconProps) {
  // Use consistent icon rendering
  const iconProps = {
    size,
    className: `${className} inline-block`
  }

  switch (name) {
    case 'github': {
      return <FaGithub {...iconProps} />
    }
    case 'x':
    case 'twitter': {
      return <RiTwitterXFill {...iconProps} />
    }
    case 'linkedin': {
      return <FaLinkedin {...iconProps} />
    }
    case 'mastodon': {
      return <SiMastodon {...iconProps} />
    }
    case 'buymeacoffee':
    case 'coffee': {
      return <SiBuymeacoffee {...iconProps} />
    }
    case 'codepen': {
      return <SiCodepen {...iconProps} />
    }
    case 'bsky':
    case 'bluesky': {
      return <PiButterflyDuotone {...iconProps} />
    }
    default: {
      return null
    }
  }
}

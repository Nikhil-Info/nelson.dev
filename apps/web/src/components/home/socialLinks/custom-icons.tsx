'use client'

import { PiButterfly } from "react-icons/pi";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaDiscord,
  FaWeixin,
  FaLinkedin,
  FaFacebook
} from "react-icons/fa";

export function CustomIcon({ name, size = 24 }: { name: string; size?: number }) {
  switch (name) {
    // Social media icons
    case 'github':
      return <FaGithub size={size} />
    case 'x':
    case 'twitter':
      return <FaTwitter size={size} />
    case 'instagram':
      return <FaInstagram size={size} />
    case 'email':
    case 'mail':
      return <FaEnvelope size={size} />
    case 'discord':
      return <FaDiscord size={size} />
    case 'wechat':
      return <FaWeixin size={size} />
    case 'bsky':
    case 'bluesky':
      return <PiButterfly size={size} />
    case 'linkedin':
      return <FaLinkedin size={size} />
    case 'facebook':
      return <FaFacebook size={size} />
    case 'butterfly':
      return <PiButterfly size={size} />

    default:
      return null
  }
}

import {
  faBluesky,
  faGithub,
  faInstagram,
  faLinkedinIn,
  type IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const socialBarData: {
  name: string
  link: string
  icon: IconDefinition
}[] = [
  {
    name: 'Github',
    link: 'https://github.com/Olwtelet',
    icon: faGithub
  },
  {
    name: 'Email',
    link: 'mailto:olwtelet@outlookcom',
    icon: faEnvelope
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/isaac-rodrigues-barros-a8a777368/',
    icon: faLinkedinIn
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/olwtelets',
    icon: faInstagram
  },
  {
    name: 'Bluesky',
    link: 'https://bsky.app/profile/Olwtelet.dev/',
    icon: faBluesky
  }
]

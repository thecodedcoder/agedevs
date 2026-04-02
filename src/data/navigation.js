import {
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'
import {
  BiCodeAlt,
  BiBriefcase,
  BiFolder,
  BiGlobe,
  BiBook,
  BiMessageSquareDetail,
} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

export const navItems = [
  { id: 'hero', icon: AiOutlineHome, label: 'Home' },
  { id: 'about', icon: AiOutlineUser, label: 'About' },
  { id: 'skills', icon: BiCodeAlt, label: 'Skills' },
  { id: 'experience', icon: BiBriefcase, label: 'Experience' },
  { id: 'portfolio', icon: BiFolder, label: 'Portfolio' },
  { id: 'ecosystem', icon: BiGlobe, label: 'Ecosystems' },
  { id: 'services', icon: RiServiceLine, label: 'Services' },
  { id: 'education', icon: BiBook, label: 'Education' },
  { id: 'contact', icon: BiMessageSquareDetail, label: 'Contact' },
]

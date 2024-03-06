import { Search } from 'lucide-react'
import { Link } from '../router'
import UserProfilePopover from './UserProfilePopover'
import LanguageModal from './modals/LanguageModal'
import Logo from './Logo'

interface HeaderProps {
  className?: string
  hasSearch?: boolean
}

export default function Header({ className, hasSearch = false }: HeaderProps) {
  return (
    <header className={`flex h-20 items-center justify-between ${className}`}>
      <Link to="/">
        <Logo />
      </Link>
      {hasSearch && (
        <div className="flex rounded-full border  px-2 py-3 shadow-xl">
          <button className="border-r px-4"> Anywhere </button>
          <button className="border-r px-4"> Any week </button>
          <button className="px-4"> Any week </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            <Search className="w-5" />
          </button>
        </div>
      )}

      <div className="flex gap-3">
        <Link to="/" className="rounded-full p-3 hover:bg-gray-100">
          Airbnb your home
        </Link>
        <div className="rounded-full p-3 hover:bg-gray-100">
          <LanguageModal />
        </div>
        <UserProfilePopover />
      </div>
    </header>
  )
}

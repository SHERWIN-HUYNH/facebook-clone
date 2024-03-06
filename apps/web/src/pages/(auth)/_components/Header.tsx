import { Link, useLocation } from 'react-router-dom'

import FaceBookIcon from '@/assets/images/facebook-logo.png'
import { Input } from '@/components/ui/input'

import clsx from 'clsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { ICON_FEATURES, ICON_MESSAGE } from '@/shared/Home'
import {
  CircleFadingPlus,
  HelpCircle,
  Lightbulb,
  LogOut,
  Moon,
  MoveUpRight,
  Search,
  Settings,
  UserRoundSearch,
  UsersRound
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import UserProfile from './UserProfile'

const FEATURES = [
  {
    icon: <CircleFadingPlus />,
    content: 'Meta Site Business',
    arrow: <MoveUpRight />
  },
  {
    icon: <Settings />,
    content: 'Cài đặt và quyền riêng tư',
    arrow: <MoveUpRight />
  },
  {
    icon: <HelpCircle />,
    content: 'Trợ giúp và hỗ trợ',
    arrow: <MoveUpRight />
  },
  {
    icon: <Moon />,
    content: 'Màn hình trợ năng'
  },
  {
    icon: <Lightbulb />,
    content: 'Đóng góp ý kiến'
  },
 
]

export default function Header() {
  const currentPath = useLocation().pathname

  return (
    <div className=" flex flex-row justify-between border px-4 py-4 ">
      {/* SEARCH */}
      <div>
        <div className=" flex max-h-10 space-x-3">
          <Link to={'/'}>
            <img className=" w-12" src={`${FaceBookIcon}`} alt="" />
          </Link>
          <div className="flex min-w-60 items-center justify-center space-x-1 rounded-full border bg-secondary-foreground p-2 px-2">
            <Search />
            {/* <input type="text" placeholder="Search..." className=" bg-transparent border-none" /> */}
            <Input placeholder="Search..." className=" border-none bg-transparent " />
          </div>
        </div>
      </div>
      {/* FEATURES */}
      <div className="">
        <ul className=" flex flex-row">
          {ICON_FEATURES.map(item => (
            <Link to={`/admin${item.path}`} key={item.title}>
              <li
                className={clsx('flex cursor-pointer gap-4 rounded-sm px-6 py-2 hover:text-primary', {
                  'bg-primary': currentPath === `/admin${item.path}`,
                  'text-white': currentPath === `/admin${item.path}`
                })}
              >
                {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* MESSAGE */}

      <ul className=" flex flex-row space-x-3">
        <li className="relative  flex h-10 w-10 cursor-pointer items-center justify-center gap-4 rounded-full bg-secondary-foreground ">
          <DropdownMenu>
            <DropdownMenuTrigger className=" rounded-full">{ICON_MESSAGE[0].icon}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-90 hover:bg-white">
              <DropdownMenuLabel>FEATURES</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p>HELLO</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="relative  flex h-10 w-10 cursor-pointer items-center justify-center gap-4 rounded-full bg-secondary-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger className=" rounded-full">{ICON_MESSAGE[1].icon}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-90 hover:bg-white">
              <DropdownMenuLabel>THÔNG BÁO</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p>HELLO</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="relative  flex h-10 w-10 cursor-pointer items-center justify-center gap-4 rounded-full bg-secondary-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger className=" rounded-full">{ICON_MESSAGE[2].icon}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-90 hover:bg-white">
              <DropdownMenuLabel>MESSENGER</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p>HELLO</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-secondary-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <UsersRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-96 p-4 hover:bg-white ">
              <div className="flex flex-col items-start justify-start space-y-2 rounded-lg p-4 font-semibold text-black shadow-lg shadow-gray-300 ">
                <div className="flex w-full items-center justify-start space-x-3 rounded-md p-2 hover:bg-slate-200">
                  <img
                    src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/287783869_177078658070053_1098275628170852232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yNLnD9u7IvgAX9gQM2-&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCHorn9LJlvI50gfVMtt7QWivhneDRLI08u6O16sq-a2A&oe=65E8A65B"
                    alt="avatar"
                    className="h-9 w-9 rounded-full"
                  />
                  <p className="text-lg">Huỳnh Chi Trung</p>
                </div>
                <hr className=" h-3/4 w-full bg-secondary-foreground" />
                <div className="flex w-full items-center justify-start space-x-3 rounded-md p-2 hover:bg-slate-200">
                  <img
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/277512443_108003738529215_6408271429858838125_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=gUaY9_QY9QgAX9BJb9X&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBIDIrAh1C5vXsMR9i8cvzqHJ1GdFa7g6svGggj6T_GHQ&oe=65E9B54C"
                    alt="avatar"
                    className="h-9 w-9 rounded-full"
                  />
                  <p className="text-lg">Ban quyền lực E21CQCN01-N</p>
                </div>
                <hr className=" h-3/4 w-full bg-secondary-foreground" />
                <Button className="flex w-full space-x-2 rounded-sm bg-[#e4e6eb] text-black hover:bg-[#e4e6eb] hover:opacity-80">
                  <UserRoundSearch />
                  <p> Xem tất cả ở trang cá nhân</p>
                </Button>
              </div>
              <ul className=" mt-4 font-semibold text-black">
                {FEATURES.map(item => (
                  
                  <li className=" flex w-full items-center justify-start space-x-3 rounded-md p-2 hover:bg-slate-200">
                    {item.icon}
                    <p>{item.content}</p>
                    {item.arrow }
                  </li>
                ))}
                <li className=" flex w-full items-center justify-start space-x-3 rounded-md p-2 hover:bg-slate-200">
                  <LogOut/>
                  <UserProfile/>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  )
}

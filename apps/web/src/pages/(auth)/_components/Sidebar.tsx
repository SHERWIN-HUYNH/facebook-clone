import clsx from 'clsx'
import { Bookmark,  CircleFadingPlus,   MoveDown,  PersonStanding,  Users, Video } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const SIDE_BAR = [
  {
    title: 'Huynh Chi Trung',
    path: '/',
    icon: <PersonStanding className="text-primary"/>
  },
  {
    title: 'Save',
    path: '/',
    icon: <Bookmark  className="text-primary"/>
  },
  {
    title: 'Groups',
    path: '/groups/feed/',
    icon: <Users className="text-primary" />
  },
  {
    title: 'Video',
    path: '/video',
    icon: <Video className="text-primary"/>
  },
  {
    title: 'Xem them',
    path: '/seemore',
    icon: <MoveDown className="text-primary"/>
  }

]
const SIDE_BAR2 = [
  {
    title: 'Ban quyền lực E21CQC',
    path: '/',
    icon: <CircleFadingPlus    className="text-primary"/>
  },
  {
    title: 'Facebook',
    path: '/',
    icon: <CircleFadingPlus    className="text-primary"/>
  },
  {
    title: 'Facebook',
    path: '/',
    icon: <CircleFadingPlus    className="text-primary"/>
  },
  {
    title: 'Facebook',
    path: '/',
    icon: <CircleFadingPlus    className="text-primary"/>
  },
]
interface Props {
  isOpen: boolean
}

export default function Sidebar({ isOpen }: Props) {
  const currentPath = useLocation().pathname

  return (
    <div className='flex flex-col items-center bg-[#f0f2f5] border-none text-[#050505] '>
    <ul
      className={clsx('space-y-2 border-r p-4', {
        ' w-72': isOpen,
        'w-28': !isOpen
      })}
    >
      {SIDE_BAR.map(item => (
        <Link to={`/admin${item.path}`} key={item.title}>
          <li
            className={clsx('flex cursor-pointer gap-4 rounded-sm px-6 py-2 font-bold', {
              'bg-primary': currentPath === `/admin${item.path}`,
              'text-white': currentPath === `/admin${item.path}`
            })}
          >
            {item.icon}
            {isOpen && <span>{item.title}</span>}
          </li>
        </Link>
      ))}
      <hr className=' bg-slate-600'/>

    </ul>
    <ul  className={clsx('space-y-2 border-r p-4 text-[#050505] font-bold', {
        ' w-72': isOpen,
        'w-28': !isOpen
      })}>
      <li className='flex cursor-pointer gap-4 rounded-sm px-6 py-2 '>LOI TAT CUA BAN</li>
      {SIDE_BAR2.map(item => (
        <Link to={`/admin${item.path}`} key={item.title}>
          <li
            className={clsx('flex cursor-pointer gap-4 rounded-sm px-6 py-2', {
              'bg-primary': currentPath === `/admin${item.path}`,
              'text-white': currentPath === `/admin${item.path}`
            })}
          >
            {item.icon}
            {isOpen && <span>{item.title}</span>}
          </li>
        </Link>
      ))}
    </ul>
    </div>
   

  )
}

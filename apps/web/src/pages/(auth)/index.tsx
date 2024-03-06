import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Avatar from '@/assets/images/avt1.jpg'
import Background from '@/assets/images/bg.jpg'
import { Link } from 'react-router-dom'
import { DotIcon, FileImage, Heart, MessageCircle, Move3DIcon, MoveDown, Search, Share, ShieldClose, SmileIcon, SmilePlus, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
const IMAGES = [
  {
    name: 'Huynh Chi Trung',
    avt: Avatar,
    bg: Background
  },
  {
    name: 'Huynh Chi Trung',
    avt: Avatar,
    bg: Background
  },
  {
    name: 'Huynh Chi Trung',
    avt: Avatar,
    bg: Background
  },
  {
    name: 'Huynh Chi Trung',
    avt: Avatar,
    bg: Background
  },
  {
    name: 'Huynh Chi Trung',
    avt: Avatar,
    bg: Background
  }
]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const posts = [
  {
    content: 'hello',
    author: 'Dai hoc dung hoc dai',
    avatar: Avatar,
    image: Avatar
  }
]
const Extrafunction = [
  {
    icon: <MoveDown />,
    name: 'Luu bai viet',
    detail: 'Them vao danh sach luu'
  },
  {
    icon: <MoveDown />,
    name: 'Luu bai viet',
    detail: 'Them vao danh sach luu'
  },
  {
    icon: <MoveDown />,
    name: 'Luu bai viet',
    detail: 'Them vao danh sach luu'
  },
  {
    icon: <MoveDown />,
    name: 'Luu bai viet',
    detail: 'Them vao danh sach luu'
  }
]
export default function Dashboard() {
  const [hidden, setHidden] = useState(true)
  return (
    <div className=" w-full bg-[#f0f2f5] pt-10 ">
      <div className="mx-auto flex h-full w-[590px] flex-col items-center ">
        <Carousel className="mx-auto h-64 ">
          <CarouselContent>
            {IMAGES.map(item => (
              <CarouselItem className="relative inline-block h-64 basis-1/4 items-center rounded-lg ">
                {/* BACKGROUND */}
                <div className="h-64 rounded-lg">
                  <img src={`${item.bg}`} alt=" avt" className="h-full w-full rounded-lg" />
                </div>
                {/* AVATAR */}
                <div className="absolute top-0 h-12 w-12 overflow-hidden rounded-full ">
                  <img src={`${item.avt}`} alt=" avt" className=" rounded-full object-contain" />
                </div>
                <div className=" absolute bottom-3 left-7 inline-block">
                  <p className=" w-full text-nowrap text-white">{item.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className=" w-[520px] ">
          {/* BAN DANG NGHI GI */}
          <div className="mt-10 w-full rounded-lg bg-white p-5">
            {/* SEARCH */}
            <div className=" flex flex-col ">
              <div className=" flex max-h-10 space-x-2">
                <Link to={'/'} className="h-10 w-10 overflow-hidden rounded-full">
                  <img className=" w-full rounded-full  object-contain" src={`${IMAGES[0].avt}`} alt="" />
                </Link>
                <div className="flex w-full items-center justify-center space-x-1 rounded-full border bg-secondary-foreground p-2">
                  <Search />

                  <Input placeholder="Search..." className=" w-full border-none bg-transparent" />
                </div>
              </div>

              <hr className=" color-[#f0f2f5] mt-3 h-2 w-full" />

              <div className=" mt-2 flex text-nowrap">
                <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]">
                  <Video />
                  <p>Video trực tiếp</p>{' '}
                </Button>
                <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]">
                  {' '}
                  <FileImage />
                  <p>Ảnh/video</p>{' '}
                </Button>
                <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]">
                  {' '}
                  <SmilePlus />
                  <p>Cảm xúc/hoạt động </p>
                </Button>
              </div>
            </div>
          </div>

          {/* BAI VIET */}
          {hidden ? (
            <article className="mt-3 w-full rounded-lg bg-white">
              {/* HEADER */}
              <div className=" flex items-center justify-between p-5">
                <div className="flex space-x-2">
                  <div className=" h-10 w-10 overflow-hidden rounded-sm">
                    <img src={Avatar} alt="" className=" w-full rounded-sm" />
                  </div>
                  <div className="flex flex-col justify-start">
                    <p className='font-bold'>Đại học đừng học đại</p>
                    <p>Đại học đừng học đại 2 giờ trước</p>
                  </div>
                </div>

                {/* ICON */}
                <div className=' flex items-center justify-center'>
                  <DropdownMenu>
                    <DropdownMenuTrigger><Move3DIcon/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <ScrollArea className="h-[200px] w-[350px]  p-4">
                        <ul>
                          {Extrafunction.map(item => (
                            <li className=" hover:bg-slate-300">
                              <div>
                                <div>
                                  <img src={`$${item.icon}`} alt="" />
                                </div>
                                <div>
                                  <p className="font-bold">{item.name}</p>
                                  <p className="font-light">{item.detail}</p>
                                </div>
                              </div>
                              <hr className="h-1/2 w-full bg-slate-100" />
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div onClick={() => setHidden(true)}>
                    <ShieldClose />
                  </div>
                </div>
              </div>
              <hr className=' h-1 px-5'/>
              {/* CONTENT */}
              <div className="p-5 text-justify ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dicta doloribus, totam voluptates
                consectetur vel magnam saepe error soluta unde harum vero recusandae autem maiores nihil, corrupti
                voluptatum, iure esse asperiores! Incidunt, fuga a, perspiciatis minus fugiat reprehenderit officia
                dolores, hic cum quis rerum. Eos sequi tenetur quibusdam repellendus cupiditate.
              </div>
              {/* IMAGES */}
              <div className=" pt-5 max-h-[500px] overflow-hidden">
                <img src={`${Avatar}`} alt="" className="w-full object-contain" />
              </div> 
              {/* EMOJI */}
              <div className="flex justify-between p-5 ">
                <div className=" flex space-x-1">
                  <div className='flex -space-x-2'>
                    <SmileIcon className=" -ml-2" />
                    <SmileIcon className=" -ml-2" />
                    <SmileIcon className=" -ml-2" />
                  </div>
                  <p>Ban va 1.9k nguoi khac</p>
                </div>
                <div>
                  <p>Binh luan</p>
                </div>
              </div>
              <hr/>
              {/* COMMENTS/SHARE/LIKE */}
              <div className='flex justify-between px-5'>
                  <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]"><Heart />Thich</Button>
                  <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]"><MessageCircle />Binh luan</Button>
                  <Button className="flex items-center space-x-1 bg-white text-[#65676b] hover:bg-[#e1e4ea]"><Share />Chia se</Button>
              </div>
            </article>
          ) : (
            <p>CLOSED</p>
          )}
        </div>
      </div>
    </div>
  )
}

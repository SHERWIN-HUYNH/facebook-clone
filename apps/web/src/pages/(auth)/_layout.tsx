import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
import { getToken } from '@/utils/token'

export default function Component() {
  const [isOpen] = useState(true)
  const accessToken = getToken()
  if (!accessToken) return <Navigate to="/login" />

  return (
    <div className="w-full">
      <Header />
      <div className="flex">
        <Sidebar isOpen={isOpen} />
        <div className="flex w-full justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

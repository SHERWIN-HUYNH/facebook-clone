import { signIn } from '@/apis/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/utils/schema'
import { setToken } from '@/utils/token'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'
import FaceBookLogo from '@/assets/images/facebook-logo.png'
export type LoginInputs = z.infer<typeof loginSchema>

export default function Component() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginInputs) => {
    try {
      setIsLoading(true)
      const res = await signIn(data)
      setToken(res.accessToken)
      navigate('/')
      toast.success('Login successfully!')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex lg:p-32 items-center justify-center m-auto space-y-'>
      <div className="container items-center space-y-10 flex md:flex-row md:justify-between flex-col">
        <div className=' flex flex-col space-y-3 items-center '>
          <h1 className="text-center text-4xl font-bold text-primary">Facebook</h1>
          <p className=' text-5xl'>Recent Logins</p>
          <div className=" w-48">
            <img src={`${FaceBookLogo}`} alt="FaceBook Logo" />
          </div>
        </div>
        <div className='w-1/2 shadow-[4px_25px_42px_17px_rgba(0,0,0,0.27)] rounded-xl'>
          <form className="space-y-2 p-10" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="  md:text-2xl font-medium"> Log in to Facebook </h1>
            <Input  {...register('email')} placeholder="Email" type="email" />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            <Input {...register('password')} placeholder="Password" type="password" />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            <hr/>
            <p className="cursor-pointer text-right text-primary underline">Forgot Password</p>
            <p className="text-sm text-muted-foreground">
              We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
              <span className="text-foreground underline">Privacy Policy </span>
            </p>
            <Button className="w-full" size="lg" type="submit" loading={isLoading}>
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

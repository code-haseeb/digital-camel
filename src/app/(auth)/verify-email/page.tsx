import VerifyEmail from '@/components/VerifyEmail'
import Image from 'next/image'

interface PageProps {
    searchParams: {
      [key: string]: string | string[] | undefined
    }
  }

  const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to
    return (
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'></div>)
  }    
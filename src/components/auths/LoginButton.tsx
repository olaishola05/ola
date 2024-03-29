'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import { BsGithub } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = async (provider: string) => {
    try {
      const res = await signIn(provider, {
        callbackUrl: `${process.env.NEXT_PUBLIC_ADMIN_URL}`,
      });
      if (res?.error) {
        console.log(res.error);
        throw new Error(res.error);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <>
      <button className='w-full h-10 md:w-[350px] justify-center flex gap-2 items-center text-base cursor-pointer px-2 py-3 border rounded-md shadow-sm md:text-base md:py-5 md:px-2 bg-black text-white' onClick={() => handleLogin('github')}>
        Continue with
        <BsGithub className='inline-block mr-2 md:mr-1 text-white' />
      </button></>
  )
}

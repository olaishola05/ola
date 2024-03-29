import React from 'react'
import { Metadata } from 'next';
import Homepage from '@/components/Home/Homepage';

export const metadata: Metadata = {
  title: 'Ola Ishola | Software Engineer',
  description: 'Personal website built with NextJS, Prisma, MongoDB and Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1',
}

const getProjects = async (state: boolean) => {
  const res = await fetch(`${process.env.API_URL}/projects?published=${state}`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    console.log(res, 'res')
    throw new Error('Something went wrong')
  }
  return res.json()
}

const getMediumPosts = async () => {
  const res = await fetch(`${process.env.MEDIUM_API_URL}`)
  if (!res.ok) {
    console.log(res, 'res')
    throw new Error('Something went wrong')
  }
  return res.json()
}

export default async function Home() {
  const projectsData = getProjects(true)
  const postsData = getMediumPosts()
  const [projects, posts] = await Promise.all([projectsData, postsData])

  return (
    <main className="mt-4">
      <Homepage projects={projects?.data} posts={posts} />
    </main>
  )
}
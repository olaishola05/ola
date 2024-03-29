'use client';

import React from 'react'
import { useSession } from 'next-auth/react';
import { useNavigation } from '@/hooks';
import { tailwindToast } from '@/components/Toast/Toast';


export default function EditBottom({ project, reset, register, isSubmitting }: any) {
  const { data: session, status } = useSession();
  const [isUpdateCancel, setIsUpdateCancel] = React.useState<boolean>(false);
  const { navigate } = useNavigation()

  const handleCancel = React.useCallback(() => {
    reset();
    setIsUpdateCancel(!isUpdateCancel)
    tailwindToast('info', 'Update Cancelled, redirecting...')
    navigate(`/admin/dashboard/projects/${project.id}`)
  }, [reset, isUpdateCancel, project.id, navigate])

  const userHasValidSession = Boolean(session);
  const projectBelongsToUser = session?.user?.email === project.author?.email;

  return (
    <div className='buttons flex gap-5 items-center justify-center'>
      <button
        type="submit"
        disabled={!register}
        className='w-[20%] p-2 bg-[var(--primary)] text-white rounded-lg text-lg font-semibold hover:bg-[var(--primary)] hover:cursor-pointer'
      >
        {userHasValidSession && projectBelongsToUser && isSubmitting ? 'Updating...' : 'Update'}
      </button>

      <button
        type='button'
        className='w-[20%] p-2 bg-white text-[var(--primary)] rounded-lg text-lg font-semibold hover:bg-[var(--primary)] hover:cursor-pointer hover:text-white hover:border-[var(--primary)] border border-[var(--primary)]'
        onClick={() => handleCancel()}
      >Cancel</button>
    </div>
  )
}

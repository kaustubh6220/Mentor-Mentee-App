import React from 'react'

import Image from 'next/image';
import { auth, clerkClient } from '@clerk/nextjs';
import ProfileForm from '@/components/shared/ProfileForm';
import getProfile from '@/helpers/getProfile';


const personalProfile = async ({params}:any) => {
  const { id } = params;
  const username = id; 
  const profile= await getProfile(username)


  return (
    <div>
      <ProfileForm 
      profile={profile}
      />
    </div>
  )
}

export default personalProfile


import Profile from '@/components/shared/Profile';
import getProfile from '@/helpers/getProfile';
import axios from 'axios';
import { useState } from 'react';



const PersonalProfile = async ({ params }: any) => {
  const { id } = params; // Destructure the id from params
  const username = id; // Assign id to username

  const profile= await getProfile(username)
  return (
    <div>
      <Profile username={username} profile={profile}/> {/* Pass username as a prop to Profile component */}
    </div>
  );
}

export default PersonalProfile;

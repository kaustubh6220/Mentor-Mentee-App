
import MentorListComp from '@/components/shared/MentorListComp';
import Profile from '@/components/shared/Profile';
import getProfile from '@/helpers/getProfile';
import getMentorList from '@/helpers/getMentorList';
import axios from 'axios';
import { useState } from 'react';



const MentorList = async () => {


  const mentorList= await getMentorList()

  return (
    <div>
      <MentorListComp mentorList={mentorList}/> 
    </div>
  );
}

export default MentorList;

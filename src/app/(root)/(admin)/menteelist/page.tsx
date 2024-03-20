
import MenteeListComp from '@/components/shared/MenteeListComp';
import Profile from '@/components/shared/Profile';
import getProfile from '@/helpers/getProfile';
import getStudentList from '@/helpers/getStudentList';
import axios from 'axios';
import { useState } from 'react';



const MenteeList = async () => {


  const menteeList= await getStudentList()

  return (
    <div>
      <MenteeListComp menteeList={menteeList}/> 
    </div>
  );
}

export default MenteeList;

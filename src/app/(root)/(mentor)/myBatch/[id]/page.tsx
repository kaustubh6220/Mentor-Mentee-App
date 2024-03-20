
import MyBatchComp from '@/components/shared/MyBatchComp';
import Profile from '@/components/shared/Profile';
import getMyBatch from '@/helpers/getMyBatch';
import getProfile from '@/helpers/getProfile';
import axios from 'axios';
import { useState } from 'react';



const myBatch = async ({ params }: any) => {
  const { id } = params; // Destructure the id from params
  const username = id; // Assign id to username

  const myBatch= await getMyBatch(username)
  return (
    <div>
      <MyBatchComp myBatch={myBatch}/> 
    </div>
  );
}

export default myBatch;

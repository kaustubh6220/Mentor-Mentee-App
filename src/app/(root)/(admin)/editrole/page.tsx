'use client'

import UserList from '@/components/shared/UserList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Make a GET request to your API endpoint to fetch userInfo
        const response = await axios.get('/api/userInfo');
        // Assuming the response data is an array of user objects with id, firstName, and role properties
        const userInfoFromApi = response.data.data; // Extracting the data array
        setUsersInfo(userInfoFromApi);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      {/* Pass the fetched usersInfo to the UserList component */}
      <UserList usersInfo={usersInfo} />
    </div>
  );
};

export default Page;

"use client"

import { Button } from '@/components/ui/button';
import { uploadMentorData, uploadStudentData } from '@/helpers/uploadData';
import React, { useState, ChangeEvent } from 'react';

const Home = () => {
  const [mentorFile, setMentorFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setMentorFile(selectedFile);
    }
  };

  const handleMentorUpload = async () => {
    try {
      if (!mentorFile) {
        return;
      }
      const res = await uploadMentorData(mentorFile);
      if (res) {
        alert("Mentor data uploaded successfully!");
      } else {
        alert("Mentor data was not uploaded!");
      }
    } catch (error) {
      console.error("Error uploading mentor data:", error);
      alert("Error uploading mentor data. Please try again later.");
    }
  };

  const handleStudentUpload = async () => {
    try {
      if (!mentorFile) {
        return;
      }
      await uploadStudentData(mentorFile);
      alert("Student data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading student data:", error);
      alert("Error uploading student data. Please try again later.");
    }
  };

  return (
    <>
    <h2 className=' flex sm:justify-start justify-center sm:items-center text-lg uppercase font-semibold'>Add Data</h2>
      <div className=' overflow-hidden lg:flex lg:flex-row lg:items-center lg:justify-center gap-2'>
        <div className="rounded-sm border-2  mt-4 p-4 flex">
          <label className="text-lg ">Add Mentor Data :</label>
          <div className='ml-4 flex flex-col items-start gap-2'>
            <input
              className="border-slate-600 border-2 rounded-sm block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              type="file"
              name="mentor"
              accept=".csv"
              onChange={handleFileChange}
              onClick={(event:any) => {
                event.target.value = null; // Reset file input value on click
              }}
            />
            <Button className='block w-full text-sm bg-slate-700' onClick={handleMentorUpload}>Upload</Button>
          </div>
        </div>

        <div className="border-2  rounded-sm shadow-md mt-4 p-4 flex">
          <label className="text-lg ">Add Student Data :</label>
          <div className='ml-4 flex flex-col items-start gap-2'>
            <input
              className="border-slate-600 border-2 rounded-sm block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              type="file"
              name="mentor"
              accept=".csv"
              onChange={handleFileChange}
              onClick={(event:any) => {
                event.target.value = null; // Reset file input value on click
              }}
            />
            <Button className='block w-full text-sm bg-slate-700' onClick={handleStudentUpload}>Upload</Button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;

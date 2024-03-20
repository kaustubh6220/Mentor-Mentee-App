import Link from 'next/link';
import React from 'react';

interface MentorListProps {
  mentorList: {
    ok: boolean;
    data: {
        mentor_name: string;
        mentor_id: string;
        designation:string;
      // Add other properties as needed
    }[];
    message: string;
  };
}

const MentorListComp: React.FC<MentorListProps> = ({ mentorList }) => {
  const { data } = mentorList;

  return (
    <><h2 className=' flex justify-center items-center text-lg uppercase font-semibold'>Mentor List</h2>
        <div className='overflow-auto h-screen'>

            <table className=' border-collapse border-t mt-2 w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className=' px-6 py-3'>Mentor Name</th>
                        <th scope='col' className=' px-6 py-3'>Designation</th>
                        <th scope='col' className=' px-6 py-3'>Mentor ID</th>
                        <th scope='col' className=' px-6 py-3'>Actions</th>

                    </tr>
                </thead>
                

                <tbody>
                    {data.map((mentor, index) => (
                        <tr key={index} className=' bg-white border-b dark:gray-800 dark:border-gray-700'>
                            <td scope='col' className=' px-6 py-3'>{mentor.mentor_name}</td>
                            <td scope='col' className=' px-6 py-3'>{mentor.designation}</td>

                            <td scope='col' className=' px-6 py-3'>{mentor.mentor_id}</td>
                            <td scope='col' className=' px-6 py-3 text-sky-500 hover:text-sky-600'>
                                <Link href={`/Batch/${mentor.mentor_id}`}>View Batch</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    </>
  );
};

export default MentorListComp;

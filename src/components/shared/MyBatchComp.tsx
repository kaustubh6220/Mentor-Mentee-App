import Link from 'next/link';
import React from 'react';

interface MenteeListProps {
  myBatch: {
    ok: boolean;
    data: {
      student_name: string;
      enrollment_number: string;
      student_class:string;
      // Add other properties as needed
    }[];
    message: string;
  };
}

const MyBatchComp: React.FC<MenteeListProps> = ({ myBatch }) => {
  const { data } = myBatch;

  return (
    <><h2 className=' flex justify-center items-center text-lg uppercase font-semibold'>Mentee List</h2>
        <div className='overflow-auto h-screen'>

            <table className=' border-collapse border-t mt-2 w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className=' px-6 py-3'>Student Name</th>
                        <th scope='col' className=' px-6 py-3'>Student Class</th>
                        <th scope='col' className=' px-6 py-3'>Enrollment Number</th>
                        <th scope='col' className=' px-6 py-3'>Actions</th>

                    </tr>
                </thead>
                

                <tbody>
                    {data.map((mentee, index) => (
                        <tr key={index} className=' bg-white border-b dark:gray-800 dark:border-gray-700'>
                            <td scope='col' className=' px-6 py-3'>{mentee.student_name}</td>
                            <td scope='col' className=' px-6 py-3'>{mentee.student_class}</td>

                            <td scope='col' className=' px-6 py-3'>{mentee.enrollment_number}</td>
                            <td scope='col' className=' px-6 py-3 text-sky-500 hover:text-sky-600'>
                                <Link href={`/personalProfile/${mentee.enrollment_number}`}>View Profile</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    </>
  );
};

export default MyBatchComp;

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';

interface UserInfo {
    id: string | null;
    username: string | null;
    role: string | null;
}

interface UserTableProps {
    usersInfo: UserInfo[] | null;
}

const UserTable: React.FC<UserTableProps> = ({ usersInfo }) => {
    const [newRoles, setNewRoles] = useState<{ [userId: string]: string }>({});

    const handleRoleChange = async (userId: string) => {
        const newRole = newRoles[userId];
        if (newRole && userId) {
            try {
                const response = await axios.post('/api/updateRole', { userId, newRole });
                console.log(`Changing role of user with ID ${userId} to ${newRole}`);
                // Optionally, you can update the UI here to reflect the change
                setNewRoles((prevRoles) => ({ ...prevRoles, [userId]: '' }));
                alert('Role updated successfully!');
            } catch (error) {
                console.error('Error updating role:', error);
                alert('Failed to update role. Please try again later.');
            }
        } else {
            console.error('Invalid user ID or role');
            alert('Invalid user ID or role');
        }
    };

    const handleRoleInputChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setNewRoles((prevRoles) => ({
            ...prevRoles,
            [userId]: value, // Update the new role only for the specific userId
        }));
    };
    
    

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">User List</h2>
            <div className='relative overflow-x-auto '>

                <table className=" w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className=" px-6 py-3">User ID</th>
                            <th scope='col' className=" px-6 py-3">Role</th>
                            <th scope='col' className=" px-6 py-3">Change Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersInfo?.map((user, index) => (
                            <tr className=' bg-white border-b dark:gray-800 dark:border-gray-700' key={index}>
                                <td className="px-6 py-4">{user.username || ""}</td>
                                <td className="px-6 py-4">{user.role || ""}</td>
                                <td className="px-6 py-4">
                                    {user.id !== null && ( // Check if user.id is not null before rendering the select and button
                                        <>
                                            <div className='flex flex-row gap-2 justify-center items-center'>
                                                <select
                                                    className="border-slate-600 border-2 rounded-sm block w-28 h-10 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                                                    value={newRoles[user.id || ""] || ''}
                                                    onChange={(e) => handleRoleInputChange(user.id || "", e)}
                                                >
                                                    <option value="">Select Role</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Mentor">Mentor</option>
                                                    <option value="Mentee">Mentee</option>
                                                    <option value="Class Teacher">Class Teacher</option>

                                                </select>
                                                <Button
                                                    className=" bg-slate-700 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => handleRoleChange(user.id || '')} // Ensure user.id is not null
                                                >
                                                    Save
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;

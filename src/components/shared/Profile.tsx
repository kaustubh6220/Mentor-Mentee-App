'use client'

import axios from 'axios';
import React, { useState } from 'react';
import { UserData } from '@/lib/types';
import { Button } from '../ui/button';

type ProfileProps = {
    profile: UserData;
    username:string;
};

const Profile = ({ profile,username }: ProfileProps) => {
    const handleUpdateClick = () => {
        if (profile) {
            window.location.href = `${username}/update`;
        }
    };

    console.log("data", profile);

    return (
        <div>
            {profile && (
                <div className="ml-2 mr-2 overflow-auto w-screen h-screen">
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <tbody className=''>
                            {/* <tr style={{ backgroundColor: '#f2f2f2'  }} className='mt-2'>
                                <th style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>Field</th>
                                <th style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>Value</th>
                            </tr> */}
                           <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold', width: '50%' }}>Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', width: '70%' }}>{profile.student_name}</td>
                            </tr>

                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Enrollment No</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.enrollment_number}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Birth Place</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.birth_place}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Nationality</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.nationality}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Father's Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.father_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Parents Mobile No</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.parents_mobile}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Guardian Name</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Guardian Profession</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_profession}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Relation</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_relation}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Present Address</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.present_address}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Permanent Address</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.permanent_address}</td>
                            </tr>

                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Year of Admission</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.year_of_admission}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Class</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.student_class}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>State</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.state}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Religion</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.religion}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Occupation</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.occupation}</td>
                            </tr>

                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Mobile Number</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.guardian_mobile_number}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Annual Income</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.annual_income}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left', fontWeight: 'bold' }}>Pin Code</td>
                                <td style={{ border: '1px solid #dddddd', padding: '8px 16px', textAlign: 'left' }}>{profile.pin_code}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="mt-4 flex justify-end items-end mr-0"> {/* ml-auto to push the button to the right */}
                <Button                    
                    onClick={handleUpdateClick}
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

export default Profile;

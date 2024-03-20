import { UserData } from "@/lib/types";
import axios from "axios";

interface StudentProfile {
    // _id: string;
    student_name: string;
    year_of_admission: number;
    student_class: string;
    // student_email_id: string;
    date_of_birth: string;
    // birth_place: string;
    // state: string;
    // nationality: string;
    // religion: string;
    // father_name: string;
    // occupation: string;
    // parents_mobile: string;
    // guardian_name: string;
    // guardian_profession: string;
    // guardian_mobile_number: string;
    // guardian_relation: string;
    // annual_income: string;
    // present_address: string;
    // pin_code: string;
    // permanent_address: string;
    // student_id: string;
    enrollment_number: string;
    // mentor_id: string;
    // batch: string;
    // updatedAt: string;
    // createdAt: string;
    // __v: number;
  }


const userProfileData: StudentProfile = {
    student_name: "John Doe",
    year_of_admission: 2021,
    student_class: "12th Grade",
    date_of_birth: "2005-05-20",
    enrollment_number: "MIT120121"

    // Fill in other profile fields
};

updateStudentProfile(userProfileData);
export async function updateStudentProfile(userProfileData:StudentProfile) {
  try {
    console.log(userProfileData)
    const response = await axios.patch('http://localhost:3000/student/api/update',userProfileData);
    console.log('Student profile updated successfully:', response.data);
    // Handle response as needed
  } catch (error) {
    console.error('Error updating student profile:', error);
    // Handle error as needed
  }
}

import axios from 'axios';

type UserData = {
    _id: string;
    student_name: string;
    year_of_admission: number;
    student_class: string;
    student_email_id: string;
    // Add more properties as needed
};

const getUserDetails = async (username: string): Promise<UserData> => {
    try {
        const response = await axios.get(`http://localhost:3000/student/getStudentById?enrollment_number=${username}`);
        return response.data.data;
    } catch (error) {
        throw new Error(`Failed to fetch user details for username ${username}`);
    }
};

export default getUserDetails;



import axios from "axios";

interface Student {
    _id: string;
    student_name: string;
    year_of_admission: number;
    student_class: string;
    student_email_id: string;
    date_of_birth: string;
    birth_place: string;
    state: string;
    nationality: string;
    religion: string;
    father_name: string;
    occupation: string;
    parents_mobile: string;
    guardian_name: string;
    guardian_profession: string;
    guardian_mobile_number: string;
    guardian_relation: string;
    annual_income: string;
    present_address: string;
    pin_code: string;
    permanent_address: string;
    student_id: string;
    enrollment_number: string;
    mentor_id: string;
    mentor_name: string;
    batch: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
}

interface ApiResponse {
    ok: boolean;
    data: Student[];
    message: string;
}

const getMyBatch = async (username: string): Promise<ApiResponse> => {
    try {
        const response = await axios.get(`http://localhost:3000/student/getStudents?mentor_id=${username}`);
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            // Handle Axios errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error(`Request failed with status ${error.response.status}`);
            } else if (error.request) {
                // The request was made but no response was received
                throw new Error('No response received from the server');
            } else {
                // Something happened in setting up the request that triggered an Error
                throw new Error(`Error: ${error.message}`);
            }
        } else {
            // Handle generic errors
            throw new Error(`Error: ${error.message}`);
        }
    }
};

export default getMyBatch;

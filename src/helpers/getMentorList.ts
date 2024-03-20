import axios, { AxiosResponse } from 'axios';


interface Mentor {
    _id: string;
    mentor_id: string;
    mentor_name: string;
    designation: string;
    mobile_number: string;
    class_teacher_flag: string;
    class_teacher_class: string;
    assign_batch: string;
    assign_class: string;
    mentor_email: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
}

interface ApiResponse {
    ok: boolean;
    data: Mentor[];
    message: string;
}




interface Student {
    // Define the structure of your Student object
}

interface ApiResponse {
    ok: boolean;
    data: Mentor[];
    message: string;
}

const getMentorList = async (): Promise<ApiResponse> => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:3000/mentor/getMentors');
        // console.log(response.data)
        return response.data;
        
    } catch (error:any) {
        // Handle the error properly
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
    }
};

export default getMentorList;


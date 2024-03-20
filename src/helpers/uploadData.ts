import axios from 'axios';

export async function uploadMentorData(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:3000/admin/uploadMentor', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Mentor upload response:', response.data);
    return response.data ;
  } catch (error) {
    console.error('Error uploading mentor data:', error);
    throw error;
  }
}

// export default uploadMentorData;



export async function uploadStudentData(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:3000/admin/uploadStudent', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Mentor upload response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error uploading mentor data:', error);
    throw error;
  }
}

// export default uploadStudentData;

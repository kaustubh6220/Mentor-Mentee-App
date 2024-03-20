import axios from 'axios';

// Function to fetch unique ID from API
const fetchUniqueId = async () => {
  try {
    const response = await axios.get('/api/uniqId');
    return response.data.uniqueId; // Assuming your API returns the unique ID
  } catch (error) {
    console.error('Error fetching unique ID:', error);
    return null;
  }
};



export const sidebarLinks = [
  
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Dashboard",
    role:"Admin"

  },
  {
    imgURL: "/assets/list.svg",
    route: "/mentorlist",
    label: "Mentor List",
    role:"Admin"

  },
  {
    imgURL: "/assets/list.svg",
    route: "/menteelist",
    label: "Mentee List",
    role:"Admin"

  },
  {
    imgURL: "/assets/list.svg",
    route: "/classteacherlist",
    label: "Class Teacher List",
    role:"Admin"
  },
  {
    imgURL: "/assets/edit.svg",
    route: "/add",
    label: "Add Data",
    role:"Admin"
  },
  {
    imgURL: "/assets/user.svg",
    route: "/adminprofile",
    label: "Profile",
    role:"Admin"
  },
  {
    imgURL: "/assets/edit.svg",
    route: "/editrole",
    label: "Edit Roles",
    role:"Admin"
  },

  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Dashboard",
    role:"Mentee"
  },
  {
    imgURL: "/assets/profile.svg",
    route: "/personalProfile",
    label: "Personal Profile",
    role:"Mentee"
  },
  {
    imgURL: "/assets/home.svg",
    route: "",
    label: "Health Service",
    role:"Mentee"
  },
  {
    imgURL: "/assets/home.svg",
    route: "",
    label: "HSC/Diploma Details",
    role:"Mentee"

  },

  

  {
    imgURL: "/assets/home.svg",
    route: "classList",
    label: "Class List",
    role:"Mentor"

  },
  // {
  //   imgURL: "/assets/home.svg",
  //   route: "myBatch",
  //   label: "My Batch",
  //   role:"Mentor"
    

  // },
  {
    imgURL: "/assets/home.svg",
    route: "facultyProfile",
    label: "Profile",
    role:"Mentor"

  },

  {
    imgURL: "/assets/home.svg",
    route: "classList",
    label: "Class List",
    role:"Class Teacher"

  },
  
  

];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];


export const stusidebarLinks = [

  {
    imgURL: "/assets/home.svg",
    route: "/menteedashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/menteeprofile",
    label: "Profile",
    
  },
  {
    imgURL: "/assets/list.svg",
    route: "/menteelist",
    label: "Mentee List",
  },
  {
    imgURL: "/assets/list.svg",
    route: "/classteacherlist",
    label: "Class Teacher List",
  },
  {
    imgURL: "/assets/edit.svg",
    route: "/add",
    label: "Add Data",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/adminprofile",
    label: "Profile",
  },
  
];
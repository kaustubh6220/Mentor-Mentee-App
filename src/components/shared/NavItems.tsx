import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';

interface NavbarProps {
  userRole: string | undefined;
}


const NavItems: React.FC<NavbarProps> = ({ userRole }) => {
  const logout=async ()=>{
        
    try {

         await axios.get("/api/users/logout")
         toast.success("Logout Succesful")
         router.push("/login")
        
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
        
    }

}
  console.log(userRole)
  const pathname = usePathname();
  const router = useRouter();

const [data,setData]=useState("nothing")

const getUserDetails = async()=>{
  const res= await axios.get("/api/users/me")
  console.log(res.data);
  setData(res.data.data.username)

}

  return (
    <>
    <ul className='flex w-full flex-col items-start gap-5'>
      {sidebarLinks.map((link) => (
        (link.role === 'Admin' && userRole === 'Admin') || !link.role ? (
          <Link key={link.label} href={link.route}>
            <div className='mr-5 cursor-pointer hover:text-gray-900'>
              {link.label}
            </div>
          </Link>
        ) : null
      ))}
    </ul>
      {/* <ul className='flex w-full flex-col items-start gap-5'>
        {sidebarLinks.map((link) => (
          (link.role === 'Mentee' && userRole === 'Mentee') || !link.role ? (
            <Link key={link.label} href={link.route}>
              <div className='mr-5 cursor-pointer hover:text-gray-900'>
                {link.label}
              </div>
            </Link>
          ) : null
        ))}
      </ul> */}



      <ul className='flex w-full flex-col items-start gap-5'>
        {sidebarLinks.map((link) => (
          (link.role === 'Class Teacher' && userRole === 'Class Teacher') || !link.role ? (
            <Link key={link.label} href={link.route}>
              <div className='mr-5 cursor-pointer hover:text-gray-900'>
                {link.label}
              </div>
            </Link>
          ) : null
        ))}
      </ul>
      {userRole === 'Mentor' && (
        <>
          <div className='flex w-full flex-col items-start gap-5'>
             <Button className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/`}>
                  Dashboard
                </Link>
              </Button>

              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/myBatch/${data}`}>
                  My Batch
                </Link>
              </Button>
  
              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/myBatch/${data}`}>
                  Connect
                </Link>
              </Button>
              
          </div>
        </>
      )}

      {userRole === 'Mentee' && (
        <>
          <div className='flex w-full flex-col items-start gap-5'>
              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/personalProfile/${data}`}>
                  Personal Profile
                </Link>
              </Button>
              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                  <Link href={`/healthService/${data}`}>
                    Health Service
                  </Link>
              </Button>
              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/hscDiplomaDetails/${data}`}>
                  HSC/Diploma Details
                </Link>
              </Button>
              <Button onClick={getUserDetails} className="rounded-md text-slate-800 bg-white  hover:bg-white " size="lg">
                <Link href={`/sop`}>
                  SOP
                </Link>
              </Button>
          </div>        
        </>
      )}

      <Button onClick={logout} className="rounded-md text-slate-800 bg-slate-100 ring-1 ring-slate-200 hover:bg-slate-200 flex align-bottom relative" size="lg">
          Logout
      </Button>
      </>
  );
}

export default NavItems

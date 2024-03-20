'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userRole, setUserRole] = useState(null); // State to store userRole

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('/api/getrole'); // Fetch userRole from API
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.userRole); // Set userRole state
          setIsLoaded(true);
        } else {
          throw new Error('Failed to fetch userRole');
        }
      } catch (error) {
        console.error('Error fetching userRole:', error);
        setIsLoaded(true);
      }
    };

    fetchUserRole(); // Call fetchUserRole when component mounts
  }, []); // Empty dependency array to run effect only once

  return (
    
      <header className="w-full border-b relative " >
        <div className=" w-full wrapper flex items-center justify-between text-center">
          {/* Left-aligned content */}
          <div className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-md ml-2 md:hidden">
            <Link href="/" > {/* Increased width for the logo container */}
              <Image className="max-lg:h-5 max-lg:w-14 shadow-sm"
                src="/assets/images/LOGO2.png" 
                width={250}  // Increased width of the logo
                height={70} // Increased height of the logo
                alt="MIT logo" 
              />
            </Link>
          </div>

          <div className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-md ml-2 max-lg:hidden">
            <Link href="/" > {/* Increased width for the logo container */}
              <Image className="max-lg:h-5 max-lg:w-14 shadow-sm"
                src="/assets/images/LOGO2.png" 
                width={150}  // Increased width of the logo
                height={70} // Increased height of the logo
                alt="MIT logo" 
              />
            </Link>
          </div>
    
          {/* Center content */}
          <div className="flex flex-grow justify-center max-lg:hidden">
            <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>MIT ADT UNIVERSITY MENTOR JUNCTION APP</h1> {/* Text centered */}
          </div>

          {/* <label className=" md:hidden">MIT ADT UNIVERSITY MENTOR JUNCTION</label> */}

    
          {/* Right-aligned content */}
          <div className="flex w-32 justify-end gap-3">
            <MobileNav/>
          </div>
        </div>
      </header>
    );
    
};

export default Header;

"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from '../ui/separator';
import NavItems from './NavItems';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const MobileNav = () => {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    useEffect(() => {
        getUserDetails();
    }, []); // Empty dependency array means this effect runs only once on mount

    const getUserDetails = async () => {
        try {
            const res = await axios.get("/api/getRole");
            console.log("user role",res.data);
            setData(res.data.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    return (
        <nav className=''>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image
                        src="/assets/icons/menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                        className=' cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-6 bg-white '>
                    <Image
                        src="/assets/images/logo.svg"
                        alt='logo'
                        width={128}
                        height={38}
                    />
                    <Separator className='border border-grey-50 ' />
                    <NavItems userRole={data} />
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default MobileNav;

'use client'
import React, {useEffect, useState} from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    const [darkMode, setDarkMode] = useState(true)
    useEffect(()=>{
        if(darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)} className="fixed z-10 top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-white text-neutral-950
      shadow-lg hover-bg-gray-100 transition-colors  ">
                d
            </button>
            <div className={cn("fixed top-15 inset-x-0 max-w-2xl mx-auto z-50", className)}>
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/courses">All Courses</HoveredLink>
                                <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                                <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                                <HoveredLink href="/courses">Songwriting</HoveredLink>
                                <HoveredLink href="/courses">Music Production</HoveredLink>
                            </div>
                        </div>
                    </MenuItem>
                    <Link href={"/contact"}>
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </>

    );
};

export default Navbar;
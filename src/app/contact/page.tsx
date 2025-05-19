"use client"
import React from 'react';
import {Meteors} from "@/components/ui/meteors";
const Page = () => {
    return (
        <div className="relative w-full h-screen">
            <Meteors number={100}/>
        </div>

    );
};

export default Page;
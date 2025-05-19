import React from 'react';
import Link from "next/link";
import {Spotlight} from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                <Spotlight
                    className="-top-30 left-0 md:left-60"
                    fill="white"
                />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-700 dark:from-neutral-50 dark:to-neutral-400">
                    Master the Art of Music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you're beginner or
                    looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-900 cursor-pointer"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
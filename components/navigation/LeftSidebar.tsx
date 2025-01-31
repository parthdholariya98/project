"use client";

import { SignedOut, useAuth } from '@clerk/nextjs';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";



import React from 'react'
import { cn } from '@/lib/utils';
import { UrlObject } from 'url';
import { sidebarLinks } from '@/constants';
import { PiSignInBold } from 'react-icons/pi';
import { TbLogin } from "react-icons/tb";

const LeftSidebar = () => {
    const pathname = usePathname()
    const { userId } = useAuth();
    return (
        <div className="light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto shadow-lg p-6 pt-32 max-sm:hidden lg:w-[266px] dark:dark-gradient bg-light-800 ">
            <div className="flex flex-1 flex-col gap-0">
                {sidebarLinks.map((item) => {
                    const active = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
                    if (item.route === "/profile") {
                        if (userId) {
                            item.route = `${item.route}/${userId}`;
                        } else {
                            return null;
                        }
                    }
                    return (
                        <Link
                            href={item.route}
                            key={item.route}
                            className={cn("flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-orange-500 hover:text-light-900 rounded-lg",
                            active
                                ? "primary-gradient rounded-lg text-light-900"
                                : "text-dark300_light900"
                            )}
                        >
                            {active ? (
                                <item.active className="size-8"/>
                            )    : (
                                <item.icon className="size-8"/>
                            )}
                            <p
                                className={cn(
                                    "max-lg:hidden",
                                    active ? "base-bold" : "base-medium"
                                )}
                            >
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
            <SignedOut>
                <div className="flex flex-col gap-3 ">
                    <Link href="/sign-in">
                        <Button
                            className="small-medium btn-secondary  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            <PiSignInBold className="lg:hidden size-7"/>
                            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button
                            className="small-medium btn-secondary  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            <TbLogin className="lg:hidden size-7"/>
                            <span className="primary-text-gradient max-lg:hidden">Sign Up</span>
                        </Button>
                    </Link>
                </div>
            </SignedOut>
        </div>
    );
};

export default LeftSidebar;

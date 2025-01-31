import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";



const Header = () => {
    return(
        <div className="flex-between fixed z-50 w-full gap-5 p-6 shadow-md dark:shadow-none sm:px-12 dark:dark-gradient bg-light-800">
            <div className="flex gap-2">
                {/* mobileNav */}
                <Link href={"/"} className="flex items-center gap-1">
                    <Image src="/favicon.ico" width={23} height={23} alt="Icon"/>
                    <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                        <span className="">Cybera</span>
                    </p>
                </Link>
            </div>
            <div className="flex-between gap-5">
                {/* Theme */}
                {/* UserButton */}
                <SignedIn>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "h-10 w-10",
                            },
                            variables: {
                                colorPrimary: "#ff7000",
                            },
                        }}
                    />
                </SignedIn>
                {/* RightNav */}
            </div>
        </div>
    );
}


export default Header;

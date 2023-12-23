import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalize } from "@clerk/themes";
import Image from "next/image";

export default function Page(){
    return (
    <div>
        <Image src='/back.jpg' width={900} height={1000} className="object-contain h-full w-full" alt="lmao"/>
        <div className="absolute top-24 right-0">
            <SignIn 
            appearance={{
                baseTheme:[neobrutalize]
            }}/>
        </div>
    </div>
    );
}
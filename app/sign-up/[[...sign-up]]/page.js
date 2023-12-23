import { SignUp } from "@clerk/nextjs";
import { dark, neobrutalize } from "@clerk/themes";
import Image from "next/image";

export default function Page() {
    return( 
        <div>
        <Image src='/back.jpg' width={900} height={1000} className="object-contain h-full w-full"/>
        <SignUp 
        appearance={{
        baseTheme: [dark,neobrutalize]
        }}/>;
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";
import { Social } from "./social";

const Header = () => {
    return (
    <header className="absolute z-50 w-full flex items-center px-16 xl:px-2 xl:h-[90px] ">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
                <Link href={'/'}
                >
                    <Image 
                    src={'/mati.png'}
                    width={220}
                    height={40}
                    alt="Matias Rivarola"
                    priority
                    />
                </Link>
                <Social/>
            </div>
        </div>
    </header>
    );
};

export default Header;
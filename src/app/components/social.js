import Link from "next/link";
import { RiInstagramLine, RiLinkedinBoxLine , RiGithubFill } from "react-icons/ri";
import {SiCodersrank} from "react-icons/si"

export const Social = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300"><RiInstagramLine/></Link>
      <Link href={''} className="hover:text-accent transition-all duration-300"><RiLinkedinBoxLine/></Link>
      <Link href={''} className="hover:text-accent transition-all duration-300"><RiGithubFill/></Link>
      <Link href={''} className="hover:text-accent transition-all duration-300"><SiCodersrank/></Link>
    </div>
  )
}
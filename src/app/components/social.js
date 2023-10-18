import Link from "next/link";
import { RiInstagramLine, RiLinkedinBoxLine , RiGithubFill } from "react-icons/ri";
import {SiCodersrank} from "react-icons/si"

export const Social = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300"><RiInstagramLine/></Link>
      <Link href={'https://www.linkedin.com/in/matirivarola1/'} className="hover:text-accent transition-all duration-300"><RiLinkedinBoxLine/></Link>
      <Link href={'https://github.com/MatiRivarola'} className="hover:text-accent transition-all duration-300"><RiGithubFill/></Link>
      <Link href={'https://profile.codersrank.io/user/matirivarola/'} className="hover:text-accent transition-all duration-300"><SiCodersrank/></Link>
    </div>
  )
}
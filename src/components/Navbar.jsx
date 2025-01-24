import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"


async function Navbar() {
  const  {getUser} = getKindeServerSession()
  const user = await getUser()
  // console.log(user)
  return (
    <nav className="bg-[#867cc2] text-white fixed z-50 w-full p-3">
    <div className="flex justify-between items-center px-5 ">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2 italic">
      BlissPost
      </div>

      {/* Links centered */}
      <div className="flex-1 flex justify-center space-x-6">
        <Link href="/">
         Home
        </Link>
        <Link href="/profile">
         Profile
        </Link>
      </div>

      {/* Buttons on the right */}
      <div className="flex items-center space-x-4">
       
      {
        user? 
        <>
      
        <button className="bg-[#b07c55] text-white px-4 py-2 rounded-lg transition duration-300">
         <Link href={"/api/auth/logout"}>
        Logout
        </Link>
      </button>
      </>
      :
      <>
       <button className="bg-[#b07c55] text-white px-4 py-2 rounded-lg transition duration-300">
          <Link href={"/api/auth/login"}
          >Login</Link>
          
        </button>
       
      </>
      }
      </div>
    </div>
  </nav>
  )
}

export default Navbar
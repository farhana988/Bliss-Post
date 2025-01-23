import Link from "next/link"


function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed z-50 w-full p-3">
    <div className="flex justify-between items-center px-5 ">
      {/* Logo on the left */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> 
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
          Login
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
          Logout
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
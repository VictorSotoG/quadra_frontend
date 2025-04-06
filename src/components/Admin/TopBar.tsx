import { BellIcon } from "@heroicons/react/24/outline"

export default function TopBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#2b4b6e] shadow-md w-full">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
        {/* <Search className="text-gray-400 mr-2" /> */}
        <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full"
        />
        </div>
        <div className="flex items-center space-x-4">
            <BellIcon className="size-6 text-white" /> 
        {/* <Bell className="text-gray-500" /> */}
        {/* <User className="text-gray-500" /> */}
        </div>
    </div>
  )
}

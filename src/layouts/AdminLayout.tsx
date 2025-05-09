import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AdminSideBar from "../components/Admin/AdminSideBar";
import TopBar from "../components/Admin/TopBar";

export default function AdminLayout() {
  return (
    <>
        <div className="md:flex bg-slate-200">
            <aside className="md:w-72 md:h-screen bg-[#0e2a47] text-white scrollbar-custom overflow-y-auto">
                <AdminSideBar />
            </aside>
            {/* bg-[#0e2a47] */}
            <main className="flex-1 bg-slate-100">
                <TopBar />
                <Outlet/>
            </main>
            <ToastContainer 
              pauseOnHover={false}
              pauseOnFocusLoss={false}
            />
        </div>
    </>
  )
}

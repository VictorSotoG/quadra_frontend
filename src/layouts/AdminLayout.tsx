import { Outlet } from "react-router-dom";
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
            <main className="flex-1">
                <TopBar />
                <Outlet/>
            </main>
        </div>
    </>
  )
}

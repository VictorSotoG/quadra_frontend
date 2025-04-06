import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";
import About from "./views/About";
import AdminLayout from "./layouts/AdminLayout";
import CarsView from "./views/admin/CarsView";
import InsurancesView from "./views/admin/InsurancesView";
import UsersView from "./views/admin/UsersView";
import ReservationsView from "./views/admin/ReservationsView";
import MaintenanceView from "./views/admin/MaintenanceView";
import BranchesView from "./views/admin/BranchesView";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />} >
              <Route path="/auth/login" element={<LoginView />} />
              <Route path="/auth/register" element={<RegisterView />} />
              <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
              <Route path="/auth/forgot-password" element={<ForgotPasswordView/>}/>
            </Route>
            <Route element={<AppLayout/>}>
              <Route path="/" element={<Home />} index />
              <Route path="/about" element={<About />} />
              {/* <Route path="/" element={<Book />} index /> */}
            </Route>
            <Route element={<AdminLayout />}>
              <Route path="/admin/cars" element={<CarsView/>}/>
              <Route path="/admin/insurances" element={<InsurancesView/>}/>
              <Route path="/admin/users" element={<UsersView/>}/>
              <Route path="/admin/reservations" element={<ReservationsView />} />
              <Route path="/admin/maintenance" element={<MaintenanceView />} />
              <Route path="/admin/branches" element={<BranchesView/>}/>
            </Route>

            
        </Routes>
    </BrowserRouter>
  )
}

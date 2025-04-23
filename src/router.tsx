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
import InsurancesView from "./views/admin/InsurancesView";
import ReservationsView from "./views/admin/reservations/ReservationsView";
import BranchesView from "./views/admin/BranchesView";
import ReservationDetails from "./views/admin/reservations/ReservationDetails";
import AdminCarDetails from "./views/admin/cars/AdminCarDetails";
import AdminCarsView from "./views/admin/cars/AdminCarsView";
import Cars from "./views/Cars";
import Reserve from "./views/Reserve";
import InsuranceDetails from "./views/admin/insurances/InsuranceDetails";
import AdminUsersView from "./views/admin/users/AdminUsersView";

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
              <Route path="/cars" element={<Cars />} />
              <Route path="/reserve/:carId" element={<Reserve />}/>
            </Route>
            <Route element={<AdminLayout />}>
              <Route path="/admin/cars" element={<AdminCarsView/>}/>
              <Route path="/admin/cars/details/:carId" element={<AdminCarDetails/>}/>
              <Route path="/admin/insurances" element={<InsurancesView/>}/>
              <Route path="/admin/insurances/details/:insuranceId" element={<InsuranceDetails />} />
              <Route path="/admin/users" element={<AdminUsersView/>}/>
              <Route path="/admin/reservations" element={<ReservationsView />} />
              <Route path="/admin/reservations/details/:reservationId" element={<ReservationDetails />} />
              <Route path="/admin/branches" element={<BranchesView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

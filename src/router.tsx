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
import AdminCarDetails from "./views/admin/cars/AdminCarDetails";
import AdminCarsView from "./views/admin/cars/AdminCarsView";
import Cars from "./views/Cars";
import Reserve from "./views/Reserve";
import AdminUsersView from "./views/admin/users/AdminUsersView";
import AdminUserDetails from "./views/admin/users/AdminUserDetails";
import AdminBranchesView from "./views/admin/branches/AdminBranchesView";
import AdminInsurancesView from "./views/admin/insurances/AdminInsurancesView";
import AdminInsuranceDetails from "./views/admin/insurances/AdminInsuranceDetails";
import AdminReservationsView from "./views/admin/reservations/AdminReservationsView";
import AdminReservationDetails from "./views/admin/reservations/AdminReservationDetails";
import AdminCreateInsuranceView from "./views/admin/insurances/AdminCreateInsuranceView";
import AdminBranchesCreateView from "./views/admin/branches/AdminBranchesCreateView";
import AdminBranchesEditView from "./views/admin/branches/AdminBranchesEditView";

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
              <Route path="/admin/insurances" element={<AdminInsurancesView/>}/>
              <Route path="/admin/insurances/create" element={<AdminCreateInsuranceView />} />
              <Route path="/admin/insurances/details/:insuranceId" element={<AdminInsuranceDetails />} />
              <Route path="/admin/users" element={<AdminUsersView/>}/>
              <Route path="/admin/users/details/:userId" element={<AdminUserDetails />} />
              <Route path="/admin/reservations" element={<AdminReservationsView />} />
              <Route path="/admin/reservations/details/:reservationId" element={<AdminReservationDetails />} />
              <Route path="/admin/branches" element={<AdminBranchesView/>}/>
              <Route path="/admin/branches/create" element={<AdminBranchesCreateView />}/>
              <Route path="/admin/branches/edit/:branchId" element={<AdminBranchesEditView />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

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
import Reserve from "./views/reservation/ReservationView";
import AdminUsersView from "./views/admin/users/AdminUsersView";
import AdminUserDetails from "./views/admin/users/AdminUserDetails";
import AdminBranchesView from "./views/admin/branches/AdminBranchesView";
import AdminInsurancesView from "./views/admin/insurances/AdminInsurancesView";
import AdminReservationsView from "./views/admin/reservations/AdminReservationsView";
import AdminReservationDetails from "./views/admin/reservations/AdminReservationDetails";
import AdminBranchesCreateView from "./views/admin/branches/AdminBranchesCreateView";
import AdminBranchesEditView from "./views/admin/branches/AdminBranchesEditView";
import AdminInsuranceCreateView from "./views/admin/insurances/AdminInsurancesCreateView";
import AdminInsuranceEditView from "./views/admin/insurances/AdminInsurancesEditView";
import ReservationDetails from "./views/reservation/ReservationDetails";
import NewPasswordView from "./views/auth/NewPasswordView";
import AdminCarsCreateView from "./views/admin/cars/AdminCarsCreateView";
import AdminCarsEditView from "./views/admin/cars/AdminCarsEditView";
import AdminUsersCreateView from "./views/admin/users/AdminUsersCreateView";
import AdminUsersEditView from "./views/admin/users/AdminUsersEditView";
import PaymentMethods from "./views/payment/PaymentMethods";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />} >
              <Route path="/auth/login" element={<LoginView />} />
              <Route path="/auth/register" element={<RegisterView />} />
              <Route path="/auth/confirm-account" element={<ConfirmAccountView/>}/>
              <Route path="/auth/forgot-password" element={<ForgotPasswordView/>}/>
              <Route path="/auth/new-password" element={<NewPasswordView/>}/>
            </Route>
            <Route element={<AppLayout/>}>
              <Route path="/" element={<Home />} index />
              <Route path="/about" element={<About />} />
              <Route path="/cars" element={<Cars />} />
              {/* Reservation */}
              <Route path="/reserve/:carId" element={<Reserve />}/>
              <Route path="/reserve/reservationDetails/:reservationId" element={<ReservationDetails />}/>
              {/* Payment */}
              <Route path="/methods" element={<PaymentMethods />}/>
            </Route>
            <Route element={<AdminLayout />}>
              {/* Car Routes  */}
              <Route path="/admin/cars" element={<AdminCarsView/>}/>
              <Route path="/admin/cars/details/:carId" element={<AdminCarDetails/>}/>
              <Route path="/admin/cars/create" element={<AdminCarsCreateView />}/>
              <Route path="/admin/cars/edit/:carId" element={<AdminCarsEditView />}/>
              {/* Insurances Routes  */}
              <Route path="/admin/insurances" element={<AdminInsurancesView/>}/>
              <Route path="/admin/insurances/create" element={<AdminInsuranceCreateView />} />
              <Route path="/admin/insurances/edit/:insuranceId" element={<AdminInsuranceEditView />} />
              {/* Users Routes  */}
              <Route path="/admin/users" element={<AdminUsersView/>}/>
              <Route path="/admin/users/details/:userId" element={<AdminUserDetails />} />
              <Route path="/admin/users/create" element={<AdminUsersCreateView />} />
              <Route path="/admin/users/edit/:userId" element={<AdminUsersEditView />} />
              {/* Reservations Routes  */}
              <Route path="/admin/reservations" element={<AdminReservationsView />} />
              <Route path="/admin/reservations/details/:reservationId" element={<AdminReservationDetails />} />
              {/* Branches Routes  */}
              <Route path="/admin/branches" element={<AdminBranchesView/>}/>
              <Route path="/admin/branches/create" element={<AdminBranchesCreateView />}/>
              <Route path="/admin/branches/edit/:branchId" element={<AdminBranchesEditView />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

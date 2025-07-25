import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast" 

import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import GlobalStyles from "./styles/GlobalStyles"
import AppLayout from "./ui/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0 , // 1 minutes
    }
  }
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>
<GlobalStyles />
   <BrowserRouter>
    <Routes>
    <Route element={<AppLayout />} >
       <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="bookings/:id" element={<Booking />} />
      <Route path="checkin/:id" element={<Checkin />} />
      <Route path="cabins" element={<Cabins />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
      <Route path="account" element={<Account />} />
    </Route>
     
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
   </BrowserRouter>
<Toaster position="top-center" gutter={12}  containerStyle={{margin:"8px"}} 
toastOptions={{
  success: {
    duration: 3000,
    style: {
      background: 'var(--color-green-700)',
      color: '#fff',
    },
  },
  error: {
    duration: 5000,
    style: {
      background: 'var(--color-red-700)',
      color: '#fff',
    },
  },
  style:{
    fontSize:"16px",
    maxWidth:"500px",
    padding:"16px 24px",
    backgroundColor:"var(--color-grey-0)",
    color: 'var(--color-grey-700)',
}
}}
/>
    </QueryClientProvider>
  )
}

export default App

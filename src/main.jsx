import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Main layout component
import Home from "./Pages/Home"; // HomePage component
import './index.css'
// import Lumatex2000 from "./pages/Lumatex2000"; // shop1 component
// import Mgp2000 from "./pages/Mgp2000"; // shop2 component
// import Hvac2000 from "./pages/Hvac2000"; // shop3 component
// import SignUp1 from "./pages/SignUp1"; // SignUp page component
// import Login from "./pages/Login"; // Login page component
// import Profile from "./pages/Profile"; // Profile page component (Protected)
// import Dashboard from "./pages/Dashboard"; // Dashboard page component (Protected)
// import Checkout from "./pages/Checkout"; // Checkout page component
// import Cart from "./pages/Cart"; // Cart page component
// import Contact from "./pages/Contact"; // Contact page component
// import About from "./pages/About"; // About page component
// import NotFound from "./pages/NotFound"; // 404 page component
// import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout component
    children: [
      {
        index: true, // Default route (Home page)
        element: <Home />, // Home page component
      },
      // {
      //   path: "LUMATEX",
      //   element: <Lumatex2000 />, // shop1 component
      // },
      // {
      //   path: "MGP",
      //   element: <Mgp2000 />, // shop2 component
      // },
      // {
      //   path: "HVAC",
      //   element: <Hvac2000 />, // shop3 component
      // },
      // {
      //   path: "signUp1",
      //   element: <SignUp1 />, // SignUp page component
      // },
      // {
      //   path: "login",
      //   element: <Login />, // Login page component
      // },
      // {
      //   path: "profile",
      //   element: (
      //     <ProtectedRoute>
      //       <Profile />
      //     </ProtectedRoute>
      //   ), // Profile page component (protected)
      // },
      // {
      //   path: "dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <Dashboard />
      //     </ProtectedRoute>
      //   ), // Dashboard page component (protected)
      // },
      // {
      //   path: "checkout",
      //   element: <Checkout />, // Checkout page component
      // },
      // {
      //   path: "cart",
      //   element: <Cart />, // Cart page component
      // },
      // {
      //   path: "contact",
      //   element: <Contact />, // Contact page component
      // },
      // {
      //   path: "about",
      //   element: <About />, // About page component
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />, // 404 page component for unmatched routes
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

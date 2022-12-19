import { createBrowserRouter } from "react-router-dom";

// pages
/* Import any new page here  and then add it to the router array as an object**/
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import CustomerService from "./pages/CustomerService";
import Mobile from "./pages/Mobile";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";
import ErrorPage from "./pages/ErrorPage";

export const pages = [
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/mobile",
    name: "Mobile",
    element: <Mobile />,
  },
  {
    path: "/privacy",
    name: "Privacy",
    element: <Privacy />,
  },
  {
    path: "/terms-of-use",
    name: "Terms of Use",
    element: <TermsOfUse />,
  },
  {
    path: "/career",
    name: "Career",
    element: <Career />,
  },
  {
    path: "/customer-service",
    name: <CustomerService />,
    element: <CustomerService />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  ...pages,
]);

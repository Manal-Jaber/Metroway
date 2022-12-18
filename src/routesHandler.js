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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/customer-service",
    element: <CustomerService />,
  },
  {
    path: "/mobile",
    element: <Mobile />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
]);

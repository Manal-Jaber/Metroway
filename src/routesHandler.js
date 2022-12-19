import { createBrowserRouter } from "react-router-dom";

// pages
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
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
    name: "CustomerService",
    element: <CustomerService />,
  },
];

// To add Header and/or footer to pages
const CommonPage = ({ page }) => {
  return (
    <div className="page">
      <Header />
      {page}
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonPage page={<Homepage />} />,
    errorElement: <ErrorPage />,
  },
  ...pages.map((page) => {
    const { path, element } = page;
    return { path, element: <CommonPage page={element} /> };
  }),
]);

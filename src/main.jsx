import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CompanyList from "./components/CompanyList.jsx";
import CompanyDetails from "./components/CompanyDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { getCompanies } from "./data/companies";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return getCompanies();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "company_list",
        element: <CompanyList />,
      },
      {
        path: "company_list/:id",
        element: <CompanyDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);

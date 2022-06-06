import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import {
  DynamicFormPages,
  FormikAbstract,
  FormikBasicPages,
  FormikComponents,
  FormikYupPages,
  RegistrerFormikPage,
  RegistrerPage,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registrer"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Registrer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formilBasic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikBasic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formilYup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikYup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formilComponents"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikAbstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstract{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikDynamic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Dynamic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Dynamic-Form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="registrer" element={<RegistrerPage />} />
          <Route path="formilBasic" element={<FormikBasicPages />} />
          <Route path="formilYup" element={<FormikYupPages />} />
          <Route path="formilComponents" element={<FormikComponents />} />
          <Route path="formikAbstract" element={<FormikAbstract />} />
          <Route path="formikDynamic" element={<RegistrerFormikPage />} />
          <Route path="Dynamic-Form" element={<DynamicFormPages />} />
          <Route path="home" element={<h1>Home Page</h1>} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

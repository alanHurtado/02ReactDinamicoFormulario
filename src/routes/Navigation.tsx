import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { RegistrerPage } from '../03-forms/pages/RegistrerPage';
import { FormikBasicPages } from '../03-forms/pages/FormikBasicPages';
import { FormikYupPages } from '../03-forms/pages/FormikYupPages ';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registrer" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Registrer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formilBasic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikBasic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formilYup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikYup</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="registrer" element={ <RegistrerPage/> } />
                    <Route path="formilBasic" element={ <FormikBasicPages/> } />
                    <Route path="formilYup" element={ <FormikYupPages/> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
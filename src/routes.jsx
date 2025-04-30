import { element } from "prop-types";
import { LayoutMain } from "./pages/LayoutMain";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { Children } from "react";
import { ProductPage } from "./pages/ProductsPage/ProductPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { SuppliersPage } from "./pages/SuppliersPage/SuppliersPage";
import { ClientPage } from "./pages/ClientPage/ClientPage";
import { MovementPage } from "./pages/MovementPage/MovementPage";
import { ReportPage } from "./pages/ReportPage/ReportPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Login } from "./components/Login/Login";

export const routes = [
    
    {
        path:'/',
        element: <LayoutMain />,
        children:[
            {path: '',element:<HomePage/>},
            {path: 'contact',element:<ContactPage/>},
            {path: 'login',element:<Login/>},
            {path: 'products',element:<ProductPage/>},
            {path: 'suppliers',element:<SuppliersPage/>},
            {path: 'client',element:<ClientPage/>},
            {path: 'movement',element:<MovementPage/>},
            {path: 'report',element:<ReportPage/>}
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardPage/>
    },
    {
        path:'*',
        element: <NotFoundPage/>
    }
]
import Root from "../pages/site/Root";
import Home from "../pages/site/Home"
import Login from "../pages/site/Login"
import Register from "../pages/site/Register"
import AdminRoot from "../pages/admin/AdminRoot"
import AdminRoot from "../pages/admin/Dashboard"
import CompanyDetail from "../pages/admin/CompanyDetail"
import CompanyAdminRoot from '../pages/companyAdmin'
import CreateLink from "../pages/companyAdmin/CreateLink";


export const ROUTES = [{
        path: "/",
        element: < Root / > ,
        children: [{
                path: "",
                element: < Home / > ,
            },
            {
                path: "login",
                element: < Login / > ,
            },
            {
                path: "register",
                element: < Register / > ,
            },
        ],
    },
    {
        path: "/admin",
        element: < AdminRoot / > ,
        children: [{
                path: "",
                element: < Dashboard / > ,
            },
            {
                path: "company-detail/:id",
                element: < CompanyDetail / > ,
            },
        ],
    },
    {
        path: "/company-admin",
        element: < CompanyAdminRoot / > ,
        children: [{
                path: "",
                element: < CompanyDashboard / > ,
            },
            {
                path: "create-link",
                element: < CreateLink / > ,
            },
        ],
    },
];
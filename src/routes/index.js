import Root from "pages/site/root";
import Home from "pages/site/Home"

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
    {
        path: "/admin",
        element: < AdminRoot / > ,
        children: [{
                path: "",
                element: < Dashboard / > ,
            },
            {
                path: "company-detail/:id",
                element: < ProductDetail / > ,
            },
        ],
    },
];
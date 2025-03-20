import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";
import { CompanyRoutes } from "./routes/company";


export default [
    ...prefix("company", [
        layout( "./routes/company.tsx", CompanyRoutes),
    ]),
] satisfies RouteConfig;

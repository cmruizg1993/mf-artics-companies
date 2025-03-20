import type { Route } from "./+types/company";
import CompanyContainer from "../features/company/company-container";
import { index, route } from "@react-router/dev/routes";

import { useEffect } from "react";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Company() {
  return (
    <>
      <h1>Company Page</h1>
      <CompanyContainer />
    </>
  );
}
export const companyListLoader = async () => {
  // You can return actual data or an empty response if needed
  return { data: [] };
};

export const CompanyRoutes = [
  index("./features/company/company-list.tsx"),
  route("create", "./features/company/company-create.tsx"),
  route("update/:id", "./features/company/company-update.tsx"),
  route("delete/:id", "./features/company/company-delete.tsx"),
];

import type { Company } from "~/core/model/interfaces/company"
import type { Route } from "./+types/company-update";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  let company = { name: "Company A" };
  return { params, company };
}

export default function CompanyList({ loaderData }: Route.ComponentProps) {
    console.log('data', loaderData);
    const goToCretaCompany = () => {
        console.log('Create company')
    }
    return (
        <>
            <artics-dynamic-form></artics-dynamic-form>
            <button onClick={goToCretaCompany} > Create</button >
        </>
    )
}
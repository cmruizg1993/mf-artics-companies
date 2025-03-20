import type { Company } from "~/core/model/interfaces/company"
import type { Route } from "./+types/company-list";
import { NavLink } from "react-router";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  let companies: Company[]  = [{ ruc: "9999999999999", name: "Company A" } ];
  return { companies };
}

export default function CompanyList({ loaderData: { companies } } : Route.ComponentProps) {
    
    
    const goToCretaCompany = () => {
        console.log('Create company')
    }
    const goToEditCompany = (company: Company) => {
        console.log('Edit company', company)
    }
    const goToDeleteCompany = (company: Company) => {
        console.log('Delete company', company)
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>RUC</th>
                        <th>Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((company, index) => {
                            return (
                                <tr key={index}>
                                    <td className="px-4 py-2">{company.ruc}</td>
                                    <td className="px-4 py-2">{company.name}</td>
                                    <td className="px-4 py-2">{company.address}</td>
                                    <td className="px-4 py-2">
                                        <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                                            to={'update/'+company.ruc}>Update</NavLink>
                                        <NavLink className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                                            to={'delete/'+company.ruc}>Delete</NavLink>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody >
            </table >
            <button onClick={goToCretaCompany} > Create</button >
        </>
    )
}
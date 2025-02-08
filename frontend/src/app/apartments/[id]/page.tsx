import { notFound } from "next/navigation"
export default async function Page({params}: any) {
    const {id} = await  params
    const getApartment = async (id: number) => {
        const response = await fetch(`${process.env.API_URL}/apartments/${id}`)

        if (!response.ok) {
            notFound()
        }

        const data= await response.json();

        return data.data
    }

    const apartment = await getApartment(id)

    return (
        <div className="container">
            <div className="row">
                <h2 className="my-5">Apartment Details</h2>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th scope="row">Unit Name</th>
                        <td>{ apartment.unit_name }</td>
                    </tr>
                    <tr>
                        <th scope="row">Unit Number</th>
                        <td>{ apartment.unit_number }</td>
                    </tr>
                    <tr>
                        <th scope="row">Price</th>
                        <td>{ apartment.price } EGP</td>
                    </tr>
                    <tr>
                        <th scope="row">Project</th>
                        <td>{ apartment.project }</td>
                    </tr>
                    <tr>
                        <th scope="row">Location</th>
                        <td>{ apartment.location }</td>
                    </tr>
                    <tr>
                        <th scope="row">Bedrooms</th>
                        <td>{ apartment.bedrooms }</td>
                    </tr>
                    <tr>
                        <th scope="row">Bathrooms</th>
                        <td>{ apartment.bathrooms }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

import type {Apartment} from "@/app/interfaces/Apartment.interface";
import ApartmentCard from "@/app/components/apartments/ApartmentCard";
import Link from "next/link";


export default async function Page({searchParams}: any) {

    const filters = await searchParams;

    const query_string = new URLSearchParams(filters);
    const loadApartments = async () => {
        const data = await fetch(`${process.env.API_URL}/apartments?${query_string}`)

        const apartments: { data: Apartment[] } = await data.json()

        return apartments;
    }

    const apartments: { data: Apartment[] } = await loadApartments()

    return (
        <div className="container">
            <div className="row">
                <form className="row mb-5">
                    <h2 className="mt-3">Find Your Apartment</h2>
                    <div className="col-md-3 col-sm-12">
                        <div className="m-1">
                            <input type="text" className="form-control" id="unit_name" name="unit_name"
                                   placeholder="Type Unit Name: Luxury Apartment"/>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12">
                        <div className="m-1">
                            <input type="number" className="form-control" id="unit_number" name="unit_number"
                                   placeholder="Type Unit Number: 500"/>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12">
                        <div className="m-1">
                            <input type="text" className="form-control" id="project" name="project" placeholder="Type Project: Zed"/>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12">
                        <div className="m-1">
                            <button type="submit" className="btn mx-2 btn-outline-success">Search</button>
                            <Link href="/apartments" className="btn mx-2 btn-outline-warning">Reset</Link>
                        </div>
                    </div>
                </form>

                {
                    apartments.data.map((apartment: Apartment) => (
                        <div className="col-md-3  col-sm-12" key={"apartment-" + apartment.id}>
                            <ApartmentCard apartment={apartment}/>
                        </div>
                    ))
                }
                {apartments.data.length > 0 ? "" : <p className="alert alert-warning"><strong>No Available Apartments</strong></p>}
            </div>
        </div>
    )
}

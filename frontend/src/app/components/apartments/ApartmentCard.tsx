import type {Apartment} from "@/app/interfaces/Apartment.interface";
import Link from "next/link";

// @ts-ignore
export default function ApartmentCard({apartment}) {
    return (
        <div className="card m-1">
            <img src="https://prod-images.cooingestate.com/processed/property_image/image/374417/high.webp"
                 className="card-img-top"
                 alt="Apartment Featured Image"/>
            <div className="card-body">
                <h5 className="card-title">{apartment?.unit_name}</h5>
                <p className="card-text">{ apartment?.location }</p>
                <Link href={"/apartments/" + apartment?.id} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
}

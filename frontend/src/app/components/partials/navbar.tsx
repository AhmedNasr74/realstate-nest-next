import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <Image src="https://www.nawy.com/assets/icons/common/nawy.svg" width={60} height={60} alt="Logo.svg"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/apartments">Apartments</Link>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <Link href="/apartments/create" className="btn btn-outline-secondary">Create Apartment</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
